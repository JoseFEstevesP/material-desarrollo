const menuItem = document.querySelectorAll(".menu__li");
// ====================================================
const articulo1 = document.getElementById("articulo1");
const articulo2 = document.getElementById("articulo2");
const articulo3 = document.getElementById("articulo3");
const articulo4 = document.getElementById("articulo4");
// ====================================================
const removeActiveMenu = () => {
  menuItem.forEach((item) => item.classList.remove("menu__li--activo"));
};
const addActiveMenu = (index) => {
  removeActiveMenu();
  menuItem[index].classList.add("menu__li--activo");
};

const chekElement = (element) =>
  element.getBoundingClientRect().top > 0 &&
  element.getBoundingClientRect().top < 100;
window.addEventListener("scroll", () => {
  if (chekElement(articulo1)) {
    addActiveMenu(articulo1.dataset.index);
    console.log(articulo1.dataset.index);
  } else if (chekElement(articulo2)) {
    addActiveMenu(articulo2.dataset.index);
    // console.log("estas en el 2");
  } else if (chekElement(articulo3)) {
    addActiveMenu(articulo3.dataset.index);
    // console.log("estas en el 3");
  } else if (chekElement(articulo4)) {
    addActiveMenu(articulo4.dataset.index);
    // console.log("estas en el 4");
  }
});
