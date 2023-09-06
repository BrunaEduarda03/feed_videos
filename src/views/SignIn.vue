<template>
  <div class="h-screen w-screen flex flex-col lg:flex-row">
    <div
      class="h-full lg:w-1/2 flex bg-primaryDarker justify-center items-center flex-col p-6 min-w-screen"
    >
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
    <div class="flex flex-col w-1/2 justify-center items-center bg-contain">
      <img
        src="../assets/ballImage.png"
        alt="background"
        class="h-auto w-full hidden lg:block p-16"
      />
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const passwordStrong = (value) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    value
  );
};
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
        passwordStrong,
      },
    },
  },

  methods: {
    login() {
      const mockedUser = {
        email: "user@example.com",
        password: "#Password123",
      };
      if (
        this.form.email === mockedUser.email &&
        this.form.password === mockedUser.password
      ) {
        toast("Bem-vindo de volta", {
          position: "top-right",
          duration: 3000,
        });

        localStorage.setItem("user", JSON.stringify(mockedUser));
        this.$router.push("/feed-videos");
      } else {
        this.errorMessage = "Invalid email or password. Please try again.";
        this.$router.push("/SignIn");
        this.form.email = "";
        this.form.password = "";
        toast("Erro ao logar", {
          position: "top-right",
          duration: 3000,
          type: "error",
        });
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
