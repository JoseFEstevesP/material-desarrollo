const items = document.querySelectorAll('.menu__item');
document.addEventListener('click', e => {
	if (e.target.matches('#iconBar')) {
		e.target.nextElementSibling.firstElementChild.classList.toggle(
			'menu--show'
		);
		e.target.firstElementChild.classList.toggle('btnMenu__iconBar--show')
		items.forEach(i => {
			i.classList.toggle('menu__item--show');
		});
		e.target.disabled = true;
		setTimeout(() => {
			e.target.disabled = false;
		}, items.length * 250);
	}
});
