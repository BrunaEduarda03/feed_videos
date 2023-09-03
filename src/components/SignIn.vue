<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center h-full"
  >
    <h1 class="text-4xl font-bold mb-5 text-primaryDarker">Sign In</h1>
    <form class="flex-col justify-center items-center" @submit.prevent="login">
      <input
        type="email"
        placeholder="E-mail"
        class="w-full text-sm mb-4 pl-3 rounded border py-2 shadow-md"
        v-model="form.email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        class="text-sm w-full mb-4 pl-3 rounded border py-2 shadow-md"
        v-model="form.password"
        required
      />

      <button
        type="submit"
        class="font-bold text-white bg-primary w-full py-2 rounded-md shadow-2xl hover:bg-azul-hover duration-150"
      >
        Sign In
      </button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },

      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    login() {
      const mockedUser = {
        email: "user@example.com",
        password: "password123",
      };
      console.log(mockedUser);
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
