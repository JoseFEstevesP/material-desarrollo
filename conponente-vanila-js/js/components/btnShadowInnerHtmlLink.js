class btnShadowDOMInnerHtml extends HTMLElement {
	constructor() {
		super();
		this.type;
		this.extendedClass;
		this.title;
		this.icon;
    this.attachShadow({mode:'open'})
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
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./css/btn.css" />
  <button type="${this.type}" class="btn ${this.extendedClass}" name="${this.title}">
			${this.icon}
			${this.title}
		</button>
  `;
	}
}
window.customElements.define('btn-shadowdom-innerhtml-link', btnShadowDOMInnerHtml);
