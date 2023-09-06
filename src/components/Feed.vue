<template class="bg-green-700">
  <section class="container mx-auto p-5">
    <div
      v-if="filteredVideos.length !== 0"
      class="flex items-center justify-center mt-10"
    >
      <h2
        class="px-5 font-medium text-grayLighter whitespace-nowrap lg:text-xl flex justify-center"
      >
        Videos Recomendados
      </h2>
    </div>

    <LoadingSpinner :is-loading="isLoading" />

    <modal :title="modalTitle" v-if="isModalOpen" @close="closeModal">
      <div class="relative h-full w-full">
        <img
          :src="modalImageUrl"
          :alt="modal"
          style="object-fit: cover"
          class="rounded-lg cursor-pointer"
          hidden
        />
        <div
          class="mt-5 flex justify-center items-center"
          v-if="clickedVideoId"
        >
          <iframe
            width="560"
            height="315"
            :src="'https://www.youtube.com/embed/' + clickedVideoId"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </modal>
    <div
      v-if="filteredVideos.length === 0"
      class="text-redPrimary font-semibold flex items-center justify-center mt-20"
    >
      Ops. Não foram encontrados vídeos correspondentes a pesquisa!
    </div>

    <div
      class="flex flex-col items-center gap-3 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10 lg:mt-10"
    >
      <VideoItem
        v-for="video in filteredVideos"
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

export default {
  name: "AppFeed",
  data() {
    return {
      isModalOpen: false,
      modalTitle: "Detalhes do Vídeo",
      modalImageUrl: "",
      clickedVideoId: "",
      description: "",
    };
  },
  props: {
    isLoading: Boolean,
    videos: Array,
    searchTerm: String,
  },

  methods: {
    openModal(imageUrl, videoId) {
      this.modalImageUrl = imageUrl;
      this.clickedVideoId = videoId;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.clickedVideoId = " ";
    },
    filterVideos() {
      return this.videos.filter((item) =>
        item.snippet.title.includes(this.searchTerm)
      );
    },
  },

  computed: {
    // Use uma computed property para obter a lista filtrada de vídeos
    filteredVideos() {
      return this.filterVideos();
    },
  },

  components: {
    VideoItem,
    LoadingSpinner,
    Modal,
  },
};
</script>
