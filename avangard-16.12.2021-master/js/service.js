// $(function () {
// init the validator
// validator files are included in the download package
// otherwise download from http://1000hz.github.io/bootstrap-validator

// when the form is submitted
//   $("#serviceContact").on("submit", function (e) {
//     // if the validator does not prevent form submit
//     if (!e.isDefaultPrevented()) {
//       var url = "processors/serviceProcessor.php";

//       // POST values in the background the the script URL
//       $.ajax({
//         type: "POST",
//         url: url,
//         data: $(this).serialize(),
//         success: function (data) {
//           console.log("SUCUK SUCUK");
//           // data = JSON object that contact.php returns

//           // we recieve the type of the message: success x danger and apply it to the
//           var messageAlert = "alert-" + data.type;
//           var messageText = data.message;

//           // let's compose Bootstrap alert box HTML
//           var alertBox =
//             '<div class="alert ' +
//             messageAlert +
//             ' alert-dismissable">' +
//             messageText +
//             "</div>";

//           // If we have messageAlert and messageText
//           if (messageAlert && messageText) {
//             // inject the alert to .messages div in our form
//             document
//               .querySelector(".errorOrSuccessMessage")
//               .classList.add("visibleErrorMessage");
//             $("#serviceContact").find(".errorOrSuccessMessage").html(alertBox);
//             // empty the form
//             $("#serviceContact")[0].reset();
//           }
//         },
//       });
//       return false;
//     }
//   });
// });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".mainServicesContent", 1.5, {
  opacity: 0,
  scale: 0.57,

  // pin: true,
});

gsap.from("#servicesBtn", 1.5, {
  opacity: 0,
  x: 100,
});
const tl = gsap.timeline();

gsap.from(".servicesPageContent", 2, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-700",
    end: "-400rem",
    markers: true,
    scrub: true,
    trigger: ".servicesPageContent",
  },
});

gsap.from("#serviceContact", 2, {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    start: "-300",
    end: "-200rem",
    markers: true,
    scrub: true,
    trigger: ".serviceContact",
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
