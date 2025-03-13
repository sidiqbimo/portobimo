<script setup>
import { Icon } from "@iconify/vue"; // Import Iconify for icons
import { useWaveAnimation } from "../composables/useWaveAnimation";

const { animateButtons } = useWaveAnimation();
</script>

<template>
  <section id="contact" class="flex justify-center items-center px-[24px] md:px-[54px] pt-8 pb-16">
    <div class="w-full md:max-w-[1776px] h-88 md:h-auto px-[24px] md:px-[72px] py-[0px] md:py-[80px] bg-transparent rounded-2xl border-container flex flex-col justify-center items-center">
      
      <!-- Title -->
      <h2 class="text-center text-[#6B8E23] text-[24px] md:text-[40px] font-normal leading-6 md:leading-[40px] mt-24 mb-1" style="font-family: 'Palanquin Dark', sans-serif;">
        UX in Mind,<br class="block md:hidden" /> Code at Heart 💚
      </h2>

      <!-- Subtitle -->
      <p class="text-center text-[#6D6D6D] text-[16px] md:text-[20px] font-normal font-['Lato']">
        Have an idea? Let’s make it real!
      </p>

      <!-- Buttons Section -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 mb-24 md:w-full">
        
        <!-- Talk to Bimo Button -->
        <button :class="['w-full max-w-[300px] md:w-auto flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-lg button-hover-effect', animateButtons ? 'animate-wave-1 active-wave' : 'bg-[#5D8736] hover:bg-[#4C732E]']">

            <a href="mailto:sidiqbimop@gmail.com" class="flex items-center gap-2">
          <Icon icon="mdi:email" class="text-[#E3F89A] w-[20px] h-[20px] md:w-[32px] md:h-[32px] " />
          <span class="text-[#E3F89A] text-[20px] md:text-[20px] font-normal leading-0" style="font-family: 'Palanquin Dark', sans-serif;">Talk to Bimo</span>
          </a>

        </button>

        <!-- Social Media Icons -->
        <div class="grid grid-cols-2 md:flex gap-2 w-full max-w-[300px]">

        <!-- WhatsApp -->
        <a href="https://wa.me/6285198333523" target="_blank" rel="noopener noreferrer">
            <div :class="['w-full h-12 flex items-center justify-center rounded-lg button-hover-effect md:w-16 md:h-16', animateButtons ? 'animate-wave-4 active-wave' : 'bg-[#E3F89A] hover:bg-[#D2E6A3]']">
            <Icon icon="mdi:whatsapp" class="text-[#5D8736]" width="32" height="32" />
            </div>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/sidiqbimo" target="_blank" rel="noopener noreferrer">
            <div :class="['w-full h-12 flex items-center justify-center rounded-lg button-hover-effect md:w-16 md:h-16', animateButtons ? 'animate-wave-2 active-wave' : 'bg-[#E3F89A] hover:bg-[#D2E6A3]']">
            <Icon icon="mdi:linkedin" class="text-[#5D8736]" width="32" height="32" />
            </div>
        </a>

        <!-- Dribbble -->
        <a href="https://dribbble.com/sidiqbheem" target="_blank" rel="noopener noreferrer">
            <div :class="['w-full h-12 flex items-center justify-center rounded-lg button-hover-effect md:w-16 md:h-16', animateButtons ? 'animate-wave-3 active-wave' : 'bg-[#E3F89A] hover:bg-[#D2E6A3]']">
            <Icon icon="icon-park-solid:dribble" class="text-[#5D8736]" width="32" height="32" />
            </div>
        </a>

        
        <!-- GitHub -->
        <a href="https://github.com/sidiqbimo" target="_blank" rel="noopener noreferrer">
            <div :class="['w-full h-12 flex items-center justify-center rounded-lg button-hover-effect md:w-16 md:h-16', animateButtons ? 'animate-wave-3 active-wave' : 'bg-[#E3F89A] hover:bg-[#D2E6A3]']">
            <Icon icon="octicon:mark-github-16" class="text-[#5D8736]" width="32" height="32" />
            </div>
        </a>

        
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
  cursor: pointer;
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
  pointer-events: none;
}

@keyframes move-border {
  0% {
    background-position: 0 0, 100% 100%, 0 100%, 100% 0;
  }
  100% {
    background-position: 100% 0, 0 100%, 0 0, 100% 100%;
  }
}

/* Wave animation */
@keyframes wave {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-wave-1 {
  animation: wave 1s forwards;
}

.animate-wave-2 {
  animation: wave 1s forwards;
  animation-delay: 0.2s;
}

.animate-wave-3 {
  animation: wave 1s forwards;
  animation-delay: 0.4s;
}

.animate-wave-4 {
  animation: wave 1s forwards;
  animation-delay: 0.6s;
}

.active-wave {
  background-color: #4C732E !important;
  color: #E3F89A !important;
}

</style>