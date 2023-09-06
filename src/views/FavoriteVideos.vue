<template>
  <Header />
  <div
    class="bg-purpleDark container mx-auto p-5 flex flex-col min-h-screen mt-5 items-center grow justify-center"
  >
    <p className=" text-primaryLighter mt-5 text-xl mb-10 ">
      Você não possui nenhum video Favorito!
    </p>
    <router-link to="/feed-videos">
      <button
        class="bg-primaryDarker hover:bg-pinkLighter text-white font-semibold py-2 px-4 rounded-md"
      >
        Voltar para a página inicial
      </button>
    </router-link>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "favoriteVideos",
  components: { Header, Footer },
};
</script>
