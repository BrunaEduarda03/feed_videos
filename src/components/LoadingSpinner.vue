<template>
  <div v-if="isLoading" class="fixed inset-0 flex justify-center items-center">
    <font-awesome-icon icon="circle-notch" spin class="text-primary text-5xl" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "LoadingSpinner",
  components: {
    FontAwesomeIcon,
  },
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      icons: {
        faCircleNotch,
      },
    };
  },
};
</script>
