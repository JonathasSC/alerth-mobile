<template>
  <div class="container-acess">
    <h1 class="title">Crie uma conta</h1>
    <p class="subtitle">Nos ajude a tornar a cidade <br> melhor</p>
    <Form @submit="onSubmit" v-slot="{ values }" :validation-schema="signupSchema">
      <div class="form-group">
        <Field name="username" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input class="input" :class="meta.touched && !meta.valid ? 'invalid' : ''" v-bind="field"
            placeholder="Nome completo" />
        </Field>
      </div>
      <div class="form-group">
        <Field name="email" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input class="input" :class="meta.touched && !meta.valid ? 'invalid' : ''" v-bind="field"
            placeholder="E-mail" />
        </Field>
      </div>
      <div class="form-group">
        <Field name="password" v-slot="{ field, meta, errorMessage }">
          <p class="error-message" v-if="!!errorMessage">
            {{ errorMessage }}
          </p>
          <input class="input" :class="meta.touched && !meta.valid ? 'invalid' : ''" v-bind="field"
            placeholder="Senha" />
        </Field>
      </div>

      <button type="submit" class="button-advanced">Fazer registro</button>

      <div class="container-link-acess">
        <RouterLink to="/login" class="account-info-has
">
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
@import '../assets/styles/login-register.css';

.container-acess {
  margin-top: 200px;
  
}

.button-advanced {
  width: 339px;
}

</style>