<script setup>
import { ref, onMounted, watch } from "vue";

// Animation states
const showGreeting = ref(false);
const showHand = ref(false);
const showSubtext = ref(false);
const props = defineProps({ pageLoaded: Boolean });

watch(
  () => props.pageLoaded,
  (loaded) => {
    if (loaded) {
      setTimeout(() => {
        showGreeting.value = true;
        setTimeout(() => {
          showHand.value = true;
          showSubtext.value = true;
        }, 500);
      }, 0);
    }
  },
  { immediate: true }
);

</script>

<template>
  <section
    class="relative w-full flex justify-center px-[24px] md:px-[54px] pt-16 bg-[#F8FFE0]"
  >
    <!-- Hero Container -->
    <div
      class="relative w-full max-w-full md:max-w-[1776px] h-[320px] bg-[#5D8736] rounded-2xl shadow-lg overflow-hidden"
      style="box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.5)"
    >
      <!-- Background Video -->
      <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="/src/videos/bg_hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Inner Shadow Layer -->
      <div
        class="absolute top-0 left-0 w-full h-full bg-transparent"
        style="box-shadow: inset -4px 4px 8px rgba(0, 0, 0, 0.5)"
      ></div>

      <!-- Overlay -->
      <div
        class="absolute top-0 left-0 w-full h-full bg-[#5D8736] opacity-50"
      ></div>

      <!-- Hero Content -->
      <!-- Hero Content -->
      <div
        class="relative z-10 flex flex-col items-center md:absolute md:left-[64px] md:top-1/2 md:-translate-y-1/2 md:items-start text-center md:text-left text-[#F8FFE0] w-full px-6 py-24 md:px-0 md:py-0"
      >
        <!-- Hello, I'm Bimo! with hand -->
        <!-- Hello, I'm Bimo! with hand -->
        <div class="flex items-center gap-2 mb-2">
          <h1
            v-if="showGreeting"
            class="text-[32px] md:text-[46px] font-normal leading-none animate__animated animate__bounceInDown md:animate__bounceInLeft"
            style="font-family: 'Palanquin Dark', sans-serif"
          >
            Hello, I'm Bimo!
          </h1>

          <!-- Waving Hand with reserved space -->
          <div class="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
            <img
              v-if="showHand"
              src="/images/wavehand.png"
              alt="Waving hand"
              class="w-8 h-8 md:w-12 md:h-12 animate__animated animate__zoomIn animate__delay-1s wave-animation"
            />
          </div>
        </div>

        <!-- Subtext -->
        <!-- Subtext -->
        <p
          class="text-[#E3F89A] text-[18px] md:text-[24px] font-normal leading-6 max-w-[918px] min-h-[2.5rem] md:min-h-[3rem]"
          :class="
            showSubtext
              ? 'animate__animated animate__fadeInDown animate__delay-1s'
              : 'opacity-0'
          "
          style="font-family: 'Lato', sans-serif"
        >
          <span v-if="showSubtext">
            I craft data-driven
            <span class="font-bold underline">UI/UX</span> designs and develop
            intuitive
            <span class="font-bold underline">front-end</span> solutions
            elevating user experiences.
          </span>
        </p>
      </div>

      <!-- Desktop Punch Hole -->
      <div
        class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-[#F8FFE0] rounded-bl-full rounded-tl-full"
        style="box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5)"
      ></div>

      <!-- Mobile Punch Hole -->
      <!-- <div class="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-18 h-8 bg-[#F8FFE0] rounded-tl-full rounded-tr-full m-0 p-0" style="box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.5);"></div> -->
    </div>
  </section>
</template>
