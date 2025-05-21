<script setup>
import { ref, computed, onMounted } from "vue";
import { Motion } from "@motionone/vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import PortfolioGrid from "./components/PortofolioGrid.vue";
import ContactMe from "./components/ContactMe.vue";

import { Analytics } from '@vercel/analytics/vue';

// 1. Map recruiter codes to names/companies
const recruiterMap = {
  "pdf": { name: "HR", company: "Product Design Festival" },
  // Add more codes as needed
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
    :initial="{ opacity: 0, scale: 0.95, y: 40 }"
    :animate="{ opacity: 1, scale: 1, y: 0 }"
    :exit="{ opacity: 0, scale: 0.95, y: 40 }"
    :transition="{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#e3f89a] via-[#a9c46c] to-[#5d8736] bg-opacity-95"
    style="backdrop-filter: blur(2px);"
  >
    <Motion
      :initial="{ opacity: 0, scale: 0.9, y: 40 }"
      :animate="{ opacity: 1, scale: 1, y: 0 }"
      :exit="{ opacity: 0, scale: 0.9, y: 40 }"
      :transition="{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }"
      class="bg-white/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full mx-4"
    >
      <h1 class="text-4xl font-bold text-[#6B8E23] mb-4 items-center justify-center text-center" style="font-family: 'Palanquin Dark', sans-serif;">
        Welcome, {{ recruiterInfo?.company }} Recruitment Team!
      </h1>
      <p class="text-lg text-[#5d8736] mb-8 text-center font-['Lato']">
        Explore my portfolio and discover how I can contribute to your team.
      </p>
      <button
        @click="closeGreeting"
        class="px-8 py-3 rounded-lg bg-[#5d8736] text-[#e3f89a] text-lg font-semibold shadow hover:bg-[#6B8E23] transition hover:cursor-pointer duration-300 ease-in-out hover:scale-105"
      >
        Continue Exploring 🚀
      </button>
    </Motion>
  </Motion>

  <div>
    <Header />
    <Hero class="hero mt-2" />
    <main class="flex items-center justify-center bg-[#F8FFE0]">
      <PortfolioGrid/>
    </main>
    <ContactMe class="bg-[#F8FFE0]" />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>