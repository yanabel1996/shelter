const petsSwiper = document.querySelector(".swiper__items");
const arrows = document.querySelectorAll(".btn--pagination");
const btnCenter = document.querySelector(".page");
const btnLeft = document.querySelector(".btn-left");
const btnLeftEnd = document.querySelector(".btn-left-end");
const btnRight = document.querySelector(".btn-right");
const btnRightEnd = document.querySelector(".btn-right-end");

let cardArr = [0, 1, 2, 3, 4, 5, 6, 7];

let cards = 48;
let itemsArray = Array.from(items);
let cardArr48 = [];
let firstPage = 1;
let page = firstPage;
let lastPage;
let countCardStr;

window.addEventListener('DOMContentLoaded', () => {
  btnCenter.textContent = firstPage;
  btnLeft.classList.add('btn--disabled');
  btnLeftEnd.classList.add('btn--disabled');
  cardSize();
  fillPetCards();
  fillPetPages();
  btnLeft.addEventListener('click', () => btnClick(-1));
  btnRight.addEventListener('click', () => btnClick(1));
  btnLeftEnd.addEventListener("click", () => btnClickEnd(-1));
  btnRightEnd.addEventListener("click", () => btnClickEnd(1));
});

window.addEventListener('resize', () => {
  let countCardStrR = countCardStr;
  page = firstPage;
  btnCenter.textContent = firstPage;
  btnLeft.classList.add('btn--disabled');
  btnLeftEnd.classList.add('btn--disabled');
  btnRight.classList.remove('btn--disabled');
  btnRightEnd.classList.remove('btn--disabled');
  cardSize();
  if (countCardStrR !== countCardStr) {
    fillPetPages();
  }
});

function cardSize() {
  if (window.innerWidth > 1120) {
    countCardStr = 8;
  } else if (window.innerWidth > 639) {
    countCardStr = 6;
  } else {
    countCardStr = 3;
  }
  lastPage = cards / countCardStr;
}

function sliceIntoChunks(array, chunkSize) {
  const res = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function fillPetCards() {
  for (i = 0; i < cards / itemsArray.length; i++) {
    cardArr.sort(() => Math.random() - 0.5);
    cardArr48 = cardArr48.concat(cardArr);
    let cardArr8 = sliceIntoChunks(cardArr48, 8);
    let cardArr6 = sliceIntoChunks(cardArr48, 6);
    let cardArr3 = sliceIntoChunks(cardArr48, 3);
    if (Array.from(new Set(cardArr8)).length !== cardArr8.length ||
      Array.from(new Set(cardArr6)).length !== cardArr6.length ||
      Array.from(new Set(cardArr3)).length !== cardArr3.length) {
      cardArr48.splice(cardArr48.length - itemsArray.length);
      i--;
    } else {
      cardArr6.forEach(e => {
        if (Array.from(new Set(e)).length !== e.length) {
          cardArr48.splice(cardArr48.length - itemsArray.length);
          i--;
        }
      })
    }
  }
}

function fillPetPages() {
  petsSwiper.innerHTML = "";
  let pet;
  for (i = (page - 1) * countCardStr; i < page * countCardStr; i++) {
    pet = itemsArray[cardArr48[i]];
    petsSwiper.append(pet);
  }
}

function btnClick(arrow) {
  if ((page <= firstPage + 1) && (arrow === -1)) btnClickEnd(-1);
  else if ((page >= lastPage - 1) && (arrow === 1)) btnClickEnd(1);
  else {
    arrows.forEach(i => i.classList.remove('btn--disabled'));
    page = page + arrow;
    btnCenter.textContent = page;
    fillPetPages();
  }
}

function btnClickEnd(arrow) {
  arrows.forEach(i => i.classList.remove('btn--disabled'));
  if (arrow === 1) {
    page = lastPage;
    btnRight.classList.add('btn--disabled');
    btnRightEnd.classList.add('btn--disabled');
  } else {
    page = firstPage;
    btnLeft.classList.add('btn--disabled');
    btnLeftEnd.classList.add('btn--disabled');
  }
  btnCenter.textContent = page;
  fillPetPages();
}




