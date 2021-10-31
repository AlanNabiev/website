<template>
  <div>
    <div class="relative bg-white lg:h-screen overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="
            relative
            z-10
            pb-8
            bg-white
            sm:pb-16
            md:pb-32
            lg:max-w-2xl lg:w-full
            xl:pb-32
          "
        >
          <Header />

          <Main />
        </div>
      </div>
      <div class="bg-white lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="object-cover w-full h-full"
          src="@/assets/images/ninja.png"
          alt=""
        />
      </div>
      <div
        class="
          lg:absolute
          lg:left-2/4
          lg:transform
          lg:-translate-x-2/4
          lg:-translate-y-2/4
          lg:-bottom-20
          hidden
          lg:block
          z-10
        "
      >
        <img
          class="h-56 sm:h-18 md:h-28 lg:h-56"
          src="@/assets/images/jumping-ninja.png"
          alt=""
        />
      </div>
      <a
        class="
          hidden
          lg:block
          absolute
          left-2/4
          bottom-2
          animate-bounce
          cursor-pointer
          p-0
        "
        href=""
      >
        <BaseIcon size="xl" name="chevron-down" />
      </a>
    </div>
    <About />
    <Team />
    <Projects />
    <Footer />
  </div>
  <BaseLoading />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/app/Header.vue";
import Main from "@/components/app/Main.vue";
import About from "@/components/app/About.vue";
import Team from "@/components/app/Team.vue";
import Projects from "@/components/app/Projects.vue";
import Footer from "@/components/app/Footer.vue";

export default defineComponent({
  name: "App",
  components: { Header, Main, About, Team, Projects, Footer }
});
</script>

<style>
body {
  @apply m-0 p-0 box-border list-none;
}
#app {
  @apply font-body text-center w-full h-full;
}
</style>
