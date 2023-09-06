<template>
  <div class="h-screen">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "favoriteVideos",
  components: { Header, Footer },
};
</script>
