const buttons = [].slice.call(document.querySelectorAll('.page'));
let active = false;

const activeButtons = (e) => {
  console.log("i hate js")
  console.log(active);
  if (active == true) {
    buttons.forEach(button => button.classList.remove('active'));
  }
  const target = e.target;
  target.classList.add('active');
  active = true;
}

buttons.forEach(function (event) {
  event.addEventListener('click', activeButtons);
})



// var $carousel = $(".js-carousel");
// var $carouselList = $(".js-carousel-list");
// var $carouselItem = $(".js-carousel-item");

// var $btnNext = $(".js-carousel-btnNext");
// var $btnPrev = $(".js-carousel-btnPrev");

// var $pagItem = $(".js-carousel-pagItem");
// var $btnPag = $(".js-carousel-btnPag");

// var activeIndex = 0;
// var maxIndex = $carouselItem.length - 1;

// var layout = function () {
//   $carouselItem.attr("aria-hidden", "true");
//   $carouselItem.eq(activeIndex).attr("aria-hidden", "false");

//   $btnPag.attr("aria-selected", "false");
//   $btnPag.eq(activeIndex).attr("aria-selected", "true");
// };

// var onNext = function () {
//   if (activeIndex !== maxIndex) {
//     activeIndex++;
//     layout();
//   }
// };

// var onPrev = function () {
//   if (activeIndex !== 0) {
//     activeIndex--;
//     layout();
//   }
// };

// var onPag = function (event) {
//   element = event.currentTarget;
//   activeIndex = $btnPag.index(element);
//   layout();
// };

// $btnNext.on("click", onNext);
// $btnPrev.on("click", onPrev);
// $btnPag.on("click", onPag);

// layout();
