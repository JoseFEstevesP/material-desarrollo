const list = document.querySelectorAll('.navigation__li');
const nav = document.querySelector('.navigation');
const bar = document.querySelector('.navigation__bar');

const sizeContend = 4;
const sizeGap = 0.5;

list.forEach((item, key) => {
	item.addEventListener('click', e => {
		list.forEach(li => li.classList.remove('navigation__li--active'));
		e.currentTarget.classList.add('navigation__li--active');
		bar.style.transform = `translateX(calc(${sizeContend * key}rem + ${Math.abs(
			sizeGap * key
		)}rem ))`;
	});
});
