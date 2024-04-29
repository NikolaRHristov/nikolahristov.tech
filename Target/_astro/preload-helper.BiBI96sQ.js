const f = "modulepreload",
	h = function (c) {
		return "/" + c;
	},
	l = {},
	v = function (a, s, p) {
		let i = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			i = Promise.all(
				s.map((e) => {
					if (((e = h(e)), e in l)) return;
					l[e] = !0;
					const o = e.endsWith(".css"),
						u = o ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${u}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = o ? "stylesheet" : f),
						o || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						o)
					)
						return new Promise((d, m) => {
							t.addEventListener("load", d),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return i
			.then(() => a())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
export { v as _ };
//# sourceMappingURL=preload-helper.BiBI96sQ.js.map
