//
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".logo_search_section");
  var scrollY = window.scrollY;

  if (scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Owl Carousel Section
$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// Notification Toggle
// const notifyButton = document.getElementById("notify_toggle");
// const notifyIcon = document.getElementById("notify_icon");
// const notifyBox = document.getElementById("notification_box");

// notifyButton.addEventListener("click", () => {
//   if (notifyBox.style.right === "-100%") {
//     notifyBox.style.right = "1%";
//     notifyButton.style.backgroundColor = "#dedede";
//     notifyIcon.style.color = "#f14c05";
//     // notifyButton.classList.add("notification_active");
//   } else {
//     notifyBox.style.right = "-100%";
//     notifyButton.style.backgroundColor = "#fafafa";
//     notifyIcon.style.color = "#333333";
//     // notifyButton.classList.remove("notification_active");
//   }
// });

// Profile Toggle Section
// const profileButton = document.getElementById("profile_toggle");
const profileToggle = (e) => {
  const profileBox = document.getElementById("profile_box");

  if (profileBox.style.right === "-100%") {
    profileBox.style.right = "1%";
  } else {
    profileBox.style.right = "-100%";
  }
};

// profileButton.addEventListener("click", (e) => {
//   e.stopPropagation();
//   if (profileBox.style.right === "-100%") {
//     profileBox.style.right = "1%";
//   } else {
//     profileBox.style.right = "-100%";
//   }
// });

// End of JavaScript
