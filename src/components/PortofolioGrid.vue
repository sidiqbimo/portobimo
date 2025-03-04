<script setup>
import PortfolioCard from "./PortofolioCard.vue";
const grid1 = "/images/famcare.png";
const grid2 = "/images/jogjis.png";
const grid3 = "/images/setara.png";
const grid4 = "/images/bemysample.png";
const grid5 = "/images/surveyscout.png";
const grid6 = "/images/electree.png";

const projects = [
  {
    imageSrc: grid1, // Placeholder image
    title: "FamCare",
    category: "UI/UX Design",
    categoryIcon: "mdi:palette", // Iconify icon
    description: "Caring made smarter—Real-time health monitoring and emergency alerts, anytime, anywhere.",
  },
  {
    imageSrc: grid2,
    title: "Jogja Istimewa",
    category: "UI/UX Design",
    categoryIcon: "mdi:palette",
    description: "Tourism, public services, and city updates, all in one smart app for locals and visitors.",
  },
  {
    imageSrc: grid3,
    title: "Setara Banking",
    category: "Mobile Dev.",
    categoryIcon: "mdi:cellphone",
    description: "Banking without barriers—an inclusive digital experience for everyone, by design.",
  },
  {
    imageSrc: grid4,
    title: "BeMySample",
    category: "UI/UX Design",
    categoryIcon: "mdi:palette",
    description: "Bridging researchers and respondents in a new way—survey has never been this easy.",
  },
  {
    imageSrc: grid5,
    title: "SurveyScout",
    category: "UI/UX Design",
    categoryIcon: "mdi:palette",
    description: "Powering smarter decisions—connecting companies with engaged surveyors for reliable insights.",
  },
  {
    imageSrc: grid6,
    title: "Electree",
    category: "UI/UX Design",
    categoryIcon: "mdi:palette",
    description: "Smarter power grid issue reporting with AI and community-driven data.",
  },
];
</script>

<template>
 <section class="px-[54px] pl-[64px] py-4 bg-[#F8FFE0]">

    <!-- Line and Heading -->
    <div class="relative flex">
        <div class="relative flex-shrink-0 max-w-8">
            <div class="absolute left-0 top-0 w-[1px] bg-[#A9C46C] h-full"></div>
            <div 
            class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 text-[#6B8E23] text-xl font-normal tracking-wide rotate-[-90deg] origin-center whitespace-nowrap sticky top-40 bg-[#F8FFE0] px-2 w-max h-max flex items-center justify-center" style="font-family: 'Lato';">
                Selected Works
            </div>
    </div>
    
    <!-- Grids -->
    <div class="max-w-[1701px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      <PortfolioCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>
    </div>
  </section>
</template>
