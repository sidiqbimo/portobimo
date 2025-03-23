<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  categories: Array,
  description: String,
  prototypeLink: String,
  designJourneyLink: String,
});

const showOverlay = ref(false);
</script>

<template>
  <div class="w-full bg-[#F0FBD4] rounded-lg pt-3 px-4 pb-7 flex flex-col overflow-hidden shadow-md border border-[#A9C46C]">

    <!-- 🖼️ Image Container with Overlay -->
    <div
      class="relative aspect-[34/30] rounded-lg overflow-hidden border-2 border-[#A9C46C] shadow-md group"
      @click="showOverlay = !showOverlay"
    >
      <img :src="imageSrc" :alt="altText" class="w-full h-full object-cover" />

      <!-- Overlay (always rendered, visibility controlled by class) -->
      <div
        class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-in-out z-10"
        :class="[
          showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-full',
          'group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0'
        ]"
      >
        <!-- Prototype Button -->
        <a
          v-if="prototypeLink"
          :href="prototypeLink"
          target="_blank"
          rel="noopener"
          class="bg-[#5d8736] text-[#e3f89a] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all duration-200 flex items-center"
        >
          <Icon icon="mdi:eye" class="w-5 h-5 mr-2" />
          Prototype
        </a>

        <!-- Design Journey Button -->
        <a
          v-if="designJourneyLink"
          :href="designJourneyLink"
          target="_blank"
          rel="noopener"
          class="bg-[#e3f89a] text-[#5d8736] border-2 border-[#5d8736] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all duration-200 flex items-center"
        >
          <Icon icon="mdi:design" class="w-5 h-5 mr-2" />
          Design Journey
        </a>
      </div>
    </div>

    <!-- Title + Categories -->
    <div class="flex flex-col md:flex-row justify-between md:items-center mt-4 mx-4 leading-8">
      <h2 class="text-[#6B8E23] text-[32px] text-center md:text-left" style="font-family: 'Palanquin Dark', sans-serif;">
        {{ title }}
      </h2>

      <div class="flex flex-wrap gap-2 mt-2 md:mt-0 justify-center md:justify-end">
        <div
          v-for="(category, index) in categories"
          :key="index"
          :style="{ backgroundColor: category.bgColor, color: category.textColor }"
          class="flex items-center text-sm md:text-base px-2 py-1 rounded-lg"
        >
          <Icon :icon="category.icon" class="w-3 h-3 md:w-4 md:h-4 mr-2" />
          <span class="font-['Lato']">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p class="text-[#6D6D6D] text-[16px] font-normal font-['Lato'] mt-2 mx-4 leading-[18px] text-center md:text-left">
      {{ description }}
    </p>
  </div>
</template>


<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
