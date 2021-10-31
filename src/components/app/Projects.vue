<template>
  <section class="h-full lg:h-screen flex flex-col space-y-10 mx-10 my-10">
    <div class="flex justify-center">
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
        Projects
      </h1>
      <img width="60" src="@/assets/images/ready-ninja.png" alt="" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <ProjectCard
        name="vite"
        projectUrl="https://vitex.net/"
        github="https://github.com/sarmatdev/vite-extension"
        done
      >
        <template v-slot:title>Vite browser wallet extension</template>
        <template v-slot:description
          >We create vite browser wallet extension and implemented vite js sdk
          for using wallet in vite blockchain, inject methods and more</template
        >
      </ProjectCard>
      <ProjectCard name="1inch" nda>
        <template v-slot:title>1inch browser wallet extension</template>
        <template v-slot:description
          >We create 1inch browser wallet with swap and create 1inch sdk around
          1inch api for using wallet in several blockchain networks such as
          Etherium, Binance, Polygon, Positive. Also we add inject methods and
          more</template
        >
      </ProjectCard>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "@/components/cards/ProjectCard.vue";

export default defineComponent({
  name: "Projects",
  components: { ProjectCard }
});
</script>
