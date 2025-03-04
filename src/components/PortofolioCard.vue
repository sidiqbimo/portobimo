<script setup>
import { Icon } from "@iconify/vue"; // Import Iconify for icons
defineProps({
  imageSrc: String,
  title: String,
  category: String,
  categoryIcon: String,
  description: String,
});
</script>

<template>
  <div 
    class="w-full bg-[#F0FBD4] rounded-lg pt-[12px] pl-[16px] pr-[16px] pb-[28px] flex flex-col overflow-hidden"
  >
    
    <!-- Placeholder Image -->
    <div class="w-[full] h-[360px] bg-gray-300 rounded-lg overflow-hidden shadow-md border-2 border-[#A9C46C]">
      <img :src="imageSrc" alt="Project Image" class="w-full h-full object-cover" />
    </div>

    <!-- Title & Category -->
    <div class="flex justify-between items-center mt-4 ml-4 mr-4 leading-8">
      <h2 class="text-[#6B8E23] text-[32px] font-normal" style="font-family: 'Palanquin Dark', sans-serif;">
        {{ title }}
      </h2>
      <div class="flex items-center bg-[#006C4F] text-white text-base px-2 py-1 rounded-lg">
        <Icon :icon="categoryIcon" class="w-4 h-4 mr-2" />
        <span class="font-['Lato']">{{ category }}</span>
      </div>
    </div>

    <!-- Description -->
    <p class="text-[#6D6D6D] text-[16px] font-normal font-['Lato'] mt-2 ml-4 mr-4 leading-[18px]">
      {{ description }}
    </p>
  </div>
</template>
