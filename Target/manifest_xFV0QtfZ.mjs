import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_jGaHlVzy.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroBiome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrobiome","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroBiome\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroBiome","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroBiome/index.astro","pathname":"/Raw/Readme/AstroBiome","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCompress/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrocompress","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroCompress\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroCompress","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroCompress/index.astro","pathname":"/Raw/Readme/AstroCompress","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCritters/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrocritters","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroCritters\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroCritters","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroCritters/index.astro","pathname":"/Raw/Readme/AstroCritters","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroRome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/astrorome","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/AstroRome\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"AstroRome","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/AstroRome/index.astro","pathname":"/Raw/Readme/AstroRome","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand/index.astro","pathname":"/Raw/Readme/CodeEditorLand","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-Foundation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundation","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-Foundation\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-Foundation","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-Foundation/index.astro","pathname":"/Raw/Readme/CodeEditorLand-Foundation","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLand/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationland","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationLand\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationLand","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationLand/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationLand","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLandCargo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationlandcargo","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationLandCargo\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationLandCargo","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationLandCargo/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationLandCargo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLandNPM/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationlandnpm","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationLandNPM\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationLandNPM","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationLandNPM/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationLandNPM","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauri/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationtauri","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationTauri\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationTauri","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationTauri/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationTauri","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauriCargo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationtauricargo","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationTauriCargo\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationTauriCargo","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationTauriCargo/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationTauriCargo","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauriNPM/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/codeeditorland-foundationtaurinpm","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/CodeEditorLand-FoundationTauriNPM\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"CodeEditorLand-FoundationTauriNPM","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/CodeEditorLand-FoundationTauriNPM/index.astro","pathname":"/Raw/Readme/CodeEditorLand-FoundationTauriNPM","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/NikolaRHristov/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/nikolarhristov","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/NikolaRHristov\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"NikolaRHristov","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/NikolaRHristov/index.astro","pathname":"/Raw/Readme/NikolaRHristov","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/RoundedCorners/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/raw/readme/roundedcorners","isIndex":true,"type":"page","pattern":"^\\/Raw\\/Readme\\/RoundedCorners\\/?$","segments":[[{"content":"Raw","dynamic":false,"spread":false}],[{"content":"Readme","dynamic":false,"spread":false}],[{"content":"RoundedCorners","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/Raw/Readme/RoundedCorners/index.astro","pathname":"/Raw/Readme/RoundedCorners","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Developer/Application/NikolaRHristov/Website/Target/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"Source/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://nikolahristov.tech/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:Source/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroBiome/index@_@astro":"pages/raw/readme/astrobiome.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroCompress/index@_@astro":"pages/raw/readme/astrocompress.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroCritters/index@_@astro":"pages/raw/readme/astrocritters.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/AstroRome/index@_@astro":"pages/raw/readme/astrorome.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand/index@_@astro":"pages/raw/readme/codeeditorland.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-Foundation/index@_@astro":"pages/raw/readme/codeeditorland-foundation.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationLand/index@_@astro":"pages/raw/readme/codeeditorland-foundationland.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationLandCargo/index@_@astro":"pages/raw/readme/codeeditorland-foundationlandcargo.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationLandNPM/index@_@astro":"pages/raw/readme/codeeditorland-foundationlandnpm.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationTauri/index@_@astro":"pages/raw/readme/codeeditorland-foundationtauri.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationTauriCargo/index@_@astro":"pages/raw/readme/codeeditorland-foundationtauricargo.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/CodeEditorLand-FoundationTauriNPM/index@_@astro":"pages/raw/readme/codeeditorland-foundationtaurinpm.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/NikolaRHristov/index@_@astro":"pages/raw/readme/nikolarhristov.astro.mjs","\u0000@astro-page:Source/pages/Raw/Readme/RoundedCorners/index@_@astro":"pages/raw/readme/roundedcorners.astro.mjs","\u0000@astro-page:Source/pages/Readme/[...Slug]@_@astro":"pages/readme/_---slug_.astro.mjs","\u0000@astro-page:Source/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_xFV0QtfZ.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Option/Icon.ts":"chunks/Icon_C4pM-rEA.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Function/Parse.ts":"chunks/Parse_tkKQj_Nl.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Chunks.ts":"chunks/Chunks_CO1rO0Y1.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightCSS3.svg":"chunks/LightCSS3_Dxras-vH.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkCSS3.svg":"chunks/DarkCSS3_Bo8Ut236.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGNUBash.svg":"chunks/LightGNUBash_DwCXZ_vS.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGNUBash.svg":"chunks/DarkGNUBash_DX05b1aL.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGo.svg":"chunks/LightGo_D9IefUXn.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGo.svg":"chunks/DarkGo_D-aXbPSQ.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightJavaScript.svg":"chunks/LightJavaScript_D7xHv5ek.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkJavaScript.svg":"chunks/DarkJavaScript_DMFNGwnN.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightLua.svg":"chunks/LightLua_q5bWvZSk.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkLua.svg":"chunks/DarkLua_DFzHFBNg.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightMDX.svg":"chunks/LightMDX_CYrb6g9M.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkMDX.svg":"chunks/DarkMDX__-KPJfzI.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPowershell.svg":"chunks/LightPowershell_zdHgc0sH.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPowershell.svg":"chunks/DarkPowershell_Wqg22kSy.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPython.svg":"chunks/LightPython_DeSFvVPo.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPython.svg":"chunks/DarkPython_B4xcIscc.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightRust.svg":"chunks/LightRust_C64Inn3B.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkRust.svg":"chunks/DarkRust_BK7rW8Mw.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightTypeScript.svg":"chunks/LightTypeScript_B7LTxzL2.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkTypeScript.svg":"chunks/DarkTypeScript__zk3kReQ.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightWindowsTerminal.svg":"chunks/LightWindowsTerminal_Dj5rYk2e.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkWindowsTerminal.svg":"chunks/DarkWindowsTerminal_CA4uYzYl.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightAstro.svg":"chunks/LightAstro_DtXAH9oC.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkAstro.svg":"chunks/DarkAstro_RBTuyahE.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Function/Match.ts":"chunks/Match_Dcq0757H.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Request.ts":"chunks/Request_DFAZ0sve.mjs","D:/Developer/Application/NikolaRHristov/Website/Source/Library/Environment.ts":"chunks/Environment_XrWdZv6Q.mjs","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/body-class-plugin/dist/index.modern.js":"_astro/index.modern.aa8fLSdp.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/overlay-theme/dist/index.modern.js":"_astro/index.modern.B7ehEGeJ.js","astro:scripts/page.js":"_astro/page.CY1iZwUD.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/head-plugin/dist/index.modern.js":"_astro/index.modern.FjGODCox.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/scroll-plugin/dist/index.modern.js":"_astro/index.modern.B6PK6e63.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/preload-plugin/dist/index.modern.js":"_astro/index.modern.CC9knchV.js","/astro/hoisted.js?q=0":"_astro/hoisted.Cq3wJX1T.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/swup/dist/Swup.modern.js":"_astro/Swup.modern.QWtOAMWR.js","D:/Developer/Application/NikolaRHristov/Website/node_modules/firebase/app/dist/esm/index.esm.js":"_astro/index.esm.B2_lNPIz.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/page.CY1iZwUD.js","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/404.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroBiome/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCompress/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroCritters/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/AstroRome/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-Foundation/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLand/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLandCargo/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationLandNPM/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauri/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauriCargo/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/CodeEditorLand-FoundationTauriNPM/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/NikolaRHristov/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/Raw/Readme/RoundedCorners/index.html","/file:///D:/Developer/Application/NikolaRHristov/Website/Target/index.html"],"buildFormat":"directory"});

export { manifest };
//# sourceMappingURL=manifest_xFV0QtfZ.mjs.map
