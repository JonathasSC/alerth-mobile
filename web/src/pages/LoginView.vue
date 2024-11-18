<template>
  <div class="page-container">
    <div class="container-acess">
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
        <button type="submit" class="button-advanced">Entrar na minha conta</button>
        <div class="container-link-acess">
          <router-link to="/register" class="account-info-has
">Não possui uma conta? Criar conta</router-link>
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
@import '../assets/styles/login-register.css';

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.links-container {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--margin-md);
}

.forgot-password-link {
  font-size: var(--font-size-xs);
  color: #7D93B5;
}
</style>