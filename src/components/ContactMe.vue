<script setup>
import { Icon } from "@iconify/vue";
import { useWaveAnimation } from "../composables/useWaveAnimation";
import { useContactAnimation } from "../composables/useContactAnimation";

const { animateButtons } = useWaveAnimation();
const { particlesContainer } = useContactAnimation();
</script>

<template>
  <section
    id="contact"
    class="relative flex justify-center items-center px-[24px] md:px-[54px] pt-8 pb-16 overflow-hidden"
  >
    <!-- Particles Background -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-transparent via-[#F8FFE0]/20 to-transparent z-1"
    ></div>

    <div
      class="contact-container relative z-10 w-full md:max-w-[1776px] h-88 md:h-auto px-[24px] md:px-[72px] py-[0px] md:py-[80px] bg-transparent rounded-2xl border-container flex flex-col justify-center items-center"
    >
      <!-- Title -->
      <h2
        class="contact-title text-center text-[#6B8E23] text-[24px] md:text-[40px] font-normal leading-6 md:leading-[40px] mt-24 mb-1"
        style="font-family: 'Palanquin Dark', sans-serif"
      >
        UX in Mind,<br class="block md:hidden" />
        Code at Heart
        <img
          src="/images/green-heart_1f49a.png"
          alt="Green heart"
          class="animate__animated animate__heartBeat animate__slow animate__infinite inline-block mb-1 ml-1 w-5 h-auto md:w-[32px] md:h-auto"
        />
      </h2>

      <!-- Subtitle -->
      <p
        class="contact-subtitle text-center text-[#6D6D6D] text-[16px] md:text-[20px] font-normal font-['Lato']"
      >
        Have an idea? Let's make it real!
      </p>

      <!-- Buttons Section -->
      <div
        class="contact-buttons flex flex-col md:flex-row justify-center items-center gap-4 mt-4 mb-24 md:w-full"
      >
        <!-- Talk to Bimo Button -->
        <a
          href="mailto:sidiqbimop@gmail.com"
          class="magnetic-btn w-full max-w-[300px] md:w-auto flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-lg bg-[#5D8736] hover:bg-[#4C732E] transition-all duration-300 transform hover:shadow-2xl"
        >
          <Icon
            icon="mdi:email"
            class="text-[#E3F89A] w-[20px] h-[20px] md:w-[32px] md:h-[32px]"
          />
          <span
            class="text-[#E3F89A] text-[20px] md:text-[20px] font-normal leading-0"
            style="font-family: 'Palanquin Dark', sans-serif"
            >Talk to Bimo</span
          >
        </a>

        <!-- Social Media Icons -->
        <div class="grid grid-cols-2 md:flex gap-2 w-full max-w-[300px]">
          <!-- WhatsApp -->
          <a
            href="https://wa.me/6285198333523"
            target="_blank"
            rel="noopener noreferrer"
            class="magnetic-btn w-full h-12 flex items-center justify-center rounded-lg bg-[#E3F89A] hover:bg-[#D2E6A3] md:w-16 md:h-16 transition-all duration-300 transform hover:shadow-lg"
          >
            <Icon
              icon="mdi:whatsapp"
              class="text-[#5D8736]"
              width="32"
              height="32"
            />
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/sidiqbimo"
            target="_blank"
            rel="noopener noreferrer"
            class="magnetic-btn w-full h-12 flex items-center justify-center rounded-lg bg-[#E3F89A] hover:bg-[#D2E6A3] md:w-16 md:h-16 transition-all duration-300 transform hover:shadow-lg"
          >
            <Icon
              icon="mdi:linkedin"
              class="text-[#5D8736]"
              width="32"
              height="32"
            />
          </a>

          <!-- Dribbble -->
          <a
            href="https://dribbble.com/sidiqbheem"
            target="_blank"
            rel="noopener noreferrer"
            class="magnetic-btn w-full h-12 flex items-center justify-center rounded-lg bg-[#E3F89A] hover:bg-[#D2E6A3] md:w-16 md:h-16 transition-all duration-300 transform hover:shadow-lg"
          >
            <Icon
              icon="icon-park-solid:dribble"
              class="text-[#5D8736]"
              width="32"
              height="32"
            />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/sidiqbimo"
            target="_blank"
            rel="noopener noreferrer"
            class="magnetic-btn w-full h-12 flex items-center justify-center rounded-lg bg-[#E3F89A] hover:bg-[#D2E6A3] md:w-16 md:h-16 transition-all duration-300 transform hover:shadow-lg"
          >
            <Icon
              icon="octicon:mark-github-16"
              class="text-[#5D8736]"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.border-container {
  position: relative;
  padding: 0px;
  border-radius: 16px;
  overflow: hidden;
}

.border-container::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px dashed transparent;
  background: linear-gradient(45deg, #a9c46c 50%, transparent 50%) repeat-x,
    linear-gradient(45deg, #a9c46c 50%, transparent 50%) repeat-x,
    linear-gradient(45deg, #a9c46c 50%, transparent 50%) repeat-y,
    linear-gradient(45deg, #a9c46c 50%, transparent 50%) repeat-y;
  background-size: 20px 3px, 20px 3px, 3px 20px, 3px 20px;
  background-position: 0 0, 100% 100%, 0 100%, 100% 0;
  animation: move-border 20s linear infinite;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(169, 196, 108, 0.3));
}

@keyframes move-border {
  0% {
    background-position: 0 0, 100% 100%, 0 100%, 100% 0;
  }
  100% {
    background-position: 100% 0, 0 100%, 0 0, 100% 100%;
  }
}

.magnetic-btn {
  position: relative;
  z-index: 10;
}

.magnetic-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(169, 196, 108, 0.1),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.magnetic-btn:hover::before {
  opacity: 1;
}

#particles-js {
  width: 100%;
  height: 100%;
}
</style>
