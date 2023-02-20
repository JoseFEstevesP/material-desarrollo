const listItems = document.querySelectorAll('.menuConfig__item');
document.addEventListener('click', e => {
	if (e.target.matches('.menuConfig__btn--config')) {
		e.target.offsetParent.firstElementChild.classList.toggle(
			'menuConfig__menu--show'
		);
		listItems.forEach(option => {
			option.classList.toggle('menuConfig__item--show');
		});
		e.target.disabled = true;
		e.target.classList.add('menuConfig__btn--disable');
		listItems[listItems.length - 1].addEventListener(
			'transitionend',
			e => {
				e.target.parentElement.offsetParent.nextElementSibling.disabled = false;
				e.target.parentElement.offsetParent.nextElementSibling.classList.remove(
					'menuConfig__btn--disable'
				);
			},
			{ once: true }
		);
	}
});

// document.addEventListener('click', e => {
// 	if (e.target.matches('.menuConfig__btn--config')) {
// 		e.target.classList.toggle('menuConfig__btn--active')
// 	}
// });
