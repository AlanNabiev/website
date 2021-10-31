<template>
  <div>
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        class="
          relative
          flex
          items-center
          justify-between
          sm:h-10
          lg:justify-start
        "
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a class="flex justify-between items-center" href="#">
              <img
                class="h-6 w-auto sm:h-8 mr-2"
                src="@/assets/icons/ninja.svg"
              />
              <span class="text-2xl font-medium text-gray-700"
                >CryptoGboors</span
              >
            </a>
            <div @click="open = true" class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-indigo-500
                "
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <BaseIcon name="menu" />
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >About</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Team</a
          >

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
            >Projects</a
          >
        </div>
      </nav>
    </div>
    <transition
      enter-class="duration-150 ease-out"
      enter-active-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-class="duration-100 ease-in"
      leave-active-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="
          absolute
          z-10
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="flex justify-between items-center">
              <img
                class="h-8 w-auto mr-2"
                src="@/assets/icons/ninja.svg"
                alt=""
              />
              <span class="text-xl font-medium text-gray-700"
                >CryptoGboors</span
              >
            </div>
            <div @click="open = false" class="-mr-2">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-indigo-500
                "
              >
                <span class="sr-only">Close main menu</span>
                <BaseIcon name="x" />
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900 hover:bg-gray-50
              "
              >About</a
            >

            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900 hover:bg-gray-50
              "
              >Team</a
            >

            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900 hover:bg-gray-50
              "
              >Projects</a
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const open = ref(false);
    return {
      open
    };
  }
});
</script>
