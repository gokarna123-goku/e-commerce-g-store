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
  


// End of JavaScript