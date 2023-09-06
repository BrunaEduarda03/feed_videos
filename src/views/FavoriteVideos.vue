<template>
  <div class="bg-purpleDark h-screen container mx-auto p-5">
    <Header />
    <div className=" flex flex-col mt-5 ">
      <p className=" text-primaryLighter mt-5 text-xl ">
        Você não possui nenhum video Favorito!
      </p>
      <div className=" flex flex-col  mt-5 ">
        <router-link to="/feed-videos">
          <button
            class="bg-primaryDarker hover:bg-pinkLighter text-white font-semibold py-2 px-4 rounded-md"
          >
            Voltar para a página inicial
          </button>
        </router-link>
      </div>
    </div>
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
