<template>
  <div
    class="
      relative
      py-10
      px-10
      pb-20
      shadow-xl
      hover:shadow-2xl
      bg-white
      ring-2 ring-gray-100
      rounded-2xl
      flex flex-col
      space-y-8
      items-center
    "
  >
    <div class="h-20 flex items-center justify-center">
      <img
        width="180"
        :src="require(`@/assets/images/projects/${name}.png`)"
        alt=""
      />
    </div>
    <div
      v-if="!done"
      class="
        text-xl
        font-bold
        text-yellow-400
        flex
        justify-between
        items-center
        relative
        p-2
        rounded-md
        ring-1 ring-yellow-400
      "
    >
      in progress
      <div class="absolute -right-2 -top-2">
        <span class="flex h-3 w-3 relative">
          <span
            class="
              animate-ping
              absolute
              inline-flex
              h-full
              w-full
              rounded-full
              bg-yellow-400
              opacity-75
            "
          ></span>
          <span
            class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"
          ></span>
        </span>
      </div>
    </div>

    <div
      v-if="done"
      class="
        text-xl
        font-bold
        text-green-400
        flex
        justify-between
        items-center
        relative
        p-2
        rounded-md
        ring-1 ring-green-400
      "
    >
      Done
      <BaseIcon class="absolute -right-2 -top-2 bg-white" name="check-circle" />
    </div>
    <div>
      <p class="text-2xl font-bold text-gray-700"><slot name="title" /></p>
      <p class="text-xl font-medium text-gray-500">
        <slot name="description" />
      </p>
    </div>
    <div
      class="
        flex
        items-center
        space-x-6
        transition-all
        absolute
        left-2/4
        transform
        -translate-y-2/4 -translate-x-2/4
        bottom-0
      "
    >
      <a
        :href="projectUrl"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img
          width="32"
          :src="require(`@/assets/images/projects/${name}-logo.png`)"
          alt=""
        />
      </a>
      <a
        v-if="!nda"
        :href="github"
        target="_blank"
        class="cursor-pointer transform hover:scale-125"
      >
        <img src="@/assets/icons/github.svg" alt="" />
      </a>
      <span v-if="nda" class="font-bold text-xl text-black">NDA</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    name: String,
    project: String,
    description: String,
    projectUrl: String,
    github: String,
    nda: {
      type: Boolean,
      default: false
    },
    done: {
      type: Boolean,
      default: false
    }
  }
});
</script>
