document.addEventListener('click', e => {
  if(e.target.matches('.menu__btn')){
    e.target.offsetParent.lastElementChild.classList.toggle('menu__nav--show')
  }
});
