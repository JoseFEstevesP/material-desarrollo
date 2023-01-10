class btnSvgCreateElements extends HTMLElement {
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
    btn.innerHTML = `${this.icon} ${this.title}`
		// btn.textContent = ;
		// if(this.icon !== ''){
		// }
    this.appendChild(btn)
	}
}
window.customElements.define('btn-svg-createelements', btnSvgCreateElements);
