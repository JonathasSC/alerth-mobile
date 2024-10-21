<template>
  <div class="login-container">
    <h1 class="title">Crie uma conta</h1>
    <p class="subtitle">Nos ajude a tornar a cidade melhor</p>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Nome de usuário" required />
      </div>
      <div class="form-group">
        <input type="text" v-model="email" placeholder="E-mail" required />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Senha" required />
      </div>
      <div class="links-container">
        <router-link to="/recuperar-senha" class="forgot-password-link">Esqueci a senha</router-link>
      </div>
      <button type="submit" class="login-button">Fazer registro</button>
      <div class="register-link-container">
        <router-link to="/cadastro" class="register-link">Já possui uma conta? Faça login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log('Usuário:', this.username);
      console.log('E-mail:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 427px; 
  height: 699px; 
  padding: 140px 20px; 
  box-sizing: border-box;
  background-color: white;
  border: 2px solid #cbccd7; 
  border-radius: 10px; 
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #3888FF;
  margin-bottom: 1px;
  align-self: flex-start; 
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  color: #a0bee9;
  margin-top: 8px; 
  margin-bottom: 30px; 
  align-self: flex-start; 
}

.form-group {
  width: 100%;
  margin-bottom: 20px; 
}

input {
  width: 379px;
  height: 48px; 
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #EEF5FF;
  border-radius: 5px;
  font-size: 13px;
  background-color: #EEF5FF; 
  color: white;
}

input::placeholder {
  color: #758EB5;
}

.links-container {
  width: 100%;
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 20px; 
}

.forgot-password-link {
  
  font-size: 13px;
  color: #7D93B5; 
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.login-button {
  width: 379px; 
  height: 45px; 
  padding: 10px;
  background-color: #3888FF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #3888FF;
}

.register-link-container {
  width: 100%;
  display: flex;
  justify-content: center; 
  margin-top: 20px; 
}

.register-link {
  font-size: 13px; 
  color: #3888ffd7; 
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>