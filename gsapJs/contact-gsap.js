gsap.from(".aboutCompanyHeading", 0.7, {
  opacity: 0,

  scale: 0.7,
});

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

gsap.from(".aboutCompanyImage", 1.5, {
  y: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    start: "-500",
    end: "-90rem",
    trigger: ".aboutCompanyContent",
    repeat: -1,
    yoyo: true,
    scrub: true,

    // pin: true,
  },
});

gsap.from(".aboutCompanyParagraf", 1.5, {
  y: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    start: "-500",
    end: "-90rem",
    trigger: ".aboutCompanyContent",
    repeat: -1,
    yoyo: true,
    scrub: true,

    // pin: true,
  },
});

gsap.from(".footerbg", 0.7, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-700",
    end: "-400rem",
    trigger: ".footer",
    markers: true,
    scrub: true,
  },
});
