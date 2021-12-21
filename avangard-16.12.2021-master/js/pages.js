// Fixed Nav
// const nav = document.getElementsByClassName("navbarSection")[0];
// const x = window.matchMedia("(max-width: 768px)");

// const headerContainer = document.querySelector("#headerContainer");
// const headerHeight = headerContainer.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= headerHeight / 2) {
    if (!x.matches) {
      nav.classList.add("heavyBackground");
      //Servicemenu top 50 px olmalidi burda
      serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
    } else {
      nav.classList.add("mobileHeavyBackground");
    }
  } else if (window.scrollY < headerHeight / 2) {
    if (!x.matches) {
      nav.classList.remove("heavyBackground");
      serviceMenuList.classList.remove("openServiceMenuWhileNavFixed");
    } else {
      nav.classList.remove("mobileHeavyBackground");
      //Servicemenu top 30 px olmalidi burda
    }
  }
});

gsap.registerPlugin(ScrollTrigger);
// const tl3 = gsap.timeline();

gsap.from(".productInfo", 0.7, {
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "top",
  },
  x: -20,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productPage",
    markers: true,
    scrub: true,
    // start: "+=100",
    end: "+=1700",
  },
});

gsap.from(".productPageHeading", 0.7, {
  opacity: 0,

  // y: 200,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".productPage",
    markers: true,
    scrub: true,
  },
});
