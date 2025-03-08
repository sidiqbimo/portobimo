import { ref } from "vue";

export function useWaveAnimation() {
  const animateButtons = ref(false);

  const startWaveAnimation = () => {
    animateButtons.value = true;
    setTimeout(() => {
      animateButtons.value = false;
    }, 2000); // Duration of the wave animation
  };

  return {
    animateButtons,
    startWaveAnimation,
  };
}