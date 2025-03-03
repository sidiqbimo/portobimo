<script setup>
import { Icon } from "@iconify/vue"; // Import Iconify for icons
</script>

<template>
  <section class="flex justify-center items-center px-[54px] pt-8 pb-16">
    <div class="w-full max-w-[1776px] h-auto px-[72px] py-[80px] bg-transparent rounded-2xl border-container flex flex-col justify-center items-center">
      
      <!-- Title -->
      <h2 class="text-center text-[#6B8E23] text-[40px] font-normal leading-[40px] mt-24 mb-1" style="font-family: 'Palanquin Dark', sans-serif;">
        UX in Mind, Code at Heart 💚
      </h2>

      <!-- Subtitle -->
      <p class="text-center text-[#6D6D6D] text-[20px] font-normal font-['Lato']">
        Have an idea? Let’s make it real!
      </p>

      <!-- Buttons Section -->
      <div class="flex justify-center items-center gap-4 mt-4 mb-24">
        
        <!-- Talk to Bimo Button -->
        <button class="flex items-center gap-2 px-6 py-4 bg-[#5D8736] rounded-lg hover:bg-[#4C732E]">
          <Icon icon="mdi:email" class="text-[#E3F89A]" width="32" height="32" />
          <span class="text-[#E3F89A] text-[20px] font-normal leading-0" style="font-family: 'Palanquin Dark', sans-serif;">Talk to Bimo</span>
        </button>

        <!-- Social Media Icons -->
        <div class="flex gap-3">
          <div class="w-16 h-16 flex items-center justify-center bg-[#E3F89A] rounded-lg">
            <Icon icon="mdi:linkedin" class="text-[#5D8736]" width="32" height="32" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center bg-[#E3F89A] rounded-lg">
            <Icon icon="icon-park-solid:dribble" class="text-[#5D8736]" width="32" height="32" />
          </div>
          <div class="w-16 h-16 flex items-center justify-center bg-[#E3F89A] rounded-lg">
            <Icon icon="mdi:whatsapp" class="text-[#5D8736]" width="32" height="32" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>


<style>
 .button-hover-effect {
   transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
 }

 .button-hover-effect:hover {
   transform: scale(1.05);
   background-color: #4C732E;
 }


.border-container {
  position: relative;
  padding: 0px;
  border-radius: 16px;
  overflow: hidden;
}

.border-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px dashed transparent; /* Set a base dashed border */
  background: 
    linear-gradient(to right, #A9C46C 50%, transparent 50%) repeat-x,
    linear-gradient(to right, #A9C46C 50%, transparent 50%) repeat-x,
    linear-gradient(to bottom, #A9C46C 50%, transparent 50%) repeat-y,
    linear-gradient(to bottom, #A9C46C 50%, transparent 50%) repeat-y;
  background-size: 16px 2px, 16px 2px, 2px 16px, 2px 16px;
  background-position: 0 0, 100% 100%, 0 100%, 100% 0;
  animation: move-border 16s linear infinite;
}

@keyframes move-border {
  0% {
    background-position: 0 0, 100% 100%, 0 100%, 100% 0;
  }
  100% {
    background-position: 100% 0, 0 100%, 0 0, 100% 100%;
  }
}


</style>