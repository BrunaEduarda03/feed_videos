<template>
  <div class="flex flex-col mt-5 relative h-[220px] w-[300px] mb-5">
    <img
      :src="video.snippet.thumbnails.medium.url"
      :alt="video.snippet.title"
      class="hover:scale-110 transform transition-transform duration-300 ease-in-out rounded-lg cursor-pointer"
      @click="openModal(video.snippet.thumbnails.medium.url, video.id.videoId)"
      style="object-fit: cover"
    />
    <h2 class="text-walterWhite pt-3">{{ video.snippet.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object,
  },
  methods: {
    openModal(imageUrl, videoId) {
      this.$emit("open-modal", imageUrl, videoId); // Emita o evento com imageUrl e videoId
    },
  },
};
</script>
