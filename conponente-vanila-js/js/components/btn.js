class btnComponents extends HTMLElement {
	constructor() {
		super();
		this.type;
		this.extendedClass;
		this.title;
		this.icon;
	}
	static get observedAttributes() {
		return ['type', 'extendedClass', 'title', 'icon'];
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.type = this.getAttribute('type') ?? 'button';
		this.extendedClass = this.getAttribute('extendedClass') ?? '';
		this.title = this.getAttribute('title') ?? 'no definido';
		this.icon = this.getAttribute('icon') ?? '';
		this.innerHTML = `
  <button type="${this.type}" class="btn ${this.extendedClass}" name="${this.title}">
			${this.icon}
			${this.title}
		</button>
  `;
	}
}
window.customElements.define('btn-components', btnComponents);
