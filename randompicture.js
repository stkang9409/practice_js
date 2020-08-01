const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.append(image);
}

function genRandNum() {
  const randNum = Math.floor(Math.random() * IMG_NUM);
  return randNum;
}

function init() {
  const randNum = genRandNum();
  paintImg(randNum);
}

init();
