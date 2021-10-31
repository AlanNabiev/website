<template>
  <section class="text-center h-full lg:h-screen flex flex-col space-y-10 mb-10">
    <div class="flex justify-center">
      <img width="60" src="@/assets/images/bg-ninja.png" alt="" />
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
        About
      </h1>
      <img
        width="60"
        class="transform scale-x-mirror"
        src="@/assets/images/bg-ninja.png"
        alt=""
      />
    </div>
    <p
      class="
        my-3
        text-base text-gray-500
        sm:my-5 sm:text-lg sm:max-w-xl sm:mx-auto
        md:my-5 md:text-xl
      "
    >
      CryptoGBoors team is a community of developers in the field of blockchain
      technologies. Why CryptoGBoors ? It's simple! Gboors are ancient Ossetian
      fighters who collected coins from all over the world.
    </p>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About"
});
</script>
