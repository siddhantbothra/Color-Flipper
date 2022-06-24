const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const body = document.querySelector("body");
btn.addEventListener("click", function () {
  let value = Math.floor(Math.random() * 4) + 1;
  body.style.background = colors[value];
});
