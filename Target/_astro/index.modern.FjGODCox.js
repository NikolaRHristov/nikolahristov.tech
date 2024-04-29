import { e as E } from "./index.modern.CkIAsQri.js";
function y() {
	return (
		(y = Object.assign
			? Object.assign.bind()
			: function (s) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var a in t)
							Object.prototype.hasOwnProperty.call(t, a) &&
								(s[a] = t[a]);
					}
					return s;
				}),
		y.apply(this, arguments)
	);
}
function A(s) {
	return s.localName !== "title" && !s.matches("[data-swup-theme]");
}
function b(s, n) {
	return s.outerHTML === n.outerHTML;
}
function O(s) {
	return s.matches("link[rel=stylesheet][href]");
}
class j extends E {
	constructor(n = {}) {
		var t;
		super(),
			(t = this),
			(this.name = "SwupHeadPlugin"),
			(this.requires = { swup: ">=4.6" }),
			(this.defaults = {
				persistTags: !1,
				persistAssets: !1,
				awaitAssets: !1,
				timeout: 3e3,
			}),
			(this.options = void 0),
			(this.updateHead = async function (a, { page: {} }) {
				const v = a.to.document,
					{ removed: H, added: w } = (function (
						r,
						f,
						{ shouldPersist: g = () => !1 } = {},
					) {
						const c = Array.from(r.children),
							d = Array.from(f.children),
							l =
								((u = c),
								d.reduce(
									(e, i, h) => (
										u.some((p) => b(i, p)) ||
											e.push({ el: i, index: h }),
										e
									),
									[],
								));
						var u;
						const o = (function (e, i) {
							return e.reduce(
								(h, p) => (
									i.some((x) => b(p, x)) || h.push({ el: p }),
									h
								),
								[],
							);
						})(c, d);
						return (
							o
								.reverse()
								.filter(({ el: e }) => A(e))
								.filter(({ el: e }) => !g(e))
								.forEach(({ el: e }) => r.removeChild(e)),
							l
								.filter(({ el: e }) => A(e))
								.forEach(({ el: e, index: i = 0 }) => {
									r.insertBefore(
										e.cloneNode(!0),
										r.children[i + 1] || null,
									);
								}),
							{
								removed: o.map(({ el: e }) => e),
								added: l.map(({ el: e }) => e),
							}
						);
					})(document.head, v.head, {
						shouldPersist: (r) => t.isPersistentTag(r),
					});
				t.swup.log(
					`Removed ${H.length} / added ${w.length} tags in head`,
				);
				const T =
					(m = document.documentElement).lang !==
					(P = v.documentElement).lang
						? ((m.lang = P.lang), m.lang)
						: null;
				var m, P;
				if (
					(T && t.swup.log(`Updated lang attribute: ${T}`),
					t.options.awaitAssets)
				) {
					const r = (function (f, g = 0) {
						return f.filter(O).map((c) =>
							(function (d, l = 0) {
								const u = (o) => {
									(({ href: e }) =>
										Array.from(document.styleSheets)
											.map(({ href: i }) => i)
											.includes(e))(d)
										? o()
										: setTimeout(() => u(o), 10);
								};
								return new Promise((o) => {
									u(o), l > 0 && setTimeout(o, l);
								});
							})(c, g),
						);
					})(w, t.options.timeout);
					r.length &&
						(t.swup.log(`Waiting for ${r.length} assets to load`),
						await Promise.all(r));
				}
			}),
			(this.options = y({}, this.defaults, n)),
			this.options.persistAssets &&
				!this.options.persistTags &&
				(this.options.persistTags =
					"link[rel=stylesheet], script[src], style");
	}
	mount() {
		this.before("content:replace", this.updateHead);
	}
	isPersistentTag(n) {
		const { persistTags: t } = this.options;
		return typeof t == "function"
			? t(n)
			: typeof t == "string"
				? n.matches(t)
				: !!t;
	}
}
export { j as default };
//# sourceMappingURL=index.modern.FjGODCox.js.map
