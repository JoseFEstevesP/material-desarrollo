class btnSrc extends HTMLElement {
	constructor() {
		super();
		this.type;
		this.title;
		this.icon;
	}
	static get observedAttributes() {
		return ['type', 'title', 'icon'];
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.textContent = ''
		this.type = this.getAttribute('type') ?? 'button';
		this.title = this.getAttribute('title') ?? 'no definido';
		this.icon = this.getAttribute('icon') ?? '';
    this.classShow = this.getAttribute('classShow') ?? ''
		const btn = document.createElement('button');
		btn.type = this.type;
		btn.className = 'btn';
		btn.name = this.title;
		btn.textContent = this.title;
		const img = document.createElement('img');
		img.src = this.icon;
		img.alt = this.title;
		if(this.icon !== ''){
			btn.insertAdjacentElement('afterbegin',img)
		}
    this.appendChild(btn)
	}
}
window.customElements.define('btn-src', btnSrc);
