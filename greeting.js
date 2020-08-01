const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetingContainer = document.querySelector(".greeting-container"),
  greeting = greetingContainer.querySelector(".js-greetings"),
  btn = greetingContainer.querySelector(".btn");

const USER_LS = "currentUser";

const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  btn.classList.add(SHOWING_CN);
  greeting.innerText = `오늘도 열심히 살아봅시다 ${text}씨`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function removeName(text) {
  localStorage.removeItem(USER_LS);
  input.value = "";
  form.classList.add(SHOWING_CN);
  btn.classList.remove(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
}

function init() {
  loadName();
  btn.addEventListener("click", removeName);
}

init();
