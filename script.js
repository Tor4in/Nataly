// Реєструємо ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// -------- ЛОАДЕР АНІМАЦІЯ --------
window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to(".loader-circle", {
    rotation: 360,
    duration: 1.2,
    repeat: 2,
    ease: "power1.inOut",
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  tl.set("#loader", { display: "none" });

  // Поява тексту
  tl.fromTo(
    ".hero-text",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
});

// -------- РУХ ТЕКСТУ ПРИ СКРОЛІ --------
gsap.to(".hero-text", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true, // плавний рух!!!
    // markers: true,     // вкл. для дебагу
  },
  y: 120, // наскільки текст опускається
  ease: "none",
});

// -------- ПОЯВА ТЕКСТУ В КОНТЕНТІ --------
gsap.fromTo(
  ".content-text h2",
  {
    y: -70,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".bisness-description",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
    y: 0,
    opacity: 1,
  }
);

gsap.fromTo(
  ".content-text p",
  {
    y: -70,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".bisness-description",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
    y: 0,
    opacity: 1,
  }
);
