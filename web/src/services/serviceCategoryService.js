import api from "./apiService";

export default {
  async getAll() {
    return await api().get("api/service-category/");
  },
};
