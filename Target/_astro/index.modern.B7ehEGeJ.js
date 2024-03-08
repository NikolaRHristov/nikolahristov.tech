import { e as s } from "./index.modern.CkIAsQri.js";
class i extends s {
	constructor(...t) {
		super(...t),
			(this._originalAnimationSelectorOption = ""),
			(this._addedStyleElements = []),
			(this._addedHTMLContent = []),
			(this._classNameAddedToElements = []),
			(this._addClassNameToElement = () => {
				this._classNameAddedToElements.forEach((e) => {
					Array.from(document.querySelectorAll(e.selector)).forEach(
						(a) => {
							a.classList.add(`swup-transition-${e.name}`);
						},
					);
				});
			});
	}
	_beforeMount() {
		(this._originalAnimationSelectorOption = String(
			this.swup.options.animationSelector,
		)),
			(this.swup.options.animationSelector =
				'[class*="swup-transition-"]'),
			this.swup.hooks.on("content:replace", this._addClassNameToElement);
	}
	_afterUnmount() {
		(this.swup.options.animationSelector =
			this._originalAnimationSelectorOption),
			this._addedStyleElements.forEach((t) => {
				t.outerHTML = "";
			}),
			(this._addedStyleElements = []),
			this._addedHTMLContent.forEach((t) => {
				t.outerHTML = "";
			}),
			(this._addedHTMLContent = []),
			this._classNameAddedToElements.forEach((t) => {
				Array.from(document.querySelectorAll(t.selector)).forEach(
					(e) => {
						e.className.split(" ").forEach((a) => {
							new RegExp("^swup-transition-").test(a) &&
								e.classList.remove(a);
						});
					},
				);
			}),
			this.swup.hooks.off("content:replace", this._addClassNameToElement);
	}
	applyStyles(t) {
		const e = document.createElement("style");
		e.setAttribute("data-swup-theme", ""),
			e.appendChild(document.createTextNode(t)),
			document.head.prepend(e),
			this._addedStyleElements.push(e);
	}
	applyHTML(t) {
		const e = document.createElement("div");
		(e.innerHTML = t),
			document.body.appendChild(e),
			this._addedHTMLContent.push(e);
	}
	addClassName(t, e) {
		this._classNameAddedToElements.push({ selector: t, name: e }),
			this._addClassNameToElement();
	}
}
function r() {
	return (
		(r = Object.assign
			? Object.assign.bind()
			: function (o) {
					for (var t = 1; t < arguments.length; t++) {
						var e = arguments[t];
						for (var a in e)
							Object.prototype.hasOwnProperty.call(e, a) &&
								(o[a] = e[a]);
					}
					return o;
			  }),
		r.apply(this, arguments)
	);
}
class l extends i {
	constructor(t = {}) {
		if (
			(super(),
			(this.name = "SwupOverlayTheme"),
			(this.defaults = {
				direction: "to-right",
				color: void 0,
				duration: void 0,
			}),
			(this.directions = ["to-left", "to-right", "to-top", "to-bottom"]),
			(this.options = r({}, this.defaults, t)),
			!this.directions.includes(this.options.direction))
		)
			throw new Error(`Invalid direction: ${direction}`);
	}
	mount() {
		this.applyStyles(
			"html{--swup-overlay-theme-color:#2d2e82;--swup-overlay-theme-duration:.6s;--swup-overlay-theme-delay:.2s;--swup-overlay-theme-scale:1.2;--swup-overlay-theme-skew:5deg}.swup-transition-overlay{--swup-overlay-x-scale:1;--swup-overlay-y-scale:1;--swup-overlay-skew-direction:1;--swup-overlay-width-value:calc(100vw*var(--swup-overlay-x-scale));--swup-overlay-height-value:calc(100vh*var(--swup-overlay-y-scale));--swup-overlay-transform-x-value:calc(100%*var(--swup-overlay-x-scale));--swup-overlay-transform-y-value:calc(100%*var(--swup-overlay-y-scale));--swup-overlay-top-value:calc((1 - var(--swup-overlay-y-scale))*0.5*100vh);--swup-overlay-left-value:calc((1 - var(--swup-overlay-x-scale))*0.5*100vw);--swup-overlay-bottom-value:auto;--swup-overlay-right-value:auto;--swup-overlay-skew-value:calc(var(--swup-overlay-theme-skew)*var(--swup-overlay-skew-direction));background-color:var(--swup-overlay-theme-color);bottom:var(--swup-overlay-bottom-value);height:var(--swup-overlay-height-value);left:var(--swup-overlay-left-value);opacity:0;pointer-events:none;position:fixed;right:var(--swup-overlay-right-value);top:var(--swup-overlay-top-value);width:var(--swup-overlay-width-value);z-index:9999}html.is-changing .swup-transition-overlay{opacity:1;transition:transform var(--swup-overlay-theme-duration) var(--swup-overlay-theme-delay)}.swup-transition-overlay[data-direction=to-left],.swup-transition-overlay[data-direction=to-right]{--swup-overlay-x-scale:var(--swup-overlay-theme-scale)}.swup-transition-overlay[data-direction=to-right]{transform:translate3d(calc(var(--swup-overlay-transform-x-value)*-1),0,0) skewX(var(--swup-overlay-skew-value))}html.is-animating .swup-transition-overlay[data-direction=to-right]{transform:translateZ(0) skewX(var(--swup-overlay-skew-value))}.swup-transition-overlay[data-direction=to-left],html.is-rendering .swup-transition-overlay[data-direction=to-right]{transform:translate3d(var(--swup-overlay-transform-x-value),0,0) skewX(var(--swup-overlay-skew-value))}.swup-transition-overlay[data-direction=to-left]{--swup-overlay-skew-direction:-1}html.is-animating .swup-transition-overlay[data-direction=to-left]{transform:translateZ(0) skewX(var(--swup-overlay-skew-value))}html.is-rendering .swup-transition-overlay[data-direction=to-left]{transform:translate3d(calc(var(--swup-overlay-transform-x-value)*-1),0,0) skewX(var(--swup-overlay-skew-value))}.swup-transition-overlay[data-direction=to-bottom],.swup-transition-overlay[data-direction=to-top]{--swup-overlay-y-scale:var(--swup-overlay-theme-scale)}.swup-transition-overlay[data-direction=to-bottom]{transform:translate3d(0,calc(var(--swup-overlay-transform-y-value)*-1),0) skewY(var(--swup-overlay-skew-value))}html.is-animating .swup-transition-overlay[data-direction=to-bottom]{transform:translateZ(0) skewY(var(--swup-overlay-skew-value))}.swup-transition-overlay[data-direction=to-top],html.is-rendering .swup-transition-overlay[data-direction=to-bottom]{transform:translate3d(0,var(--swup-overlay-transform-y-value),0) skewY(var(--swup-overlay-skew-value))}.swup-transition-overlay[data-direction=to-top]{--swup-overlay-skew-direction:-1}html.is-animating .swup-transition-overlay[data-direction=to-top]{transform:translateZ(0) skewY(var(--swup-overlay-skew-value))}html.is-rendering .swup-transition-overlay[data-direction=to-top]{transform:translate3d(0,calc(var(--swup-overlay-transform-y-value)*-1),0) skewY(var(--swup-overlay-skew-value))}",
		),
			this.applyHTML(this.createOverlay());
	}
	createOverlay() {
		const { direction: t } = this.options;
		return `
			<div
				class="swup-transition-overlay"
				data-direction="${t}"
				style="--swup-overlay-theme-color:${
					this.options.color !== void 0
						? this.options.color
						: "inherit"
				};--swup-overlay-theme-duration:${
					this.options.duration !== void 0
						? `${this.options.duration}ms`
						: "inherit"
				};"
			></div>
		`;
	}
}
export { l as default };
//# sourceMappingURL=index.modern.B7ehEGeJ.js.map
