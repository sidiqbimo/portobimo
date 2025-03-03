<template>
  <section class="relative w-full flex justify-center px-[54px] pt-16 bg-[#F8FFE0]">
    <!-- Hero Container -->
    <div class="relative w-full max-w-[1776px] h-[320px] bg-[#5D8736] rounded-2xl shadow-lg overflow-hidden"
         style="box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.5);" >
      
      <!-- Background Video -->
      <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline >
        <source src="/src/videos/bg_hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Inner Shadow Layer -->
      <div class="absolute top-0 left-0 w-full h-full bg-transparent"
           style="box-shadow: inset -4px 4px 8px rgba(0, 0, 0, 0.5);"></div>

      <!-- Overlay -->
      <div class="absolute top-0 left-0 w-full h-full bg-[#5D8736] opacity-50"></div>

      <!-- Hero Content -->
      <div class="relative z-10 absolute left-[64px] top-1/2 transform -translate-y-1/2 text-left text-[#F8FFE0]">
        <h1 class="text-[46px] font-normal leading-none mb-2" style="font-family: 'Palanquin Dark', sans-serif;">
          Hello, I’m Bimo!
        </h1>

        <p class="text-[#E3F89A] text-[24px] font-normal leading-6 max-w-[918px]" style="font-family: 'Lato', sans-serif;">
          I craft data-driven 
          <span class="font-bold underline">UI/UX</span> designs and develop intuitive 
          <span class="font-bold underline">front-end</span> solutions elevating user experiences.
        </p>
      </div>

      <!-- Punch Hole on the Right -->
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-24 bg-[#F8FFE0] rounded-bl-full rounded-tl-full" style="box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);"></div>


    </div>
  </section>
</template>
