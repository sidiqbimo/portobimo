<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useWaveAnimation } from "../composables/useWaveAnimation.js";

const { startWaveAnimation } = useWaveAnimation();

const isOpen = ref(false); // State for mobile menu
const scrolledPastHero = ref(false); // State to track if scrolled past Hero

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  const heroHeight = document.querySelector('.hero').offsetHeight;
  scrolledPastHero.value = window.scrollY > heroHeight;

  const header = document.querySelector('header');
    if (scrolledPastHero.value) {
      header.classList.add('border-animated');
      header.classList.remove('fade-out');
    } else {
      header.classList.remove('border-animated');
      header.classList.add('fade-out');
  }
};

// Icons for animation
const mobileIcons = [
  { icon: "mynaui:letter-b-square-solid", color: "text-[#5D8736]" }, // B
  { icon: "mynaui:letter-i-square-solid", color: "text-[#6B8E23]" }, // I
  { icon: "mynaui:letter-m-square-solid", color: "text-[#A9C46C]" }, // M
  { icon: "mynaui:letter-o-square-solid", color: "text-[#A9C46C]" }  // O
];

const mobileIcon = ref(mobileIcons[0].icon); // Default icon (B)
const mobileColor = ref(mobileIcons[0].color);
let iconIndex = 0;
let iconInterval;

// Function to cycle through icons
const cycleIcons = () => {
  iconInterval = setInterval(() => {
    iconIndex = (iconIndex + 1) % mobileIcons.length;

    mobileIcon.value = mobileIcons[iconIndex].icon;
    mobileColor.value = mobileIcons[iconIndex].color;
  }, 1200); // Change icon every 1s
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  cycleIcons();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearInterval(iconInterval);
});

// When clicking Contact Me
const showNotification = ref(false);

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });

    startWaveAnimation(); // Trigger wave animation when clicking "Contact"
  }
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};
</script>

<template>
  <header :class="['w-full h-16 bg-[#F8FFE0] flex items-center justify-between px-6 md:px-[54px] fixed top-0 left-0 right-0 z-50 transition-all duration-500', { 'border-animated': scrolledPastHero, 'fade-out': !scrolledPastHero }]">
    
    <!-- Left: Logo -->
   <div class="flex gap-0.25">
      <!-- Desktop View: Show all icons -->
      <div class="hidden md:flex gap-0.25">
        <Icon icon="mynaui:letter-b-square-solid" class="w-10 h-10 text-[#5D8736]" />
        <Icon icon="mynaui:letter-i-square-solid" class="w-10 h-10 text-[#6B8E23]" />
        <Icon icon="mynaui:letter-m-square-solid" class="w-10 h-10 text-[#A9C46C]" />
        <Icon icon="mynaui:letter-o-square-solid" class="w-10 h-10 text-[#A9C46C]" />
      </div>

      <!-- Mobile View: Show One Icon at a Time -->
      <div class="relative w-10 h-10 md:hidden">
        <transition name="fade">
          <Icon 
            :icon="mobileIcon"
            :key="mobileIcon"  
            :class="['absolute inset-0 w-10 h-10', mobileColor]"
          />
        </transition>
      </div>
  </div>

    <!-- Middle: Responsive Line -->
    <div class="hidden md:block flex-grow border-t border-[#A9C46C] mx-4"></div>

    <!-- Right: Desktop Navigation (Hidden on Mobile) -->
    <nav class="hidden md:flex gap-8">
      <!-- <a href="#about" class="text-[#A9C46C] text-base font-['Lato'] underline hover:font-black hover:text-lg duration-300 ease-in-out">ABOUT ME</a> -->
      <a @click.prevent="scrollToContact" class="text-[#A9C46C] text-base font-bold font-['Lato'] underline hover:font-black hover:text-lg hover:cursor-pointer duration-300 ease-in-out">CONTACT</a>
      <a href="https://drive.google.com/file/d/1EoECKlZepn9ImgItemapVRGBzPHGY4Nb/view?usp=sharing" class="text-[#5D8736] text-base font-['Lato'] font-bold underline hover:font-black hover:text-lg transition-all">MY RESUME</a>
    </nav>
    
    <!-- Notification Pop-up -->
    <transition name="slide-up">
      <div v-if="showNotification" class="font-['Lato'] fixed bottom-0 left-0 right-0 bg-[#5D8736] text-white text-center py-2 text-xl">
        I'm just a message away, let's talk! 😁👆
      </div>
    </transition>

    <!-- Mobile Menu Button (Visible on Small Screens) -->
    <button class="md:hidden" @click="toggleMenu">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B8E23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>

    <!-- Mobile Dropdown Menu (Shown when isOpen is true) -->
    <!-- Mobile Dropdown Menu with Animation -->
    <transition name="slide">
      <div 
        v-if="isOpen" 
        class="absolute top-16 left-0 w-full bg-[#F8FFE0] flex flex-col items-center gap-4 py-4 shadow-md md:hidden"
      >
       <!-- <a href="#about" class="text-[#A9C46C] text-base font-['Lato'] underline hover:font-extrabold duration-300 ease-in-out">ABOUT ME</a> -->
      <a @click.prevent="scrollToContact" class="text-[#A9C46C] text-base font-bold font-['Lato'] underline hover:font-extrabold hover:cursor-pointer duration-300 ease-in-out">CONTACT</a>
      <a href="https://drive.google.com/file/d/1EoECKlZepn9ImgItemapVRGBzPHGY4Nb/view?usp=sharing" class="text-[#5D8736] text-base font-['Lato'] font-bold underline hover:font-extrabold transition-all">MY RESUME</a>
      </div>
    </transition>


  </header>
</template>

<style>
/* Border Animation */
.border-animated::after {
   content: '';
   display: block;
   position: absolute;
   bottom: 0;
   left: 0;
   height: 3px;
   background-color: #A9C46C;
   animation: draw-border 1s ease-in-out forwards;
}

@keyframes draw-border {
  from {
     width: 0;
   }
   to {
     width: 100%;
   }
}

.fade-out::after {
   content: '';
   display: block;
   position: absolute;
   bottom: 0;
   left: 0;
   height: 2px;
   background-color: #A9C46C;
   animation: fade-out-border 1s ease-in-out forwards;
}

@keyframes fade-out-border {
   from {
     opacity: 1;
   }
   to {
     opacity: 0;
   }
}

/* Slide-Down Animation */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Animation of Notification Pop-up */
/* Slide-Up Animation */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* Logo changing animation on mobile */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease-in-out;
  position: absolute; /* Ensure the letters overlap */
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
