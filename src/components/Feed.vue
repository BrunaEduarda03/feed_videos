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
      <div class="relative h-full w-full">
        <img
          :src="modalImageUrl"
          :alt="modal"
          style="object-fit: cover; width: 100%; height: 100%"
          class="rounded-lg cursor-pointer"
        />
        <a
          :href="'https://www.youtube.com/watch?v=' + clickedVideoId"
          target="_blank"
        >
          <font-awesome-icon
            icon="play"
            beat-fade
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-redPrimary cursor-pointer h-10 w-10 hover:scale-110 transform transition-transform duration-300 ease-in-out rounded-sm"
            style="object-fit: cover"
          />
        </a>
      </div>
    </modal>

    <div
      class="flex flex-col items-center gap-3 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10 lg:mt-10"
    >
      <VideoItem
        v-for="video in videos.filter((item) =>
          item.snippet.title.includes(searchTerm)
        )"
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
    },
  },

  components: {
    VideoItem,
    LoadingSpinner,
    Modal,
  },
};
</script>
