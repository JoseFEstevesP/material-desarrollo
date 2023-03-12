const poster = document.getElementById('poster');
const height = poster.clientHeight;
const width = poster.clientWidth;
poster.addEventListener('mousemove', e => {
	const { layerX, layerY } = e;
	const yRotation = ((layerX - width / 2) / width) * 20;
	const xRotation = ((layerY - height / 2) / height) * 20;
	const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
	poster.style.transform = string;
});
poster.addEventListener('mouseout', (e) => {
	console.log(e)
	poster.style.transform = `perspective(500px) scale(1) rotateX(0) rotateY(0)`;
});
