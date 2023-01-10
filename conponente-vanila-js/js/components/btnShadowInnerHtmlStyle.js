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
  style(){
    return `
    <style>
    button{
      font-family: inherit;
      font-size: inherit;
      hyphens: auto;
      background-color: transparent;
      display: block;
      color: inherit;
      line-height: 1.15;
      margin: 0;
      text-transform: none;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 0.5rem;
      border: 0.125rem solid rgb(158, 158, 158);
      border-radius: 0.3125rem;
      font-weight: bold;
    }
    .btn svg {
      width: 1.875rem;
      height: 1.875rem;
      object-fit: contain;
      fill:currentColor;
      transition: fill .5s;
    }
    .btn:hover svg {
      fill: rgb(255, 26, 26);
    }
    .btn img{
      width: 1.875rem;
      height: 1.875rem;
      object-fit: contain;
    }    
    </style>
    `
  }
	render() {
		this.type = this.getAttribute('type') ?? 'button';
		this.extendedClass = this.getAttribute('extendedClass') ?? '';
		this.title = this.getAttribute('title') ?? 'no definido';
		this.icon = this.getAttribute('icon') ?? '';
		this.shadowRoot.innerHTML = `
    ${this.style()}
  <button type="${this.type}" class="btn ${this.extendedClass}" name="${this.title}">
			${this.icon}
			${this.title}
		</button>
  `;
	}
}
window.customElements.define('btn-shadowdom-innerhtml-style', btnShadowDOMInnerHtml);
