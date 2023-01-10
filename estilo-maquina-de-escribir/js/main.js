const id = selector => document.getElementById(selector);
const nombres = ['con css y js', 'with css and js'];
const title = id('title');
console.log(title.innerText)
const text = ({ content, array, interval }) => {
	content.textContent = '';
	let conter = 0;
	setInterval(() => {
		content.textContent = array[conter];
		let length = array[conter].length;
		content.style.width = `${length + 1}ch`;
		document.documentElement.style.setProperty('--step', length + 1);
		conter++;
		if (conter === array.length) {
			conter = 0;
		}
	}, interval);
};
text({
	content: title,
	array: nombres,
	interval: 5900,
});
