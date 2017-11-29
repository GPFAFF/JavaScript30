const cardCarousel = document.querySelector('.card_container');
const buttons = [].slice.call(document.querySelectorAll('.page'));
const cards = [].slice.call(document.querySelectorAll('.card'));

let count = 0;
let previous;
let paused = false;
let carouselInterval;

const onLoad = () => {
  buttons[0].classList.add('active');
  cards[0].classList.add('active');
  setTimeout(() => {
    console.log('👀 👀 👀 👀 👀');
    playAnimation();
  }, 100);
}

function stopAnimation(cardCarousel) {
  console.log('⏱⏱⏱⏱⏱⏱⏱⏱');
  cardCarousel.classList.add('paused');
  return clearInterval(carouselInterval);
}

function playAnimation() {
  console.log('🏃🏃🏃🏃🏃🏃🏃🏃🏃');
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    autoLoop();
  }, 2500);
}

const activeCards = (event) => {
  cards.forEach((card) => {
    if (card.getAttribute('data-id') === event.getAttribute('data-id')) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
};

const activeButtons = (event) => {
  paused = true;
  event.preventDefault();

  if (paused) {
    stopAnimation(cardCarousel);
  }

  buttons.forEach((button) => {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
  });

  const activeButton = event.target;
  activeCards(activeButton);
  activeButton.classList.add('active');
  activeButton.setAttribute('aria-selected', 'true');
};

function autoLoop() {
  previous = count > 0 ? count - 1 : 0;
  buttons[previous].classList.toggle('active');
  cards[previous].classList.toggle('active');

  if (count < buttons.length) {
    buttons[count].classList.add('active');
    cards[count].classList.add('active');
    count++;
  } else {
    count = 0;
    autoLoop();
  }
}

function startListening() { window.addEventListener('load', onLoad); }

buttons.forEach(button => button.addEventListener('click', activeButtons));

startListening();