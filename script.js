function real() {
  document.querySelector(".any").innerHTML = "correct";
  document.querySelector(".any").style.color = "white";
}
let any = document.querySelector(".btn");
let btn = document.querySelector("#btn");
let d = 0;
any.addEventListener("click", () => {
  if (d == 0) {
    btn.innerHTML = "Next";

    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.padding = "20px 40px";
    btn.style.cursor = "pointer";
    btn.style.border = "1px solid black";
    btn.style.fontSize = "20px";
    btn.style.fontFamily = "sans-serif";
    btn.style.borderRadius = "10px";
    d = 1;
  } else {
    btn.innerHTML = "";
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.style.padding = "";
    btn.style.cursor = "";
    btn.style.border = "";
    btn.style.fontSize = "";
    btn.style.fontFamily = "";
    btn.style.borderRadius = "";
    d = 0;
  }
});
function fake() {
  document.querySelector(".any").innerHTML = "Incorrect";
  document.querySelector(".any").style.color = "white";
  document.querySelector(".any").style.textAlign = "center";
}
