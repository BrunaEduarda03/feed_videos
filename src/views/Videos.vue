<template>
  <Header :searchTerm="searchTerm" @updateSearchTerm="updateSearchTerm" />
  <Feed
    :videos="videos"
    :isLoading="isLoading"
    :searchTerm="searchTerm"
    class="min-h-screen"
  />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Feed from "@/components/Feed.vue";
import { searchVideos } from "../api";

export default {
  name: "feed-videos",
  components: { Header, Footer, Feed },
  data() {
    return {
      videos: [],
      isLoading: true,
      searchTerm: "",
    };
  },

  created() {
    this.fetchVideos();
  },

  methods: {
    async fetchVideos() {
      try {
        const data = await searchVideos();

        if (!data) throw new Error("Error fetching videos");

        this.videos = data;
        console.log("videos", data);
        this.isLoading = false;

        this.videos.forEach((video) => {
          const videoId = video.id.videoId;
          console.log("videoId:", videoId);
        });
      } catch (error) {
        console.error("Error fetching videos:", error);
        this.isLoading = false;
      }
    },
    updateSearchTerm(searchTerm) {
      this.searchTerm = searchTerm;
    },
  },
};
</script>
