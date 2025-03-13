<script setup>
import { Icon } from "@iconify/vue"; // Import Iconify for icons
defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  categories: Array,
  description: String,
});
</script>

<template>
  <div 
    class="w-full bg-[#F0FBD4] rounded-lg pt-[12px] pl-[16px] pr-[16px] pb-[28px] flex flex-col overflow-hidden"
  >
    
    <!-- Placeholder Image -->
    <div class="w-[full] aspect-[34/30] bg-gray-300 rounded-lg overflow-hidden shadow-md border-2 border-[#A9C46C]">
      <img :src="imageSrc" :alt="altText" class="w-full h-full object-cover" />
    </div>

    <!-- Title & Category -->
      <div class="flex flex-col md:flex-row justify-between md:items-center mt-4 ml-4 mr-4 leading-8">
        <h2 class="text-[#6B8E23] text-[32px] font-normal text-center md:text-left" style="font-family: 'Palanquin Dark', sans-serif;">
          {{ title }}
        </h2>

        <div class="flex flex-wrap gap-2 mt-2 md:mt-0 justify-center md:justify-end">
          <div 
            v-for="(category, index) in categories" 
            :key="index" 
            :style = "{ backgroundColor: category.bgColor, color: category.textColor }"
            class="flex items-center text-sm md:text-base px-2 py-1 rounded-lg"
          >
            <Icon :icon="category.icon" class="w-3 h-3 md:w-4 md:h-4 mr-2" />
            <span class="font-['Lato']">{{ category.name }}</span>
          </div>
        </div>

      </div>


    <!-- Description -->
    <p class="text-[#6D6D6D] text-[16px] font-normal font-['Lato'] mt-2 ml-4 mr-4 leading-[18px] text-center md:text-left">
      {{ description }}
    </p>
  </div>
</template>
