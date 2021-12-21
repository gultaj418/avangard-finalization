// const hamburger = document.querySelector(".navbarSection nav .hamburger");
// const navlinks = document.querySelector(".mobile-ul");
// const links = document.querySelector(".mobile-ul li");
// const hamburgerLine = document.querySelector(".line");
// const upIcon = document.querySelector(".up");

// hamburger.addEventListener("click", () => {
//   hamburgerLine.classList.toggle("lineActive");
//   navlinks.classList.toggle("open");
// });

// //Up icon from bottom to top
// upIcon.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// // Service dropdown
// const serviceButton = document.querySelector(
//   ".navbarSection nav .serviceTopMenu"
// );
// const serviceMenuList = document.querySelector(".serviceMenu");
// const serviceArrow = document.querySelector(".serviceArrowDown");

// serviceButton.addEventListener("click", function () {
//   serviceMenuList.classList.toggle("openServiceMenu");
//   serviceArrow.classList.toggle("serviceArrowUp");
// });

// const mobileServiceBtn = document.querySelector(".mobile-ul .serviceTopMenu");
// const serviceUl = document.querySelector(".mobileServiceUl");

// const serviceArrowMobile = document.querySelector(
//   ".mobile-ul .serviceTopMenu .serviceArrowDown"
// );

// mobileServiceBtn.addEventListener("click", function () {
//   serviceUl.classList.toggle("mobileServiceUlActivated");
//   serviceArrowMobile.classList.toggle("serviceArrowUp");
// });

// //MODAL
// var desktopBtn = document.querySelector("#searchIcon");
// var mobileButton = document.querySelector("#searchIconMobile");
// var modal = document.querySelector(".modal-bg");
// var closeBtn = document.querySelector(".modal-close");

// desktopBtn.addEventListener("click", function () {
//   modal.classList.add("modal-active");
//   document.body.style["overflow"] = "hidden";
// });

// mobileButton.addEventListener("click", function () {
//   modal.classList.add("modal-active");
//   document.body.style["overflow"] = "hidden";
// });

// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("modal-active");
//   document.body.style["overflow"] = "auto";
// });

// //FIXED NAV

// const nav = document.getElementsByClassName("navbarSection")[0];
// const x = window.matchMedia("(max-width: 768px)");
// const headerContainer = document.querySelector("#headerContainer");
// const headerHeight = headerContainer.offsetHeight;
// const navHeight = nav.offsetHeight;
// const mobileMenu = document.querySelector(".mobile-ul");

// window.addEventListener("scroll", function () {
//   if (x.matches) {
//     if (window.scrollY > 0) {
//       // add mobile heavy background
//       nav.classList.add("mobileHeavyBackground");
//       mobileMenu.classList.add("openMobileUlWhileNavFixed");
//     } else {
//       //remove mobile background
//       nav.classList.remove("mobileHeavyBackground");
//       mobileMenu.classList.remove("openMobileUlWhileNavFixed");
//     }
//   } else {
//     if (window.scrollY > 500) {
//       upIcon.classList.add("icon-active");
//     }
//     if (window.scrollY >= headerHeight / 2) {
//       // add normal background
//       nav.classList.add("heavyBackground");
//       serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
//     } else {
//       // remove normal background
//       upIcon.classList.remove("icon-active");
//       nav.classList.remove("heavyBackground");
//       serviceMenuList.classList.remove("openServiceMenuWhileNavFixed");
//     }
//   }
// });

//gsap animation for About us section

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

//blog section page gsap

// gsap.from(".blogImage", 0.7, {
//   opacity: 0,
//   scale: 0.8,
//   scrollTrigger: {
//     start: "-700",
//     end: "-400rem",
//     trigger: ".blogPage",
//     markers: true,
//     scrub: true,
//   },
// });
