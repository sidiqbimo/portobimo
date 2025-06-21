import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactAnimation() {
  const hasAnimated = ref(false);
  const particlesContainer = ref(null);
  let particlesJS = null;

  const initParticles = async () => {
    if (typeof window !== "undefined") {
      const { default: particles } = await import("particles.js");
      particlesJS = particles;

      particlesJS("particles-js", {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: "#A9C46C" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#A9C46C",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  };

  const animateContact = () => {
    if (hasAnimated.value) return;
    hasAnimated.value = true;

    // Floating animation for the container
    gsap.fromTo(
      ".contact-container",
      {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotationY: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Staggered title animation
    gsap.fromTo(
      ".contact-title",
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3,
      }
    );

    // Typewriter effect for subtitle
    gsap.fromTo(
      ".contact-subtitle",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      }
    );

    // Magnetic hover effect for buttons
    gsap.fromTo(
      ".contact-buttons",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.2,
        onComplete: () => {
          // Enable magnetic effect after animation
          enableMagneticEffect();
        },
      }
    );

    // Floating particles effect
    initParticles();
  };

  const enableMagneticEffect = () => {
    const buttons = document.querySelectorAll(".magnetic-btn");

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      });

      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  };

  onMounted(() => {
    animateContact();
  });

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });

  return {
    particlesContainer,
    hasAnimated,
  };
}
