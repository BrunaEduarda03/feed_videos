<template>
  <footer>
    <div
      className=" container mx-auto w-full h-[1px] bg-grayLighter mt-10 mb-3"
    ></div>
    <div
      className="p-5 flex flex-col justify-center items-center bg-purpleDark"
    >
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
