class Folder {
	static folderOpened = null;

	constructor(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.wrapper = this.DOM.el.querySelector(".aboutFolderIcon");
		this.DOM.back = this.DOM.wrapper.querySelector(".aboutFolderIconImgBack");
		this.DOM.cover = this.DOM.wrapper.querySelector(".aboutFolderIconImgCover");
		this.DOM.preview = this.DOM.el.querySelector(".aboutFolderPreview");
		this.DOM.previewElems = this.DOM.preview.children;
		this.totalPreview = this.DOM.previewElems.length;
		this._initEvents();
	}

	// Remove Or Stop Any Animation.
	_removeAnimeTargets() {
		anime.remove(this.DOM.preview);
		anime.remove(this.DOM.previewElems);
		anime.remove(this.DOM.wrapper);
		anime.remove(this.DOM.cover);
		anime.remove(this.DOM.el);
		if (this.DOM.letters) {
			anime.remove(this.DOM.letters);
		}
	}

	// Create Events
	_initEvents() {
		this.DOM.wrapper.addEventListener("click", () => {
			if (Folder.folderOpened === this) {
				this.mouseleaveFn();
				Folder.folderOpened = null;
			} else if (Folder.folderOpened === null) {
				this.mouseenterFn();
				Folder.folderOpened = this;
			} else if (Folder.folderOpened) {
				Folder.folderOpened.mouseleaveFn();
				this.mouseenterFn();
				Folder.folderOpened = this;
			}
		});
	}

	mouseenterFn = function () {
		const self = this;
		self.intimeout = setTimeout(function () {
			self._removeAnimeTargets();
			self._in();
		}, 75);
	};

	mouseleaveFn = function () {
		const self = this;
		clearTimeout(self.intimeout);
		self._removeAnimeTargets();
		self._out();
	};

	// In Animation
	_in() {
		this.DOM.preview.style.pointerEvents = "all";
		anime({
			targets: this.DOM.previewElems,
			duration: 500,
			easing: [0.1, 1, 0.3, 1],
			translateY: function (t, i, c) {
				const radius = anime.random(95, 120);
				return Math.round(radius * Math.sin((2 * (i + 1) * Math.PI) / c)) + "px";
			},
			translateX: function (t, i, c) {
				const radius = anime.random(95, 120);
				return Math.round(radius * Math.cos((2 * (i + 1) * Math.PI) / c)) + "px";
			},
			rotate: function (t, i, c) {
				return [0, anime.random(-3, 3) + "deg"];
			},
			scale: [0.4, 1],
			opacity: {
				value: 1,
				duration: 10,
				easing: "linear"
			}
		});

		anime({
			targets: this.DOM.wrapper,
			duration: 500,
			easing: [0.1, 1, 0.3, 1],
			scale: [1, 0.8]
		});
	}

	// Out Animation
	_out() {
		this.DOM.preview.style.pointerEvents = "none";
		anime({
			targets: this.DOM.previewElems,
			duration: 500,
			easing: [0.1, 1, 0.3, 1],
			translateY: 0,
			translateX: 0,
			rotate: 0,
			scale: [1, 0.4],
			opacity: {
				value: 0,
				duration: 150,
				delay: 0,
				easing: "linear"
			}
		});

		anime({
			targets: this.DOM.wrapper,
			duration: 500,
			easing: [0.1, 1, 0.3, 1],
			scale: [0.8, 1]
		});
	}
}

new Folder(document.querySelector(".aboutFolderContainer .aboutFolder1"));
new Folder(document.querySelector(".aboutFolderContainer .aboutFolder2"));
new Folder(document.querySelector(".aboutFolderContainer .aboutFolder3"));
new Folder(document.querySelector(".aboutFolderContainer .aboutFolder4"));
new Folder(document.querySelector(".aboutFolderContainer .aboutFolder5"));
new Folder(document.querySelector(".aboutFolderContainer .aboutFolder6"));
