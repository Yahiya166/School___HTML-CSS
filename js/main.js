AOS.init({
  offset: 100,
  duration: 1000
});

$(document).ready(function () {
  $(".header__bottom li:has(ul)").addClass("active");
});
var swiper = new Swiper(".banner", {
  effect: "fade",
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //     delay: 10000,
  //     disableOnInteraction: false,
  // },
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
  navigation: {
    nextEl: ".banner_right--btn",
    prevEl: ".banner_left--btn",
  },
});
let textElea = document.querySelectorAll(".text2");
for (let i = 0; i < textElea.length; i++) {
    let textOne = document.querySelectorAll(".text2")[i].innerText.split(" ");
    textElea[i].innerText = "";
    for (let j = 0; j < textOne.length; j++) {

        let node = document.createElement("div");
        node.classList.add("mystyle2");
        let textnode = document.createTextNode(textOne[j])

        node.appendChild(textnode);
        textElea[i].appendChild(node);
    }

}

let textEless = document.querySelectorAll(".mystyle2");

for (let i = 0; i < textEless.length; i++) {
    let textOne = document.querySelectorAll(".mystyle2")[i].innerText.split("");
    textEless[i].innerText = "";
    for (let j = 0; j < textOne.length; j++) {

        let node = document.createElement("span");

        let textnode = document.createTextNode(textOne[j])

        node.appendChild(textnode);
        textEless[i].appendChild(node);
    }

} 

jQuery(document).ready(function($) {
  $("#menu").mmenu({
      "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
      "offCanvas": {
          "position": "right"
      },
      "counters": true,
      "iconPanels": true,
      "navbars": [{
          "position": "top"
      }]
  });
});
window.addEventListener("scroll",(event)=>{
    let scroll = this.scrollY;

    if (scroll > 400) {

    let nav = document.querySelector(".header__bottom");
    nav.classList.add("fixed");
    } else {
        let nav = document.querySelector(".header__bottom");
        nav.classList.remove("fixed");
    }
});

$(document).ready(function() {
    $('.newsslider').owlCarousel({
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        mousewheel: false,
        dots: true,

    });

});
