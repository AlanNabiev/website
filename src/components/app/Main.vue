<template>
  <main
    class="
      mt-10
      mx-auto
      max-w-7xl
      px-4
      sm:mt-12 sm:px-6
      md:mt-16
      lg:mt-20 lg:px-8
      xl:mt-28
    "
  >
    <div class="sm:text-center lg:text-left">
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-900
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block xl:inline">Welcome to</span>
        <span class="block text-indigo-600 xl:inline"> CryptoGboors</span>
      </h1>
      <p
        class="
          mt-3
          text-base text-gray-500
          sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
          md:mt-5 md:text-xl
          lg:mx-0
        "
      >
        Old blockchain/frontend/backend developers clan
      </p>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main"
});
</script>
