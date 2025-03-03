<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import PortfolioGrid from "./components/PortofolioGrid.vue";
import ContactMe from "./components/ContactMe.vue";
</script>

<template>
  <div>
    <Header />
    <Hero class="hero mt-2" />
    <main class="flex items-center justify-center bg-[#F8FFE0]">
      <PortfolioGrid/>
    </main>
    <ContactMe class="bg-[#F8FFE0]" />
  </div>
</template>
