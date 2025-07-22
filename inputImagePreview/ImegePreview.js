class ImagePreview extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.shadowRoot.innerHTML = `
						<div class="preview-container">
                <input type="file" id="fileInput" class="file-input" accept="image/*">
                <div id="gallery" class="preview-gallery"></div>
            </div>
        `;
	}

	connectedCallback() {
		const fileInput = this.shadowRoot.getElementById('fileInput');
		const gallery = this.shadowRoot.getElementById('gallery');

		if (this.hasAttribute('multiple')) {
			fileInput.setAttribute('multiple', '');
		} else {
			fileInput.removeAttribute('multiple');
		}

		fileInput.addEventListener('change', e => {
			if (e.target.files && e.target.files.length > 0) {
				const files = Array.from(e.target.files);

				if (!this.hasAttribute('multiple')) {
					this.clearGallery(gallery);
				}

				files.forEach(file => {
					if (file.type.startsWith('image/')) {
						this.addImageToGallery(file, gallery);
					}
				});
			}
		});
	}

	clearGallery(gallery) {
		gallery.querySelectorAll('img').forEach(img => {
			URL.revokeObjectURL(img.src);
		});
		gallery.innerHTML = '';
	}

	addImageToGallery(file, gallery) {
		const imageContainer = document.createElement('div');
		imageContainer.className = 'image-container';

		const img = document.createElement('img');
		img.className = 'preview-image';
		img.src = URL.createObjectURL(file);

		const removeBtn = document.createElement('button');
		removeBtn.className = 'remove-btn';
		removeBtn.innerHTML = '×';
		removeBtn.addEventListener('click', () => {
			URL.revokeObjectURL(img.src);
			imageContainer.remove();
		});

		const fileInfo = document.createElement('div');
		fileInfo.className = 'file-info';
		fileInfo.textContent = `${file.name} (${this.formatFileSize(file.size)})`;

		imageContainer.appendChild(img);
		imageContainer.appendChild(removeBtn);
		imageContainer.appendChild(fileInfo);
		gallery.appendChild(imageContainer);
	}

	formatFileSize(bytes) {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}
}

customElements.define('image-preview', ImagePreview);
