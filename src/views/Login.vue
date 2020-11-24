<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid"
        >
          Введите email
        </small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid"
        >
          Некорректный Email
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{ invalid: ($v.password.$dirty && !$v.password.required)}"
        >
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid">
          Введите пароль
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">
          Зарегистрироваться
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators';
import messages from "../utils/messages";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required
    }
  },
  mounted() {
    if (messages[this.$route.params.message]) {
      this.$message(messages[this.$route.params.message]);
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>

</style>
