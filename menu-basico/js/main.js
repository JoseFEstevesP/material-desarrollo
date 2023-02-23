const items = document.querySelectorAll('.menu__item');
document.addEventListener('click', e => {
	if (e.target.matches('#iconBar')) {
		e.target.nextElementSibling.firstElementChild.classList.toggle(
			'menu--show'
		);
		e.target.firstElementChild.classList.toggle('btnMenu__iconBar--show');
		items.forEach(i => {
			i.classList.toggle('menu__item--show');
		});
		e.target.disabled = true;
		items[items.length - 1].addEventListener(
			'transitionend',
			e => {
				e.target.offsetParent.parentElement.parentElement.firstElementChild.disabled = false;
			},
			{ once: true }
		);
	}
});
