<!-- Modal.vue -->
<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal-overlay"></div>
    <div
      class="modal-container bg-primaryDarker w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <!-- Conteúdo do modal -->
      <div class="modal-content py-4 text-left px-6">
        <!-- Título do modal -->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">{{ title }}</p>
          <button
            class="cursor-pointer text-xl font-semibold text-primary transition-colors duration-300 ease-in-out hover:text-redPrimary"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <!-- Corpo do modal -->
        <slot></slot>
        <div class="mt-4">
          <button
            class="bg-primary text-white py-2 px-4 rounded hover:bg-redPrimary"
            @click="closeModal"
          >
            Fechar
          </button>
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
    //openvideo: String,
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

/* Estilo do modal */
.modal-container {
  transition: all 0.3s ease-in-out;
}
</style>
