<script setup>
import PortfolioCard from "./PortofolioCard.vue";
import NewPortofolioCard from "./NewPortofolioCard.vue";
import { useScrollAnimation } from "../composables/useScrollAnimation";
const grid1 = "/images/famcare.png";
const grid2 = "/images/jogjis.png";
const grid3 = "/images/setara.png";
const grid4 = "/images/surveyscout.png";
const grid5 = "/images/asteria.png";
const grid6 = "/images/bemysample.png";

const categoryConfig = {
  mobile: {
    name: "Mobile Dev.",
    textColor: "#4C732E",
    bgColor: "#B8DA97",
    icon: "mdi:cellphone",
  },
  web: {
    name: "Web Dev.",
    textColor: "#5A6E2F",
    bgColor: "#C9E2A8",
    icon: "mdi:web",
  },
  uiux: {
    name: "UI/UX",
    textColor: "#5D8736",
    bgColor: "#D2E6A3",
    icon: "mdi:palette",
  },
};

const { visibleCards, observeElement } = useScrollAnimation();

const projects = [
  {
    imageSrc: grid1, // Placeholder image
    title: "FamCare",
    altText:
      "Screenshots of FamCare mobile app UI/UX Prototype, showcasing family health features and emergency alerts",
    categories: [categoryConfig.uiux],
    description:
      "Caring made smarter—Real-time health monitoring and emergency alerts, anytime, anywhere.",
    prototypeLink:
      "https://www.figma.com/design/F6IOn1hKhRHqj6XMzoUb7b/Famcare----Bimo's-Portfolio?node-id=2-1062&t=1ySmGdkEraMeDNOi-1", // ✅ Add this
    designJourneyLink:
      "https://drive.google.com/file/d/1m3jwtuPVbkOK32IM3urB-efwlHtEpLfD/view?usp=drive_link", // ✅ Optional
  },
  {
    imageSrc: grid2,
    title: "Jogja Istimewa",
    altText:
      "Screenshots of Jogja Istimewa mobile app UI/UX Prototype, showcasing city updates and tourism information",
    categories: [categoryConfig.uiux],
    description:
      "Tourism, public services, and city updates, all in one smart app for locals and visitors.",
    prototypeLink:
      "https://www.figma.com/design/aSlDXnMyUjWgn7XKFUAePg/Jogja-Istimewa---Bimo's-Portfolio?node-id=0-1&t=vndn5O42JFmYLj6g-1", // ✅ Add this
    designJourneyLink:
      "https://drive.google.com/file/d/1Ka-gaRUf81OPkcY9DdcI-oUSONMFBPrc/view?usp=drive_link",
  },
  {
    imageSrc: grid3,
    title: "Setara",
    altText:
      "Screenshots of Setara mobile app, implementing inclusive design for all users",
    categories: [categoryConfig.mobile],
    description:
      "Banking without barriers—an inclusive digital experience for everyone, by design.",
    prototypeLink: "https://github.com/sidiqbimo/bcaRevamp-app", // ✅ Add this
  },
  {
    imageSrc: grid4,
    title: "SurveyScout",
    altText:
      "Screenshots of SurveyScout mobile app UI/UX Prototype, showcasing features for three different user roles",
    categories: [categoryConfig.uiux],
    description:
      "Powering smarter decisions—connecting companies with engaged surveyors for reliable insights.",
    prototypeLink:
      "https://www.figma.com/design/1rkTBnb99c9Wqmn4r8RzFd/SurveyScout----Bimo's-Portfolio?node-id=0-1&t=btvFMXH4q3mna9m3-1",
  },
  {
    imageSrc: grid5,
    title: "Asteria",
    altText:
      "Screenshots of Asteria mobile and desktop UI/UX Prototype, rich landing page information",
    categories: [categoryConfig.uiux, categoryConfig.web],
    description:
      "An engaging landing page with compelling visuals and an optimized user journey, driving conversions.",
    prototypeLink: "https://asteria-web-nu.vercel.app/", // ✅ Add this
    designJourneyLink:
      "https://www.figma.com/design/pteTjFrTtuORFkEu3erQ8V/Asteria---Bimo's-Portfolio?node-id=0-1&t=6q9pl5WauWCpc1Pg-1", // ✅ Optional
  },
  {
    imageSrc: grid6,
    title: "BeMySample",
    altText:
      "Screenshots of BeMySample mobile and desktop UI/UX Prototype, showcasing main features",
    categories: [categoryConfig.uiux],
    description:
      "AI-powered survey platform connecting researchers with engaged respondents, faster than ever.",
    prototypeLink:
      "https://www.figma.com/design/SMG2uvPo74jyWefPgDbWok/BeMySample---Bimo's-Portfolio?node-id=0-1&t=7Y81wSAcHD252U88-1",
  },
];
</script>

<template>
  <section class="px-[24px] md:px-[54px] py-4 bg-[#F8FFE0]">
    <!-- Mobile: Heading on Top -->
    <div
      class="block md:hidden text-center text-[#6B8E23] text-xl font-normal mt-6 mb-4 w-full"
    >
      Selected Works
    </div>

    <div class="relative flex">
      <!-- Desktop: Vertical Line & Rotated Heading -->
      <div class="hidden md:block relative flex-shrink-0 max-w-8">
        <div class="absolute left-0 top-0 w-[1px] bg-[#A9C46C] h-full"></div>
        <!-- ✅ Restored the vertical line -->
        <div
          class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 text-[#6B8E23] text-xl font-normal tracking-wide rotate-[-90deg] origin-center whitespace-nowrap sticky top-40 bg-[#F8FFE0] px-2 w-max h-max flex items-center justify-center"
          style="font-family: 'Lato'"
        >
          Selected Works
        </div>
      </div>

      <!-- // TO BE CHANGED!!! -->
      <!-- Project Grid -->
      <div
        class="max-w-[1701px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          :ref="(el) => observeElement(el, index)"
          :class="[
            'transition-all duration-700',
            visibleCards.has(index)
              ? 'animate__animated animate__fadeInUp opacity-100'
              : 'opacity-0 translate-y-8',
          ]"
        >
          <NewPortofolioCard v-bind="project" />
        </div>
      </div>
    </div>
  </section>
</template>
