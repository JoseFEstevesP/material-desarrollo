const cronometroContent = document.querySelector('.cronometro__content');
const btnPlay = document.querySelector('.btn__play');
const btnStop = document.querySelector('.btn__stop');
document.addEventListener('click', e => {
	if (e.target.matches('.btn__play')) {
		playPause();
	}
	if (e.target.matches('.btn__stop')) {
		stop();
	}
});
let stopWatchInterval;
let runningTime = 0;
const playPause = () => {
	const isPaused = !btnPlay.classList.contains('btn__play--runnig');
	if (isPaused) {
		btnPlay.classList.add('btn__play--runnig');
		start();
	} else {
		btnPlay.classList.remove('btn__play--runnig');
		pause();
	}
};
const start = () => {
	let startTime = Date.now() - runningTime;
	stopWatchInterval = setInterval(() => {
		runningTime = Date.now() - startTime;
		cronometroContent.textContent = calculateTime(runningTime);
	}, 1000);
};
const pause = () => {
	clearInterval(stopWatchInterval);
};
const stop = () => {
	runningTime = 0;
	btnPlay.classList.remove('btn__play--runnig');
	clearInterval(stopWatchInterval);
};
const calculateTime = runningTime => {
	const totalSeconds = Math.floor(runningTime / 1000);
	const totalMinute = Math.floor(totalSeconds / 60);
	const totlaHour = Math.floor(totalMinute / 24);
	const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');
	const displayMinute = (totalMinute % 60).toString().padStart(2, '0');
	const diplayHour = totlaHour.toString().padStart(2, '0');
	return `${diplayHour}:${displayMinute}:${displaySeconds}`;
};