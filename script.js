let allInOne = document.querySelector("#allInOne");
let hiddenMenu = document.querySelector("#hiddenMenu");
let abletonLogo = document.querySelector("#abletonLogo");
let bottomHeader = document.querySelector("#bottomHeader")
let is_clicked = false;
let lastScrollTop = 80;

allInOne.addEventListener("click", () => {
  is_clicked = !is_clicked;
  hiddenMenu.classList.toggle("show")
  if (is_clicked) {
    allInOne.textContent = "Menu -";
    allInOne.style.color = "white";
    abletonLogo.style.fill = "white";
  }

  if (!is_clicked) {
    allInOne.textContent = "Menu +";
    abletonLogo.style.fill = "initial";
    allInOne.style.color = "initial";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1050) {
    allInOne.textContent = "Menu +";
    hiddenMenu.style.display = "none";
    abletonLogo.style.fill = "initial";
    allInOne.style.color = "initial";
    is_clicked = false;
  }
});
