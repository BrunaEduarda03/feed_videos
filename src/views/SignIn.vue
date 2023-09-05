<template>
  <div class="h-screen w-screen flex-row">
    <div
      class="w-1/2 h-full flex bg-primaryDarker justify-center items-center flex-col"
    >
      <div class="basis-5/12 p-6">
        <img src="../assets/videotopia.png" alt="logo" class="mb-10" />
        <form @submit.prevent="login">
          <label for="email" class="text-walterWhite">Email:</label>
          <input
            type="email"
            placeholder="hello@reallygreatsite.com"
            class="w-full text-sm mb-3 pl-3 rounded border py-2 shadow-md mt-1 bg-transparent text-walterWhite"
            v-model="form.email"
            required
          />
          <label for="password" class="text-walterWhite">Password:</label>
          <input
            type="password"
            placeholder="*******"
            class="text-sm w-full mb-5 mt-1 pl-3 rounded border py-2 shadow-md bg-transparent text-walterWhite"
            v-model="form.password"
            required
          />

          <button
            type="submit"
            class="font-bold text-white bg-primary w-full py-2 rounded-md shadow-2xl hover:bg-primaryLighter-hover duration-150"
          >
            Sign In
          </button>
          <div class="flex justify-center mt-2">
            <p class="text-walterWhite">
              New here?
              <span class="underline font-bold text-walterWhite"
                >Create an account</span
              >
            </p>
          </div>
        </form>
        <p v-if="errorMessage" class="text-redPrimary flex justify-center">
          {{ errorMessage }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-col w-7/12 bg-search-background bg-cover h-[600px]"
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
        this.form.email = "";
        this.form.password = "";
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
