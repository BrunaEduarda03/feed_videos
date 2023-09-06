<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 w-full">
    <div class="modal-overlay"></div>
    <div
      class="bg-purpleDark overflow-hidden w-[700px] w-screen-lg h-[500px] rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="py-4 text-center px-6">
        <div class="flex justify-between items-center pb-3">
          <p class="text-xl font-bold text-primaryLighter mt-5 ml-11">
            {{ title }}
          </p>
          <button
            class="cursor-pointer text-xl font-semibold text-primary transition-colors duration-300 ease-in-out hover:text-redPrimary"
            @click="closeModal"
          >
            X
          </button>
        </div>

        <slot></slot>
        <p>{{ description }}</p>
        <div class="flex justify-evenly items-center mt-5 gap-5">
          <router-link to="/feed-videos">
            <button
              class="bg-primaryDarker hover:bg-pinkLighter text-white font-semibold py-2 px-4 rounded-md"
            >
              Informações Adicionais
            </button>
          </router-link>

          <router-link to="/favorite-videos">
            <button
              class="bg-primaryDarker hover:bg-pinkLighter text-white font-semibold py-2 px-4 rounded-md"
            >
              Videos Favoritos
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    title: String,
    description: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-container {
  transition: all 0.5s ease-in-out;
}
</style>
