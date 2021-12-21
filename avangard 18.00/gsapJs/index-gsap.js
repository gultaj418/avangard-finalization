gsap.registerPlugin(ScrollTrigger);

gsap.from("#mainContentPart", 2, {
  delay: 0.1,
  // y: 20,
  x: -300,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".btn", 2, {
  delay: 0.2,
  x: -200,
  opacity: 0,
  ease: Expo.easeInOut,
});

// Gsap for img lines on default page
gsap.from(".img-lines img", 1, {
  y: 900,
  x: -600,
  stagger: 0.33,
});

gsap.from(".card", 1.5, {
  y: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    start: "-500",
    end: "-90rem",
    trigger: "#cardSection",
    markers: true,
    scrub: true,
  },
});
gsap.from(".cardHead", 1.5, {
  x: -500,
  opacity: 0,
  scrollTrigger: {
    start: "-400",
    end: "-50rem",
    trigger: "#cardSection",
    scrub: true,
  },
});

gsap.from(".paraqraf", 1, {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#infoAndProblem",
    scrub: true,
  },
});

gsap.from(".partnerInfo", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partners",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".partnerHeading", 0.8, {
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "top",
  },
  y: -100,
  x: -40,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".partners",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".upsCalculatorImage", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".upsCalculatorInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".upsCalculator",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".mapImage", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".info", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".map",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".productHeading", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  x: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productCard",
    // markers: true,
    // scrub: true,

    markers: true,
  },
});

gsap.from(".productInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  y: 200,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productCard",
    // markers: true,
    scrub: true,
  },
});

// gsap.from(".headerFaq", 0.7, {
//   opacity: 0,
//   stagger: {
//     each: 0.2,
//     from: "top",
//   },
//   x: -20,
//   scale: 0.7,
//   scrollTrigger: {
//     trigger: ".faq",
//     markers: true,
//     scrub: true,
//   },
// });

gsap.from(".questionContainer", 5, {
  opacity: 0,
  stagger: {
    each: 0.5,
    from: "top",
  },
  xPercent: -10,
  scale: 0.7,
  scrollTrigger: {
    start: "-500",
    end: "-30rem",
    trigger: ".faq",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".footerbg", 0.7, {
  opacity: 0,
  scale: 0.7,
  scrollTrigger: {
    start: "-70",
    end: "-40rem",
    trigger: ".footer",
    markers: true,
    scrub: true,
  },
});

// gsap.from(".footerbg", 0.7, {
//   opacity: 0,
//   scale: 0.8,
//   scrollTrigger: {
//     start: "-700",
//     end: "-400rem",
//     trigger: ".footer",
//     markers: true,
//     scrub: true,
//   },
// });
