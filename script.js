const btn = document.querySelector(".menu_button");
const menu = document.querySelector(".menu_ul");
function myFunction() {
  btn.addEventListener("click", (e) => {
    if (menu.style.transform != "translateX(-180px) translateY(150px)") {
      menu.style.transform = "translateX(-180px) translateY(150px)";
    } else {
      menu.style.transform = "translateX(10000px)";
    }
  });
}
var x = window.matchMedia("(max-width: 700px)");
myFunction(x);          
x.addListener(myFunction);      