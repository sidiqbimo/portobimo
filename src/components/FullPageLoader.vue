<template>
  <div
    v-if="show"
    :class="[
      'fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8FFE0] transition-all duration-500',
      { 'lift-up': progress >= 100 },
    ]"
  >
    <div class="flex flex-col items-center">

      <h2
        class="mb-16 text-2xl md:text-3xl font-bold text-[#5D8736] text-center"
        style="font-family: 'Palanquin Dark', sans-serif;"
      >
        Welcome to Bimo's portfolio <span class="inline-block animate-wave">👋</span>
      </h2>

      <div
        v-if="show"
        class="screen-border-anim"
        :class="{ 'fade-out': progress >= 100 }"
      ></div>

      <div class="loader">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 94 94"
            class="svg"
          ></svg>
        </div>
      </div>
      <p
        class="mt-8 text-[#6B8E23] text-lg flex items-center leading-none"
        style="font-family: 'Lato'"
      >
        <span class="dot dot1 mb-4">.</span>
        <span class="dot dot2 mb-4">.</span>
        <span class="dot dot3 mb-4 mr-2">.</span>
        Awesomeness awaits
        <span class="dot dot1 mb-4 ml-2">.</span>
        <span class="dot dot2 mb-4">.</span>
        <span class="dot dot3 mb-4">.</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  show: Boolean,
  progress: Number,
});
</script>

<style scoped>
@keyframes bounce-b {
  0%,
  100% {
    transform: scale(1) rotate(-8deg);
  }
  20% {
    transform: scale(1.1) rotate(8deg);
  }
  40% {
    transform: scale(0.95) rotate(-8deg);
  }
  60% {
    transform: scale(1.05) rotate(8deg);
  }
  80% {
    transform: scale(1) rotate(-8deg);
  }
}
.animate-bounce-b {
  animation: bounce-b 1.2s infinite;
}

.loader {
  --size: 240px;
  --duration: 2s;
  --logo-color: #5d8736;
  --background: linear-gradient(
    0deg,
    rgba(136, 204, 41, 0.07) 0%,
    rgba(95, 125, 12, 0.07) 100%
  );
  height: var(--size);
  aspect-ratio: 1;
  position: relative;
  margin-bottom: 1.5rem;
}

.loader .box {
  position: absolute;
  background: rgba(100, 100, 100, 0.08);
  background: var(--background);
  border-radius: 50%;
  border-top: 1px solid rgba(100, 100, 100, 0.2);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 10px -0px;
  backdrop-filter: blur(5px);
  animation: ripple var(--duration) infinite ease-in-out;
}

.loader .box:nth-child(1) {
  inset: 40%;
  z-index: 99;
  border-color: rgba(100, 100, 100, 0.2);
}
.loader .box:nth-child(2) {
  inset: 30%;
  z-index: 98;
  border-color: rgba(100, 100, 100, 0.18);
  animation-delay: 0.2s;
}
.loader .box:nth-child(3) {
  inset: 20%;
  z-index: 97;
  border-color: rgba(100, 100, 100, 0.13);
  animation-delay: 0.4s;
}
.loader .box:nth-child(4) {
  inset: 10%;
  z-index: 96;
  border-color: rgba(100, 100, 100, 0.09);
  animation-delay: 0.6s;
}
.loader .box:nth-child(5) {
  inset: 0%;
  z-index: 95;
  border-color: rgba(100, 100, 100, 0.05);
  animation-delay: 0.8s;
}

.loader .logo {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 30%;
}

.loader .logo svg {
  fill: var(--logo-color);
  width: 100%;
  animation: color-change var(--duration) infinite ease-in-out;
}

@keyframes ripple {
  0% {
    transform: scale(1);
    box-shadow: rgba(7, 197, 121, 0.08) 0px 10px 10px -0px;
  }
  50% {
    transform: scale(1.18);
    box-shadow: rgba(42, 139, 37, 0.13) 0px 30px 20px -0px;
  }
  100% {
    transform: scale(1);
    box-shadow: rgba(4, 173, 12, 0.08) 0px 10px 10px -0px;
  }
}

@keyframes color-change {
  0% {
    fill: var(--logo-color);
  }
  50% {
    fill: #a9c46c;
  }
  100% {
    fill: var(--logo-color);
  }
}

.loader-border-anim {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-bar {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 32px;
  border: 4px solid transparent;
  box-sizing: border-box;
  /* The border will be drawn by the animation below */
  animation: border-draw 2.5s linear forwards;
  border-image: linear-gradient(
      90deg,
      #5d8736,
      #a9c46c,
      #e3f89a,
      #b8da97,
      #5d8736
    )
    1;
}

.fade-out {
  animation: fadeOut 0.7s 0.2s forwards;
}

@keyframes border-draw {
  0% {
    border-image-slice: 0 0 0 0;
    border-color: transparent;
  }
  25% {
    border-image-slice: 1 0 0 0;
    border-color: #5d8736 transparent transparent transparent;
  }
  50% {
    border-image-slice: 1 1 0 0;
    border-color: #5d8736 #a9c46c transparent transparent;
  }
  75% {
    border-image-slice: 1 1 1 0;
    border-color: #5d8736 #a9c46c #e3f89a transparent;
  }
  100% {
    border-image-slice: 1 1 1 1;
    border-color: #5d8736 #a9c46c #e3f89a #b8da97;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: scale(1.05);
  }
}

.lift-up {
  animation: liftUp 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}

@keyframes liftUp {
  to {
    transform: translateY(-100vh);
    opacity: 0;
    pointer-events: none;
  }
}

.dot {
  position: relative;
  top: 0.1em; /* Adjust this value as needed for perfect centering */
  vertical-align: middle;
  opacity: 0.2;
  transform: translateY(0);
  display: inline-block;
  animation: dot-bounce 1.4s infinite;
  font-weight: bold;
  font-size: 1.5em;
  color: #a9c46c;
  transition: color 0.2s;
}
.dot1 {
  animation-delay: 0s;
}
.dot2 {
  animation-delay: 0.2s;
}
.dot3 {
  animation-delay: 0.4s;
}

@keyframes dot-bounce {
  0%,
  80%,
  100% {
    opacity: 0.5;
    transform: translateY(0) scale(1);
    color: #a9c46c;
  }
  30% {
    opacity: 1;
    transform: translateY(-0.3em) scale(1.2);
    color: #5d8736;
  }
  50% {
    opacity: 1;
    transform: translateY(0.1em) scale(0.9);
    color: #d2e6a3;
  }
  60% {
    opacity: 1;
    transform: translateY(-0.2em) scale(1.1);
    color: #e3f89a;
  }
}
</style>
