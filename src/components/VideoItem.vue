<template>
  <div class="flex flex-col mt-5">
    <div class="relative h-[220px] w-[300px]">
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="hover:scale-110 transform transition-transform duration-300 ease-in-out rounded-lg cursor-pointer"
        @click="openModal(video.snippet.thumbnails.medium.url)"
        style="object-fit: cover"
      />
      <h2 class="text-walterWhite pt-3">{{ video.snippet.title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object,
  },
  methods: {
    openModal(imageUrl) {
      this.$emit("open-modal", imageUrl); // Emita o evento para abrir a modal com a URL da imagem
    },
  },
};
</script>
