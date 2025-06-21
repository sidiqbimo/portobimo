import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
  const visibleCards = ref(new Set());

  const observeElement = (element, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              visibleCards.value.add(index);
            }, index * 150); // Stagger delay of 150ms between cards
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (element) {
      observer.observe(element);
    }
  };

  return {
    visibleCards,
    observeElement,
  };
}
