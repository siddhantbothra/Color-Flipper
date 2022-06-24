const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const body = document.querySelector("body");
let val = "";

btn.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    let value = hex[Math.floor(Math.random() * 14) + 1];
    val = val + value;
  }
  console.log(val);
  body.style.background = `#${val}`;
  val = "";
});
