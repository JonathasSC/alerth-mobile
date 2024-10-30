<template>
  <div class="login-container">
    <h1 class="title">Crie uma conta</h1>
    <p class="subtitle">Nos ajude a tornar a cidade melhor</p>
    <Form
      @submit="onSubmit"
      v-slot="{ values }"
      :validation-schema="signupSchema"
    >
      <div class="form-group">
        <Field name="username" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input
            class="input"
            :class="meta.touched && !meta.valid ? 'invalid' : ''"
            v-bind="field"
            placeholder="Nome completo"
          />
        </Field>
      </div>
      <div class="form-group">
        <Field name="email" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input
            class="input"
            :class="meta.touched && !meta.valid ? 'invalid' : ''"
            v-bind="field"
            placeholder="E-mail"
          />
        </Field>
      </div>
      <div class="form-group">
        <Field name="password" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input
            class="input"
            :class="meta.touched && !meta.valid ? 'invalid' : ''"
            v-bind="field"
            placeholder="Senha"
          />
        </Field>
      </div>

      <div class="links-container">
        <RouterLink to="/recuperar-senha" class="forgot-password-link">
          Esqueci a senha
        </RouterLink>
      </div>
      <button type="submit" class="login-button">Fazer registro</button>

      <div class="register-link-container">
        <RouterLink to="/login" class="register-link">
          Já possui uma conta? Faça login
        </RouterLink>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form } from "vee-validate";
import * as yup from "yup";

const signupSchema = yup.object({
  username: yup.string().required("Esse campo não pode ficar vazio"),
  email: yup
    .string()
    .required("Esse campo não pode ficar vazio")
    .email("Insira um email válido"),
  password: yup
    .string()
    .required("Esse campo não pode ficar vazio")
    .min(8, "Mínimo 8 caracteres"),
});

const onSubmit = async (values) => {
  console.log(values);
};
</script>

<style scoped>
.login-container {
  width: 427px;
  height: 699px;
  padding: 140px 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 36px;
  font-weight: bold;
  color: #3888ff;
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
  border: 1px solid #eef5ff;
  border-radius: 5px;
  font-size: 13px;
  background-color: #eef5ff;
  color: black;
  outline: none;
  transition: all 0.2s ease;
}

input:focus-visible {
  border-color: #eef9ff;
}

input.invalid {
  border-color: red;
}

input::placeholder {
  color: #758eb5;
}

.error-message {
  color: red;
  font-size: 90%;
  margin: 0;
  position: relative;
}

.links-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.forgot-password-link {
  font-size: 13px;
  color: #7d93b5;
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.login-button {
  width: 379px;
  height: 45px;
  padding: 10px;
  background-color: #3888ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #3888ff;
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
