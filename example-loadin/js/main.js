document.addEventListener('click',(e)=>{
	if(e.target.matches('.contentLoader')){
		e.target.firstElementChild.classList.toggle(`${e.target.firstElementChild.classList[0]}--show`)
	}
})