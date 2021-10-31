<template>
  <div
    v-if="pageLoading === 'loading'"
    class="fixed flex justify-center items-center inset-0 z-10 bg-white"
  >
    <img
      class="absolute animate-spin"
      width="90"
      src="@/assets/icons/shuriken.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const pageLoading = ref("loading");
    setTimeout(() => {
      pageLoading.value = "done";
    }, 1000);

    return {
      pageLoading
    };
  }
});
</script>
