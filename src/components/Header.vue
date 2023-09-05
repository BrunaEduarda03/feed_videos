<template>
  <header
    class="container mx-auto py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter"
  >
    <router-link to="/feed-videos">
      <div class="h-[50px] w-[250px] ml-[-20px]">
        <img src="../assets/videotopia.png" alt="logo header" />
      </div>
    </router-link>

    <div
      class="flex items-center gap-5 border-grayLighter border border-solid rounded-md p-2 px-3 relative hover:bg-primaryDarker"
    >
      <font-awesome-icon
        icon="bars"
        @click="toggleMenu"
        class="text-walterWhite cursor-pointer"
      />
      <div
        v-if="menuIsOpen"
        class="z-50 absolute top-14 left-0 w-[80px] h-[90px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2"
      >
        <router-link to="/favorite-videos" @click="toggleMenu">
          <button
            class="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold dark:text-white"
          >
            My Videos
          </button>
        </router-link>
        <button
          @click="handleLogOut"
          class="text-primary pt-1 text-sm font-semibold dark:text-white"
        >
          Log Out
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    handleLogOut() {
      localStorage.removeItem("user");
      this.$router.push("/SignIn");
    },
  },
};
</script>
