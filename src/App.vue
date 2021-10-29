<template>
  <h1 class="text-red-500">CryptoGBoors website</h1>
  <BaseIcon />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style>
body {
  @apply m-0 p-0 box-border list-none;
}
#app {
  @apply font-body text-center absolute top-2/4 right-2/4 transform translate-x-2/4 translate-y-2/4;
}
</style>
