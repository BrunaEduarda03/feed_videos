<template>
  <section class="container mx-auto p-5">
    <div class="flex items-center justify-center mt-10">
      <h2
        class="px-5 font-medium text-grayLighter whitespace-nowrap lg:text-xl flex justify-center"
      >
        Videos Recomendados
      </h2>
    </div>

    <LoadingSpinner :is-loading="isLoading" />

    <modal :title="modalTitle" v-if="isModalOpen" @close="closeModal">
      <!-- Conteúdo do modal -->
      <div
        class="relative h-[220px] w-[300px] flex justify-center items-center"
      >
        <img
          :src="modalImageUrl"
          :alt="modal"
          style="object-fit: cover"
          class="rounded-lg cursor-pointer justify-center items-center"
        />
        <!-- Posicionando o ícone no meio da div -->
        <font-awesome-icon
          icon="play"
          beat-fade
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-redPrimary cursor-pointer h-10 w-10 hover:scale-110 transform transition-transform duration-300 ease-in-out"
          style="object-fit: cover"
        />
      </div>
    </modal>

    <div
      class="flex flex-col items-center gap-3 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10 lg:mt-10"
    >
      <VideoItem
        v-for="video in videos"
        :key="video.id"
        :video="video"
        @open-modal="openModal"
      />
    </div>
  </section>
</template>

<script>
import VideoItem from "./VideoItem.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import Modal from "./Modal.vue";
import { searchVideos } from "../api/index.js";

export default {
  name: "AppFeed",
  data() {
    return {
      videos: [],
      isLoading: true,
      isModalOpen: false,
      modalTitle: "Detalhes do Vídeo",
      modalImageUrl: "",
    };
  },
  created() {
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        const data = await searchVideos();

        if (!data) {
          throw new Error("Erro ao buscar vídeos");
        }

        this.videos = data;
        this.isLoading = false;
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
        this.isLoading = false;
      }
    },
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.isModalOpen = true;
    },
    closeModal() {
      console.log("clicou");
      this.isModalOpen = false;
    },
  },
  components: {
    VideoItem,
    LoadingSpinner,
    Modal,
  },
};
</script>
