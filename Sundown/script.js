const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elem = document.querySelectorAll(".elem");
  var fixed = document.querySelector(".fixed-image");

  elem.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });

    e.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });
  });
}

function swiperAnimation() {
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      breakpoints: {
        768: { spaceBetween: 80 },
        600: { spaceBetween: 50 },
      },
    });
  }
}

function menuAnimation() {
  var hamburger = document.querySelector(".hamburger");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("#nav img");
  var flag = 0;

  hamburger.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      // animate hamburger to cross
      hamburger.classList.add("active");
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      hamburger.classList.remove("active");
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  if (loader) {
    setTimeout(function () {
      loader.style.top = "-100%";
    }, 4200);
  }
}

// Initialize
swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();

// Update Locomotive Scroll after all resources load
window.addEventListener("load", function () {
  scroll.update();
});