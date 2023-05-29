//
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".logo_search_section");
  var scrollY = window.scrollY;

  if (scrollY >= 50) {
    navbar.classList.add("fixed");
    navbar.style.transition = "0.5s ease-out";
  } else {
    navbar.classList.remove("fixed");
    navbar.style.transition = "0.5s ease-out";
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

// Profile Toggle Section
const profileToggle = (e) => {
  const profileBox = document.getElementById("profile_box");

  if (profileBox.style.right === "-100%") {
    profileBox.style.right = "10px";
    profileBox.style.transition = "0.5s ease-out";
    if (scrollY >= 50){
      profileBox.style.top = "9%"
    } else {
      profileBox.style.top = "15%"
    }
  } else {
    profileBox.style.right = "-100%";
    profileBox.style.transition = "0.5s ease-out";
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
