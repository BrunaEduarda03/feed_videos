<template>
  <footer class="bg-purpleDark mt-20 bottom-0 left-0 w-full text-center">
    <div class="container mx-auto h-[1px] bg-grayLighter"></div>
    <div class="p-5 flex flex-col justify-center items-center">
      <router-link to="/feed-videos">
        <img
          src="../assets/videotopia.png"
          alt="logo footer"
          height="30"
          width="250"
        />
      </router-link>
      <p className="mt-1 font-medium text-sm text-walterWhite">
        Todos os direitos reservados!
      </p>
      <p className="mt-1 font-normal text-sm text-walterWhite">
        Desenvolvido por Bruna Eduarda, 2023
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
