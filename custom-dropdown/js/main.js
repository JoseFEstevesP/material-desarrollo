const dropdownOption = document.querySelectorAll('.dropdown__option');
document.addEventListener('click', e => {
	if (e.target.matches('.dropdown__select')) {
		e.target.nextElementSibling.classList.toggle('dropdown__options--active');
		e.target.lastElementChild.classList.toggle('dropdown__icon--animation');
	}
	if (e.target.matches('.dropdown__option')) {
		e.target.parentElement.parentElement.firstElementChild.firstElementChild.classList.add(
			'dropdown__title--show'
		);
		e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML = `${e.target.firstElementChild.outerHTML} ${e.target.innerText}`;
		e.target.parentElement.classList.toggle('dropdown__options--active');
		e.target.parentElement.parentElement.firstElementChild.lastElementChild.classList.toggle(
			'dropdown__icon--animation'
		);
	}
});
