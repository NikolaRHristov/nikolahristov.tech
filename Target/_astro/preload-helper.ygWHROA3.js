const v="modulepreload",p=function(l){return"/"+l},f={},E=function(d,i,h){let a=Promise.resolve();if(i&&i.length>0){const r=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),u=n?.nonce||n?.getAttribute("nonce");a=Promise.all(i.map(e=>{if(e=p(e),e in f)return;f[e]=!0;const s=e.endsWith(".css"),m=s?'[rel="stylesheet"]':"";if(!!h)for(let o=r.length-1;o>=0;o--){const c=r[o];if(c.href===e&&(!s||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const t=document.createElement("link");if(t.rel=s?"stylesheet":v,s||(t.as="script",t.crossOrigin=""),t.href=e,u&&t.setAttribute("nonce",u),document.head.appendChild(t),s)return new Promise((o,c)=>{t.addEventListener("load",o),t.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>d()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};export{E as _};
//# sourceMappingURL=preload-helper.ygWHROA3.js.map
