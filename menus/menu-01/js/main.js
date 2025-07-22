const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__menu');
const menuLi = document.querySelectorAll('.menu__li');
menuBtn.addEventListener('click', e => {
	e.target.firstElementChild.classList.toggle('menu__bar--show');
	menu.classList.toggle('menu__menu--show');
	if (!window.matchMedia('(prefers-reduced-motion)').matches) {
		e.target.disabled = true;
		e.target.firstElementChild.classList.add('menu__bar--disabled');
		menuLi[menuLi.length - 1].addEventListener(
			'transitionend',
			() => {
				e.target.disabled = false;
				e.target.firstElementChild.classList.remove('menu__bar--disabled');
			},
			{ once: true }
		);
	}
});
