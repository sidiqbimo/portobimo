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
  liveDemoLink: String,
  githubLink: String,
});

const showOverlay = ref(false);
</script>

<template>
  <div
    class="w-full bg-[#F0FBD4] rounded-lg pt-3 px-4 pb-7 flex flex-col overflow-hidden shadow-md border border-[#A9C46C] card-hover transition-all duration-500 ease-out transform-gpu"
  >
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
          showOverlay
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-full',
          'group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0',
        ]"
      >
        <!-- Prototype Button -->
        <a
          v-if="prototypeLink"
          :href="prototypeLink"
          target="_blank"
          rel="noopener"
          class="bg-[#5d8736] text-[#F8FFE0] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-[#4C732E] transform transition-all duration-200 flex items-center"
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
          class="bg-[#F8FFE0] text-[#5d8736] border-2 border-[#5d8736] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-[#D2E6A3] transform transition-all duration-200 flex items-center"
        >
          <Icon icon="mdi:design" class="w-5 h-5 mr-2" />
          Design Journey
        </a>

        <!-- Live Demo Button -->
        <a
          v-if="liveDemoLink"
          :href="liveDemoLink"
          target="_blank"
          rel="noopener"
          class="bg-[#A9C46C] text-[#F8FFE0] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-[#8FB05A] transform transition-all duration-200 flex items-center"
        >
          <Icon icon="mdi:launch" class="w-5 h-5 mr-2" />
          Deployment
        </a>

        <!-- GitHub Button -->
        <a
          v-if="githubLink"
          :href="githubLink"
          target="_blank"
          rel="noopener"
          class="bg-[#D2E6A3] text-[#5d8736] border-2 border-[#5d8736] px-5 py-2 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-[#C4D995] transform transition-all duration-200 flex items-center"
        >
          <Icon icon="mdi:github" class="w-5 h-5 mr-2" />
          GitHub
        </a>
      </div>
    </div>

    <!-- Title + Categories -->
    <div
      class="flex flex-col md:flex-row justify-between md:items-center mt-4 mx-4 leading-8"
    >
      <h2
        class="text-[#6B8E23] text-[32px] text-center md:text-left title-truncate"
        style="font-family: 'Palanquin Dark', sans-serif"
      >
        {{ title }}
      </h2>

      <div
        class="flex flex-wrap gap-2 mt-2 md:mt-0 justify-center md:justify-end"
      >
        <div
          v-for="(category, index) in categories"
          :key="index"
          :style="{
            backgroundColor: category.bgColor,
            color: category.textColor,
          }"
          class="flex items-center text-sm md:text-base px-2 py-1 rounded-lg"
        >
          <Icon :icon="category.icon" class="w-3 h-3 md:w-4 md:h-4 mr-2" />
          <span class="font-['Lato']">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- Description -->
    <p
      class="text-[#6D6D6D] text-[16px] font-normal font-['Lato'] mt-2 mx-4 leading-[18px] text-center md:text-left description-truncate"
    >
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

/* 🎨 3D Hover Effect */
.card-hover {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.card-hover:hover {
  transform: translateY(-12px) rotateX(5deg) rotateY(-5deg) scale(1.02);
  box-shadow: 0 25px 50px rgba(169, 196, 108, 0.4),
    0 15px 30px rgba(93, 135, 54, 0.2), inset 0 0 0 1px rgba(169, 196, 108, 0.3);
  border-color: #a9c46c;
  filter: brightness(1.05);
}

.card-hover:hover::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(169, 196, 108, 0.2) 0%,
    rgba(93, 135, 54, 0.1) 50%,
    rgba(169, 196, 108, 0.2) 100%
  );
  z-index: -1;
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card-hover:hover::before {
  opacity: 1;
}

/* ✨ Image hover enhancement */
.card-hover:hover .w-full.h-full.object-cover {
  transform: scale(1.05);
  transition: transform 0.5s ease-out;
}

/* 🎯 Category tags hover effect */
.card-hover:hover [class*="flex items-center text-sm"] {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* 📝 Text enhancement on hover */
.card-hover:hover h2 {
  color: #5d8736;
  transition: color 0.3s ease;
}

.description-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  max-height: calc(1.4em * 2); /* fallback for non-webkit browsers */
}

.title-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
