<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-overlay"></div>
    <div
      class="modal-container bg-primaryDarker w-[500px] h-[300px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="py-4 text-center px-6">
        <div class="flex justify-between items-center pb-3">
          <p class="text-xl font-bold text-primaryLighter">{{ title }}</p>
          <button
            class="cursor-pointer text-xl font-semibold text-primary transition-colors duration-300 ease-in-out hover:text-redPrimary"
            @click="closeModal"
          >
            X
          </button>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    title: String,
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
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-container {
  transition: all 0.3s ease-in-out;
}
</style>
