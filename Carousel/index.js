const buttons = [].slice.call(document.querySelectorAll('.page'));
const cards = [].slice.call(document.querySelectorAll('.card'));

let active = false;

const activeCards = (event) => {
  cards.forEach(card => {
    console.log(card.getAttribute('data-id'))
    if (card.getAttribute('data-id') === event.getAttribute('data-id')) {
        card.style.zIndex = "1"
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
        const random = Math.random() * 20 - 10;
        card.style.transform = `rotate(${random}deg) scale(1)`
    } else {
        card.style.zIndex = "0"
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
    }
  })
}

const activeButtons = (event) => {
  if (active == true) {
    activeCards(event.target)
    buttons.forEach(button => {
      button.classList.remove('active')
      button.setAttribute('aria-selected', 'false');
    });
  }
  active = true;
  const activeButton = event.target;

  activeButton.classList.add('active');
  activeButton.setAttribute('aria-selected', 'true');
}

buttons.forEach(button => button.addEventListener('click', activeButtons));



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
