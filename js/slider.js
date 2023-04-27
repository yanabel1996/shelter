// slider
// const items = document.querySelectorAll('.swiper__item');
const btnNext = document.querySelectorAll('.swiper__next');
const btnPrevious = document.querySelectorAll('.swiper__prev');
const swiper = document.querySelector('.swiper__visible');
const cardLeft = document.querySelector('#card-left');
const cardRight = document.querySelector('#card-right');
const cardActive = document.querySelector('#card-active');

const itemsArray = Array.from(items);

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("swiper__item");
  return card;
}

const moveLeft = () => {
  swiper.classList.add('transition-left');
  btnPrevious.forEach(function (el) {
    el.removeEventListener("click", moveLeft);
  })

  btnNext.forEach(function (el) {
    el.removeEventListener("click", moveRight);
  })
};

const moveRight = () => {
  swiper.classList.add('transition-right');
  btnPrevious.forEach(function (el) {
    el.removeEventListener("click", moveLeft);
  })

  btnNext.forEach(function (el) {
    el.removeEventListener("click", moveRight);
  })
};

btnPrevious.forEach(function (left) {
  left.addEventListener("click", moveLeft);
})

btnNext.forEach(function (right) {
  right.addEventListener("click", moveRight);
})


swiper.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    swiper.classList.remove("transition-left");
    changedItem = cardLeft;
    cardRight.innerHTML = cardActive.innerHTML;
    cardActive.innerHTML = cardLeft.innerHTML;
  } else {
    swiper.classList.remove("transition-right");
    changedItem = cardRight;
    cardLeft.innerHTML = cardActive.innerHTML;
    cardActive.innerHTML = cardRight.innerHTML;
  }

  const randomArray = [];
  for (let j = 0; randomArray.length < 3; j++) {
    let item = Math.floor(Math.random() * 8);
    if (!randomArray.includes(item)) {
      randomArray.push(item);
    }
  }

  changedItem.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const card = createCardTemplate();
    card.innerHTML = itemsArray[randomArray[i]].innerHTML;
    changedItem.appendChild(card);
  }

  btnPrevious.forEach(function (left) {
    left.addEventListener("click", moveLeft);
  })

  btnNext.forEach(function (right) {
    right.addEventListener("click", moveRight);
  })
})
