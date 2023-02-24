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
		if (!window.matchMedia('(prefers-reduced-motion)').matches) {
			e.target.disabled = true;
			e.target.firstElementChild.classList.add('btnMenu__iconBar--bg')
			items[items.length - 1].addEventListener('transitionend',e => {
				e.target.offsetParent.parentElement.parentElement.firstElementChild.disabled = false;
				e.target.offsetParent.parentElement.parentElement.firstElementChild.firstElementChild.classList.remove('btnMenu__iconBar--bg')
			},
			{ once: true }
			);
		}
	}
});
