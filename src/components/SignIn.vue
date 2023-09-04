<template>
  <div class="h-screen w-screen flex-row">
    <div
      class="w-1/2 h-full flex bg-primaryDarker justify-center items-center flex-col"
    >
      <div class="basis-5/12 p-6">
        <img src="../assets/videotopia.png" />
        <form @submit.prevent="login">
          <label for="email" class="text-walterWhite">Email:</label>
          <input
            type="email"
            placeholder="E-mail"
            class="w-full text-sm mb-4 pl-3 rounded border py-2 shadow-md"
            v-model="form.email"
            required
          />
          <label for="password" class="text-walterWhite">Password:</label>
          <input
            type="password"
            placeholder="Password"
            class="text-sm w-full mb-5 pl-3 rounded border py-2 shadow-md"
            v-model="form.password"
            required
          />

          <button
            type="submit"
            class="font-bold text-white bg-primary w-full py-2 rounded-md shadow-2xl hover:bg-primaryLighter-hover duration-150"
          >
            Sign In
          </button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
    <div
      class="bg-search-background bg-cover bg-no-repeat w-[850px] h-[450px]"
    ></div>
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
      // Mocked user data
      const mockedUser = {
        email: "user@example.com",
        password: "password123",
      };
      if (
        this.form.email === mockedUser.email &&
        this.form.password === mockedUser.password
      ) {
        // Store user information in Local Storage
        localStorage.setItem("user", JSON.stringify(mockedUser));
        // Redirect to the feed
        this.$router.push("/feed-videos");
      } else {
        this.errorMessage = "Invalid email or password. Please try again.";
        this.$router.push("/SignIn");
      }
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
