<template>
  <div v-if="isLoading" class="text-walterWhite">
    <font-awesome-icon icon="circle-notch" spin class="text-walterWhite" />
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
