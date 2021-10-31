<template>
  <section class="h-full lg:h-screen flex flex-col space-y-10 mx-10 sm:mb-10">
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
        Team
      </h1>
      <img width="60" src="@/assets/images/sit-ninja.png" alt="" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <TeamMemberCard
        name="Sarmat Khachirov"
        description="Team lead and sensei"
        github="https://github.com/sarmatdev"
      />
      <TeamMemberCard
        name="Alan Nabiev"
        description="Frontend developer"
        github="https://github.com/AlanNabiev"
        gmail="mailto:alannabiev2001@gmail.com"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamMemberCard from "@/components/cards/TeamMemberCard.vue";

export default defineComponent({
  name: "Team",
  components: { TeamMemberCard }
});
</script>
