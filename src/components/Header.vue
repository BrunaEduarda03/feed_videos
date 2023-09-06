<template>
  <header
    class="top-0 left-0 flex-col lg:flex-row container mx-auto py-0 h-[93px] flex lg:justify-between items-center lg:border-b lg:border-grayLighter z-50"
  >
    <router-link to="/feed-videos">
      <div class="h-[50px] w-[250px] ml-[-20px]">
        <img src="../assets/videotopia.png" alt="logo header" />
      </div>
    </router-link>
    <div class="flex items-center relative">
      <input
        :value="searchTerm"
        type="text"
        class="bg-primaryDarker border-grayLighter border border-solid rounded-md p-1.5 w-[450px] pl-2 text-grayLighter order-2"
        placeholder="Search Videos"
        @input="$emit('updateSearchTerm', $event.target.value)"
      />

      <font-awesome-icon
        icon="magnifying-glass"
        class="text-walterWhite hover:text-grayPrimary cursor-pointer bg-primaryDarker p-2 px-2 rounded-md absolute right-1 top-1/2 transform -translate-y-1/2"
      />
    </div>

    <div
      class="flex items-center gap-5 border-grayLighter border border-solid rounded-md p-2 px-3 relative hover:bg-primaryDarker"
    >
      <div class="flex-shrink-0 order-1">
        <font-awesome-icon
          icon="bars"
          @click="toggleMenu"
          class="text-walterWhite cursor-pointer"
        />
      </div>
      <div
        v-if="menuIsOpen"
        class="z-50 absolute top-14 left-0 w-[80px] h-[90px] bg-primaryDarker rounded-lg shadow-md flex flex-col justify-center items-center gap-2"
      >
        <router-link to="/favorite-videos" @click="toggleMenu">
          <button
            class="text-walterWhite pb-2 border-b border-grayLighter border-solid text-sm font-semibold dark:text-white"
          >
            My Videos
          </button>
        </router-link>
        <button
          @click="handleLogOut"
          class="text-walterWhite pt-1 text-sm font-semibold dark:text-white"
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
  props: {
    searchTerm: String,
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
