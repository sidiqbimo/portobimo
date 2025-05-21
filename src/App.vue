<script setup>
import { ref, computed, onMounted } from "vue";
import { Motion } from "@motionone/vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import PortfolioGrid from "./components/PortofolioGrid.vue";
import ContactMe from "./components/ContactMe.vue";

import { Analytics } from "@vercel/analytics/vue";

const isMobile = ref(false);

// 1. Map recruiter codes to names/companies
const recruiterMap = {
  pdf: { name: "HR", company: "UIUXINDO" },
  acad: { name: "HR", company: "Apple Academy" },
};

const showGreeting = ref(false);
const recruiterInfo = ref(null);

// 2. Check URL for recruiter code
onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("ref");
  if (code && recruiterMap[code]) {
    recruiterInfo.value = recruiterMap[code];
    showGreeting.value = true;
  }
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

function closeGreeting() {
  showGreeting.value = false;
}
</script>

<template>
  <Analytics />

  <!-- Fullscreen Greeting Overlay -->
  <Motion
    v-if="showGreeting"
    :initial="{
      opacity: 0,
      y: isMobile ? 100 : 40,
      scale: isMobile ? 1 : 0.95,
    }"
    :animate="{ opacity: 1, y: 0, scale: 1 }"
    :exit="{ opacity: 0, y: isMobile ? 100 : 40, scale: isMobile ? 1 : 0.95 }"
    :transition="{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }"
    :class="[
      'fixed inset-0 z-50 flex items-center justify-center',
      isMobile ? 'items-end bg-black/40' : 'bg-black/40',
    ]"
    style="backdrop-filter: blur(8px)"
  >
    <Motion
      :initial="{
        opacity: 0,
        y: isMobile ? 100 : 40,
        scale: isMobile ? 1 : 0.9,
      }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :exit="{ opacity: 0, y: isMobile ? 100 : 40, scale: isMobile ? 1 : 0.9 }"
      :transition="{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }"
      :class="[
        'shadow-2xl flex flex-col items-center w-full',
        isMobile
          ? 'rounded-t-2xl bg-white/90 backdrop-blur-lg p-8 max-w-lg mx-auto'
          : 'bg-white/90 backdrop-blur-lg rounded-2xl p-10 max-w-lg w-full mx-4',
      ]"
    >
      <h1
        class="text-2xl md:text-4xl font-bold text-[#6B8E23] mb-4 text-center"
        style="font-family: 'Palanquin Dark', sans-serif"
      >
        Hi, {{ recruiterInfo?.company }} Team! 👋
      </h1>
      <p
        class="text-base md:text-lg text-[#5d8736] mb-8 text-center font-['Lato']"
      >
        Explore my portfolio and discover how I can contribute to your team
      </p>
      <button
        @click="closeGreeting"
        class="px-8 py-3 rounded-lg bg-[#5d8736] text-[#e3f89a] text-lg font-semibold shadow hover:bg-[#6B8E23] transition hover:cursor-pointer duration-300 ease-in-out hover:scale-105 animate-wiggle"
      >
        Start Exploring 🚀
      </button>
    </Motion>
  </Motion>

  <div>
    <Header />
    <Hero class="hero mt-2" />
    <main class="flex items-center justify-center bg-[#F8FFE0]">
      <PortfolioGrid />
    </main>
    <ContactMe class="bg-[#F8FFE0]" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}
.animate-wiggle {
  animation: wiggle 0.7s ease-in-out infinite;
}
</style>
