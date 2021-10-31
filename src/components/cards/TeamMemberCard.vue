<template>
  <div
    class="
      p-10
      shadow-xl
      hover:shadow-2xl
      bg-white
      ring-2 ring-gray-100
      rounded-2xl
      flex flex-col
      space-y-12
      items-center
    "
  >
    <img
      class="inline-block rounded-full ring-2 ring-gray-100 ring-white"
      width="64"
      height="64"
      src="@/assets/images/user-ninja.png"
      alt=""
    />
    <div>
      <p class="text-2xl font-medium text-gray-700">{{ name }}</p>
      <p class="text-xl font-medium text-gray-500">{{ description }}</p>
    </div>

    <div class="flex space-x-6 transition-all">
      <a
        :href="github"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img src="@/assets/icons/github.svg" alt="" />
      </a>
      <a
        :href="gmail"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img src="@/assets/icons/gmail.svg" alt="" />
      </a>
      <a
        :href="twitter"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img src="@/assets/icons/twitter.svg" alt="" />
      </a>
      <a
        :href="telegram"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img src="@/assets/icons/telegram.svg" alt="" />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeamMemberCard",
  props: {
    name: String,
    description: String,
    github: String,
    gmail: String,
    twitter: String,
    telegram: String
  }
});
</script>
