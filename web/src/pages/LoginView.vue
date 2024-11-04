<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="title">Entrar em Alerth</h1>
      <p class="subtitle">Contribuindo para uma <br> cidade melhor</p>
      <form @submit.prevent="handleLogin">
        <p v-if="error" class="error-message">Nome de usuário, email ou senha incorretos</p>
        <div class="form-group" :class="{ 'input-error': error && !usernameOrEmail }">
          <input type="text" v-model="usernameOrEmail" placeholder="Nome de usuário ou E-mail" />
        </div>
        <div class="form-group" :class="{ 'input-error': error && !password }">
          <input type="password" v-model="password" placeholder="Senha" />
        </div>
        <div class="links-container">
          <router-link to="#" class="forgot-password-link">Esqueci a senha</router-link>
        </div>
        <button type="submit" class="login-button">Entrar na minha conta</button>
        <div class="register-link-container">
          <router-link to="/register" class="register-link">Não possui uma conta? Criar conta</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameOrEmail: '',
      password: '',
      error: false
    };
  },
  methods: {
    handleLogin() {
      if (!this.usernameOrEmail || !this.password) {
        this.error = true;
      } else {
        const users = [
          { username: 'usuario1', email: 'usuario1@exemplo.com', password: 'senha123' },
          { username: 'usuario2', email: 'usuario2@exemplo.com', password: 'senha456' }
        ];

        const user = users.find(user =>
          (user.username === this.usernameOrEmail || user.email === this.usernameOrEmail) &&
          user.password === this.password
        );

        if (user) {
          console.log('Login bem-sucedido');
          this.error = false;
          this.$router.push('/');
        } else {
          console.log('Nome de usuário ou senha incorretos');
          this.error = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.login-container {
  width: 380px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #3888FF;
  margin-bottom: 1px;
  align-self: flex-start;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #a0bee9;
  margin-top: 8px;
  margin-bottom: 25px;
  align-self: flex-start;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.input-error input {
  border: 1px solid red;
}

input {
  width: 330px;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  background-color: #EEF5FF;
}

input::placeholder {
  color: #758EB5;
}

.links-container {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.forgot-password-link {
  font-size: 0.8rem;
  color: #7D93B5;
}

.login-button {
  width: 330px;
  padding: 15px;
  background-color: #3888FF;
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
}

.register-link-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.register-link {
  font-size: 0.8rem;
  color: #3888ffd7;
  text-decoration: none;
}
</style>
