// Top header opacity toggle
const topHeader = document.getElementById("top-header");

window.addEventListener("scroll", function(){
  if(window.scrollY > 0) {
    topHeader.classList.add("opacity-0");
  } else {
    topHeader.classList.remove("opacity-0");
  }
});

// Language toggler button
// const langToggleBtn = document.getElementById("lang-btn");
// const langOption = document.querySelector(".lang-selection");
// const bodyOpa = document.querySelectorAll(".opa-cus");

// langToggleBtn.addEventListener("click", function() {
//   langOption.classList.toggle("hidden");
//   bodyOpa.classList.toggle("opa-cus");
// })


// Special offer slider
const specialOffer = new Swiper('.specialOffer', {
    direction: 'horizontal',
    loop: false,
    rewind: true,
    speed: 400,
    slidesPerView: 1,
    width: 234,
    slidesOffsetAfter: 10,
    centeredSlides: true,
    slidesOffsetBefore: 16,
    spaceBetween: 12,
    
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// dtac reward slider
const dtacReward = new Swiper('.dtacReward', {
  direction: 'horizontal',
    loop: false,
    rewind: true,
    setWrapperSize: true,
    speed: 400,
    slidesPerView: 1,
    width: 234,
    followFinger: false,
    simulateTouch: true,
    slidesOffsetAfter: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    edgeSwipeDetection: true,
    slidesOffsetBefore: 16,
    spaceBetween: 12,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// Rewards slider 1 (dtac family)
const rewardsSlider1 = new Swiper('.rewardsSlider1', {
  direction: 'horizontal',
    loop: false,
    rewind: true,
    setWrapperSize: true,
    speed: 400,
    slidesPerView: 1,
    width: 234,
    followFinger: false,
    simulateTouch: true,
    slidesOffsetAfter: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    edgeSwipeDetection: true,
    slidesOffsetBefore: 16,
    spaceBetween: 12,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// Rewards slider 2
const rewardsSlider2 = new Swiper('.rewardsSlider2', {
  direction: 'horizontal',
    loop: false,
    rewind: false,
    setWrapperSize: true,
    speed: 400,
    slidesPerView: 1,
    width: 168,
    followFinger: false,
    simulateTouch: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    edgeSwipeDetection: true,
    spaceBetween: 12,
    autoplay: {
      delay: 2000,
    },
});

// dSurance slider
const dSuranceSlider = new Swiper('.dSuranceSlider', {
  direction: 'horizontal',
  loop: false,
  rewind: true,
  setWrapperSize: true,
  speed: 400,
  slidesPerView: 1,
  width: 234,
  followFinger: false,
  simulateTouch: true,
  slidesOffsetAfter: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  edgeSwipeDetection: true,
  slidesOffsetBefore: 16,
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Gaming nation slider 1
const gnSlider1 = new Swiper('.gnSlider1', {
  direction: 'horizontal',
  loop: false,
  rewind: true,
  allowTouchMove: false,
  setWrapperSize: true,
  speed: 400,
  slidesPerView: 1,
  width: 50,
  followFinger: false,
  simulateTouch: false,
  edgeSwipeDetection: true,
  slidesOffsetBefore: 16,
  spaceBetween: 12,
  autoplay: {
    delay: 5000,
  },
});

// Gaming nation slider 2
const gnSlider2 = new Swiper('.gnSlider2', {
  direction: 'horizontal',
  loop: false,
  rewind: true,
  setWrapperSize: true,
  speed: 400,
  slidesPerView: 1,
  width: 234,
  followFinger: false,
  simulateTouch: false,
  edgeSwipeDetection: true,
  slidesOffsetBefore: 16,
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Jaidee slider
const jaideeSlider = new Swiper('.jaideeSlider', {
  direction: 'horizontal',
  loop: false,
  rewind: true,
  setWrapperSize: true,
  speed: 400,
  slidesPerView: 1,
  width: 214,
  followFinger: false,
  simulateTouch: true,
  slidesOffsetAfter: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  edgeSwipeDetection: true,
  slidesOffsetBefore: 16,
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});