<template>
  <Header />
  <Feed />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Feed from "@/components/Feed.vue";

export default {
  name: "feed-videos",
  components: { Header, Footer, Feed },
};
</script>
