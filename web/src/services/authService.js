import apiService from "./apiService";
import authStore from "../stores/authStore";

const authService = {
  async register(credentials) {
    try {
      const response = await apiService().post("/register", credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || "Erro ao registrar");
    }
  },

  async login(credentials) {
    try {
      const response = await apiService().post("/login", credentials);
      if (response.data.access_token) {
        localStorage.setItem("authToken", response.data.token);
        authStore.setAuthenticated(true);
      }
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.detail || "Erro ao fazer login");
    }
  },

  async checkAuth() {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Token de autenticação não encontrado");
      }

      const response = await apiService().get("/check_auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.detail || "Erro ao verificar autenticação"
      );
    }
  },

  async logout() {
    try {
      localStorage.removeItem("authToken");
      authStore.setAuthenticated(false);
      return { message: "Logout realizado com sucesso" };
    } catch (error) {
      throw new Error("Erro ao fazer logout");
    }
  },
};

export default authService;
