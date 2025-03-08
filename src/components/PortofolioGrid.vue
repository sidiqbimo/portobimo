<script setup>
import PortfolioCard from "./PortofolioCard.vue";
const grid1 = "/images/famcare.png";
const grid2 = "/images/jogjis.png";
const grid3 = "/images/setara.png";
const grid4 = "/images/surveyscout.png";
const grid5 = "/images/asteria.png";
const grid6 = "/images/bemysample.png";

const categoryConfig = {
  mobile: { name: "Mobile Dev.", textColor: "#4C732E", bgColor: "#B8DA97", icon: "mdi:cellphone" },
  web: { name: "Web Dev.", textColor: "#5A6E2F", bgColor: "#C9E2A8", icon: "mdi:web" },
  uiux: { name: "UI/UX", textColor: "#5D8736", bgColor: "#D2E6A3", icon: "mdi:palette" },
};

const projects = [
  {
    imageSrc: grid1, // Placeholder image
    title: "FamCare",
    altText: "Screenshots of FamCare mobile app UI/UX Prototype, showcasing family health features and emergency alerts",
    categories: [
      categoryConfig.uiux
    ],
    description: "Caring made smarter—Real-time health monitoring and emergency alerts, anytime, anywhere.",
  },
  {
    imageSrc: grid2,
    title: "Jogja Istimewa",
    altText: "Screenshots of Jogja Istimewa mobile app UI/UX Prototype, showcasing city updates and tourism information",
    categories: [
      categoryConfig.uiux
    ],
    description: "Tourism, public services, and city updates, all in one smart app for locals and visitors.",
  },
  {
    imageSrc: grid3,
    title: "Setara",
    altText: "Screenshots of Setara mobile app, implementing inclusive design for all users",
    categories: [
      categoryConfig.mobile
    ],
    description: "Banking without barriers—an inclusive digital experience for everyone, by design.",
  },
  {
    imageSrc: grid4,
    title: "SurveyScout",
    altText: "Screenshots of SurveyScout mobile app UI/UX Prototype, showcasing features for three different user roles",
    categories: [
      categoryConfig.uiux
    ],
    description: "Powering smarter decisions—connecting companies with engaged surveyors for reliable insights.",
  },
  {
    imageSrc: grid5,
    title: "Asteria",
    altText: "Screenshots of Asteria mobile and desktop UI/UX Prototype, rich landing page information",
    categories: [
      categoryConfig.uiux,
      categoryConfig.web
    ],
    description: "An engaging landing page with compelling visuals and an optimized user journey, driving conversions.",
  },
  {
    imageSrc: grid6,
    title: "BeMySample",
    altText: "Screenshots of BeMySample mobile and desktop UI/UX Prototype, showcasing main features",
    categories: [
      categoryConfig.uiux
    ],
    description: "AI-powered survey platform connecting researchers with engaged respondents, faster than ever.",
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
