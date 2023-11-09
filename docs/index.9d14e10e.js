// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4yLrY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "59d1be459d14e10e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lyqAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _mainPage = require("./components/MainPage");
var _mainPageDefault = parcelHelpers.interopDefault(_mainPage);
// Set up routing by connecting components to routes
(0, _mithrilDefault.default).route(document.body, "/", {
    "/": (0, _mainPageDefault.default)
});

},{"mithril":"1zcoP","./components/MainPage":"3jIkr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zcoP":[function(require,module,exports) {
"use strict";
var hyperscript = require("93549bebb559a185");
var request = require("ffc931a12fb92780");
var mountRedraw = require("3c155dd1af211f5d");
var m = function m() {
    return hyperscript.apply(this, arguments);
};
m.m = hyperscript;
m.trust = hyperscript.trust;
m.fragment = hyperscript.fragment;
m.Fragment = "[";
m.mount = mountRedraw.mount;
m.route = require("1f0fc3bbca8278a1");
m.render = require("c1148290e36671bb");
m.redraw = mountRedraw.redraw;
m.request = request.request;
m.jsonp = request.jsonp;
m.parseQueryString = require("b348d752473aa042");
m.buildQueryString = require("6fda30db2e0aba2d");
m.parsePathname = require("4410a62b9aac3465");
m.buildPathname = require("e25eb55f7e8253db");
m.vnode = require("4fa5caca81091144");
m.PromisePolyfill = require("1957dc4f39cb285f");
m.censor = require("d0598fefc1e3090e");
module.exports = m;

},{"93549bebb559a185":"bDjZC","ffc931a12fb92780":"5poAh","3c155dd1af211f5d":"jh7iq","1f0fc3bbca8278a1":"4SNaV","c1148290e36671bb":"lR5T8","b348d752473aa042":"ZeRxY","6fda30db2e0aba2d":"fbqKb","4410a62b9aac3465":"jK2nr","e25eb55f7e8253db":"k2dgA","4fa5caca81091144":"5c56e","1957dc4f39cb285f":"tOBdH","d0598fefc1e3090e":"4snGY"}],"bDjZC":[function(require,module,exports) {
"use strict";
var hyperscript = require("f0f774058bea2afe");
hyperscript.trust = require("66380fad4f676f97");
hyperscript.fragment = require("249e7d359e55d495");
module.exports = hyperscript;

},{"f0f774058bea2afe":"js0vQ","66380fad4f676f97":"6vpah","249e7d359e55d495":"gax7g"}],"js0vQ":[function(require,module,exports) {
"use strict";
var Vnode = require("67d1a8f028b8c23a");
var hyperscriptVnode = require("310598f2e22371a7");
var hasOwn = require("46da15ad2a627b49");
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
var selectorCache = {};
function isEmpty(object) {
    for(var key in object)if (hasOwn.call(object, key)) return false;
    return true;
}
function compileSelector(selector) {
    var match, tag = "div", classes = [], attrs = {};
    while(match = selectorParser.exec(selector)){
        var type = match[1], value = match[2];
        if (type === "" && value !== "") tag = value;
        else if (type === "#") attrs.id = value;
        else if (type === ".") classes.push(value);
        else if (match[3][0] === "[") {
            var attrValue = match[6];
            if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match[4] === "class") classes.push(attrValue);
            else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
        }
    }
    if (classes.length > 0) attrs.className = classes.join(" ");
    return selectorCache[selector] = {
        tag: tag,
        attrs: attrs
    };
}
function execSelector(state, vnode) {
    var attrs = vnode.attrs;
    var hasClass = hasOwn.call(attrs, "class");
    var className = hasClass ? attrs.class : attrs.className;
    vnode.tag = state.tag;
    vnode.attrs = {};
    if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
        var newAttrs = {};
        for(var key in attrs)if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];
        attrs = newAttrs;
    }
    for(var key in state.attrs)if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)) attrs[key] = state.attrs[key];
    if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
    if (hasClass) attrs.class = null;
    for(var key in attrs)if (hasOwn.call(attrs, key) && key !== "key") {
        vnode.attrs = attrs;
        break;
    }
    return vnode;
}
function hyperscript(selector) {
    if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") throw Error("The selector must be either a string or a component.");
    var vnode = hyperscriptVnode.apply(1, arguments);
    if (typeof selector === "string") {
        vnode.children = Vnode.normalizeChildren(vnode.children);
        if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
    }
    vnode.tag = selector;
    return vnode;
}
module.exports = hyperscript;

},{"67d1a8f028b8c23a":"5c56e","310598f2e22371a7":"bU2ny","46da15ad2a627b49":"elD1t"}],"5c56e":[function(require,module,exports) {
"use strict";
function Vnode(tag, key, attrs, children, text, dom) {
    return {
        tag: tag,
        key: key,
        attrs: attrs,
        children: children,
        text: text,
        dom: dom,
        domSize: undefined,
        state: undefined,
        events: undefined,
        instance: undefined
    };
}
Vnode.normalize = function(node) {
    if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
    if (node == null || typeof node === "boolean") return null;
    if (typeof node === "object") return node;
    return Vnode("#", undefined, undefined, String(node), undefined, undefined);
};
Vnode.normalizeChildren = function(input) {
    var children = [];
    if (input.length) {
        var isKeyed = input[0] != null && input[0].key != null;
        // Note: this is a *very* perf-sensitive check.
        // Fun fact: merging the loop like this is somehow faster than splitting
        // it, noticeably so.
        for(var i = 1; i < input.length; i++){
            if ((input[i] != null && input[i].key != null) !== isKeyed) throw new TypeError(isKeyed && (input[i] != null || typeof input[i] === "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys.");
        }
        for(var i = 0; i < input.length; i++)children[i] = Vnode.normalize(input[i]);
    }
    return children;
};
module.exports = Vnode;

},{}],"bU2ny":[function(require,module,exports) {
"use strict";
var Vnode = require("f1426f9dc42d73e");
// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
    var attrs = arguments[this], start = this + 1, children;
    if (attrs == null) attrs = {};
    else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
        attrs = {};
        start = this;
    }
    if (arguments.length === start + 1) {
        children = arguments[start];
        if (!Array.isArray(children)) children = [
            children
        ];
    } else {
        children = [];
        while(start < arguments.length)children.push(arguments[start++]);
    }
    return Vnode("", attrs.key, attrs, children);
};

},{"f1426f9dc42d73e":"5c56e"}],"elD1t":[function(require,module,exports) {
// This exists so I'm only saving it once.
"use strict";
module.exports = ({}).hasOwnProperty;

},{}],"6vpah":[function(require,module,exports) {
"use strict";
var Vnode = require("d026f8a7e33fcbb9");
module.exports = function(html) {
    if (html == null) html = "";
    return Vnode("<", undefined, undefined, html, undefined, undefined);
};

},{"d026f8a7e33fcbb9":"5c56e"}],"gax7g":[function(require,module,exports) {
"use strict";
var Vnode = require("50a8ddcebd144f63");
var hyperscriptVnode = require("39de75837a549ccc");
module.exports = function() {
    var vnode = hyperscriptVnode.apply(0, arguments);
    vnode.tag = "[";
    vnode.children = Vnode.normalizeChildren(vnode.children);
    return vnode;
};

},{"50a8ddcebd144f63":"5c56e","39de75837a549ccc":"bU2ny"}],"5poAh":[function(require,module,exports) {
"use strict";
var PromisePolyfill = require("a9d8fbae64b1b7e8");
var mountRedraw = require("64666c357cfd1bd3");
module.exports = require("20cfea52190c88b7")(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw);

},{"a9d8fbae64b1b7e8":"298EJ","64666c357cfd1bd3":"jh7iq","20cfea52190c88b7":"8fm7T"}],"298EJ":[function(require,module,exports) {
/* global window */ var global = arguments[3];
"use strict";
var PromisePolyfill = require("5a96f0df8de3693c");
if (typeof window !== "undefined") {
    if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
    else if (!window.Promise.prototype.finally) window.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = window.Promise;
} else if (typeof global !== "undefined") {
    if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill;
    else if (!global.Promise.prototype.finally) global.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = global.Promise;
} else module.exports = PromisePolyfill;

},{"5a96f0df8de3693c":"tOBdH"}],"tOBdH":[function(require,module,exports) {
"use strict";
/** @constructor */ var PromisePolyfill = function(executor) {
    if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with 'new'.");
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
    var instance = self._instance = {
        resolvers: resolvers,
        rejectors: rejectors
    };
    var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
    function handler(list, shouldAbsorb) {
        return function execute(value) {
            var then;
            try {
                if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
                    if (value === self) throw new TypeError("Promise can't be resolved with itself.");
                    executeOnce(then.bind(value));
                } else callAsync(function() {
                    if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
                    for(var i = 0; i < list.length; i++)list[i](value);
                    resolvers.length = 0, rejectors.length = 0;
                    instance.state = shouldAbsorb;
                    instance.retry = function() {
                        execute(value);
                    };
                });
            } catch (e) {
                rejectCurrent(e);
            }
        };
    }
    function executeOnce(then) {
        var runs = 0;
        function run(fn) {
            return function(value) {
                if (runs++ > 0) return;
                fn(value);
            };
        }
        var onerror = run(rejectCurrent);
        try {
            then(run(resolveCurrent), onerror);
        } catch (e) {
            onerror(e);
        }
    }
    executeOnce(executor);
};
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
    var self = this, instance = self._instance;
    function handle(callback, list, next, state) {
        list.push(function(value) {
            if (typeof callback !== "function") next(value);
            else try {
                resolveNext(callback(value));
            } catch (e) {
                if (rejectNext) rejectNext(e);
            }
        });
        if (typeof instance.retry === "function" && state === instance.state) instance.retry();
    }
    var resolveNext, rejectNext;
    var promise = new PromisePolyfill(function(resolve, reject) {
        resolveNext = resolve, rejectNext = reject;
    });
    handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
    return promise;
};
PromisePolyfill.prototype.catch = function(onRejection) {
    return this.then(null, onRejection);
};
PromisePolyfill.prototype.finally = function(callback) {
    return this.then(function(value) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return value;
        });
    }, function(reason) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return PromisePolyfill.reject(reason);
        });
    });
};
PromisePolyfill.resolve = function(value) {
    if (value instanceof PromisePolyfill) return value;
    return new PromisePolyfill(function(resolve) {
        resolve(value);
    });
};
PromisePolyfill.reject = function(value) {
    return new PromisePolyfill(function(resolve, reject) {
        reject(value);
    });
};
PromisePolyfill.all = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        var total = list.length, count = 0, values = [];
        if (list.length === 0) resolve([]);
        else for(var i = 0; i < list.length; i++)(function(i) {
            function consume(value) {
                count++;
                values[i] = value;
                if (count === total) resolve(values);
            }
            if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") list[i].then(consume, reject);
            else consume(list[i]);
        })(i);
    });
};
PromisePolyfill.race = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        for(var i = 0; i < list.length; i++)list[i].then(resolve, reject);
    });
};
module.exports = PromisePolyfill;

},{}],"jh7iq":[function(require,module,exports) {
"use strict";
var render = require("e9eb48dd8cedc516");
module.exports = require("856b9fa9d93f38f3")(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null);

},{"e9eb48dd8cedc516":"lR5T8","856b9fa9d93f38f3":"8CHiL"}],"lR5T8":[function(require,module,exports) {
"use strict";
module.exports = require("5ce98d5aeb50f0a6")(typeof window !== "undefined" ? window : null);

},{"5ce98d5aeb50f0a6":"cS6qC"}],"cS6qC":[function(require,module,exports) {
"use strict";
var Vnode = require("8c1a3af9d274e105");
module.exports = function($window) {
    var $doc = $window && $window.document;
    var currentRedraw;
    var nameSpace = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    };
    function getNameSpace(vnode) {
        return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
    }
    //sanity check to discourage people from doing `vnode.state = ...`
    function checkState(vnode, original) {
        if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.");
    }
    //Note: the hook is passed as the `this` argument to allow proxying the
    //arguments without requiring a full array allocation to do so. It also
    //takes advantage of the fact the current `vnode` is the first argument in
    //all lifecycle methods.
    function callHook(vnode) {
        var original = vnode.state;
        try {
            return this.apply(original, arguments);
        } finally{
            checkState(vnode, original);
        }
    }
    // IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
    // inside an iframe. Catch and swallow this error, and heavy-handidly return null.
    function activeElement() {
        try {
            return $doc.activeElement;
        } catch (e) {
            return null;
        }
    }
    //create
    function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function createNode(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        if (typeof tag === "string") {
            vnode.state = {};
            if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
            switch(tag){
                case "#":
                    createText(parent, vnode, nextSibling);
                    break;
                case "<":
                    createHTML(parent, vnode, ns, nextSibling);
                    break;
                case "[":
                    createFragment(parent, vnode, hooks, ns, nextSibling);
                    break;
                default:
                    createElement(parent, vnode, hooks, ns, nextSibling);
            }
        } else createComponent(parent, vnode, hooks, ns, nextSibling);
    }
    function createText(parent, vnode, nextSibling) {
        vnode.dom = $doc.createTextNode(vnode.children);
        insertNode(parent, vnode.dom, nextSibling);
    }
    var possibleParents = {
        caption: "table",
        thead: "table",
        tbody: "table",
        tfoot: "table",
        tr: "tbody",
        th: "tr",
        td: "tr",
        colgroup: "table",
        col: "colgroup"
    };
    function createHTML(parent, vnode, ns, nextSibling) {
        var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
        // not using the proper parent makes the child element(s) vanish.
        //     var div = document.createElement("div")
        //     div.innerHTML = "<td>i</td><td>j</td>"
        //     console.log(div.innerHTML)
        // --> "ij", no <td> in sight.
        var temp = $doc.createElement(possibleParents[match[1]] || "div");
        if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + vnode.children + "</svg>";
            temp = temp.firstChild;
        } else temp.innerHTML = vnode.children;
        vnode.dom = temp.firstChild;
        vnode.domSize = temp.childNodes.length;
        // Capture nodes to remove, so we don't confuse them.
        vnode.instance = [];
        var fragment = $doc.createDocumentFragment();
        var child;
        while(child = temp.firstChild){
            vnode.instance.push(child);
            fragment.appendChild(child);
        }
        insertNode(parent, fragment, nextSibling);
    }
    function createFragment(parent, vnode, hooks, ns, nextSibling) {
        var fragment = $doc.createDocumentFragment();
        if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
        }
        vnode.dom = fragment.firstChild;
        vnode.domSize = fragment.childNodes.length;
        insertNode(parent, fragment, nextSibling);
    }
    function createElement(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        var attrs = vnode.attrs;
        var is = attrs && attrs.is;
        ns = getNameSpace(vnode) || ns;
        var element = ns ? is ? $doc.createElementNS(ns, tag, {
            is: is
        }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {
            is: is
        }) : $doc.createElement(tag);
        vnode.dom = element;
        if (attrs != null) setAttrs(vnode, attrs, ns);
        insertNode(parent, element, nextSibling);
        if (!maybeSetContentEditable(vnode)) {
            if (vnode.children != null) {
                var children = vnode.children;
                createNodes(element, children, 0, children.length, hooks, null, ns);
                if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs);
            }
        }
    }
    function initComponent(vnode, hooks) {
        var sentinel;
        if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
        } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
        }
        initLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        sentinel.$$reentrantLock$$ = null;
    }
    function createComponent(parent, vnode, hooks, ns, nextSibling) {
        initComponent(vnode, hooks);
        if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
        } else vnode.domSize = 0;
    }
    //update
    /**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */ // This function diffs and patches lists of vnodes, both keyed and unkeyed.
    //
    // We will:
    //
    // 1. describe its general structure
    // 2. focus on the diff algorithm optimizations
    // 3. discuss DOM node operations.
    // ## Overview:
    //
    // The updateNodes() function:
    // - deals with trivial cases
    // - determines whether the lists are keyed or unkeyed based on the first non-null node
    //   of each list.
    // - diffs them and patches the DOM if needed (that's the brunt of the code)
    // - manages the leftovers: after diffing, are there:
    //   - old nodes left to remove?
    // 	 - new nodes to insert?
    // 	 deal with them!
    //
    // The lists are only iterated over once, with an exception for the nodes in `old` that
    // are visited in the fourth part of the diff and in the `removeNodes` loop.
    // ## Diffing
    //
    // Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
    // may be good for context on longest increasing subsequence-based logic for moving nodes.
    //
    // In order to diff keyed lists, one has to
    //
    // 1) match nodes in both lists, per key, and update them accordingly
    // 2) create the nodes present in the new list, but absent in the old one
    // 3) remove the nodes present in the old list, but absent in the new one
    // 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
    //
    // To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
    // over the new list and for each new vnode, find the corresponding vnode in the old list using
    // the map.
    // 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
    // and must be created.
    // For the removals, we actually remove the nodes that have been updated from the old list.
    // The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
    // The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
    // algorithm.
    //
    // the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
    // from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
    // corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
    //  match the above lists, for example).
    //
    // In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
    // can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
    //
    // @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
    // the longest increasing subsequence *of old nodes still present in the new list*).
    //
    // It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
    // and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
    // the `LIS` and a temporary one to create the LIS).
    //
    // So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
    // the LIS and can be updated without moving them.
    //
    // If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
    // the exception of the last node if the list is fully reversed).
    //
    // ## Finding the next sibling.
    //
    // `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
    // When the list is being traversed top-down, at any index, the DOM nodes up to the previous
    // vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
    // list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
    //
    // In the other scenarios (swaps, upwards traversal, map-based diff),
    // the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
    // bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
    // as the next sibling (cached in the `nextSibling` variable).
    // ## DOM node moves
    //
    // In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
    // this is not the case if the node moved (second and fourth part of the diff algo). We move
    // the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
    // variable rather than fetching it using `getNextSibling()`.
    //
    // The fourth part of the diff currently inserts nodes unconditionally, leading to issues
    // like #1791 and #1999. We need to be smarter about those situations where adjascent old
    // nodes remain together in the new list in a way that isn't covered by parts one and
    // three of the diff algo.
    function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
        if (old === vnodes || old == null && vnodes == null) return;
        else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
        else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
        else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start = 0, oldStart = 0;
            if (!isOldKeyed) while(oldStart < old.length && old[oldStart] == null)oldStart++;
            if (!isKeyed) while(start < vnodes.length && vnodes[start] == null)start++;
            if (isOldKeyed !== isKeyed) {
                removeNodes(parent, old, oldStart, old.length);
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
                // Don't index past the end of either list (causes deopts).
                var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
                // Rewind if necessary to the first non-null index on either side.
                // We could alternatively either explicitly create or remove nodes when `start !== oldStart`
                // but that would be optimizing for sparse lists which are more rare than dense ones.
                start = start < oldStart ? start : oldStart;
                for(; start < commonLength; start++){
                    o = old[start];
                    v = vnodes[start];
                    if (o === v || o == null && v == null) continue;
                    else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                    else if (v == null) removeNode(parent, o);
                    else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);
                }
                if (old.length > commonLength) removeNodes(parent, old, start, old.length);
                if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
                // keyed diff
                var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling;
                // bottom-up
                while(oldEnd >= oldStart && end >= start){
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                }
                // top-down
                while(oldEnd >= oldStart && end >= start){
                    o = old[oldStart];
                    v = vnodes[start];
                    if (o.key !== v.key) break;
                    oldStart++, start++;
                    if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
                }
                // swaps and list reversals
                while(oldEnd >= oldStart && end >= start){
                    if (start === end) break;
                    if (o.key !== ve.key || oe.key !== v.key) break;
                    topSibling = getNextSibling(old, oldStart, nextSibling);
                    moveNodes(parent, oe, topSibling);
                    if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
                    if (++start <= --end) moveNodes(parent, o, nextSibling);
                    if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldStart++;
                    oldEnd--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    o = old[oldStart];
                    v = vnodes[start];
                }
                // bottom up once again
                while(oldEnd >= oldStart && end >= start){
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                }
                if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);
                else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                else {
                    // inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
                    var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map, lisIndices;
                    for(i = 0; i < vnodesLength; i++)oldIndices[i] = -1;
                    for(i = end; i >= start; i--){
                        if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);
                        ve = vnodes[i];
                        var oldIndex = map[ve.key];
                        if (oldIndex != null) {
                            pos = oldIndex < pos ? oldIndex : -1 // becomes -1 if nodes were re-ordered
                            ;
                            oldIndices[i - start] = oldIndex;
                            oe = old[oldIndex];
                            old[oldIndex] = null;
                            if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                            if (ve.dom != null) nextSibling = ve.dom;
                            matched++;
                        }
                    }
                    nextSibling = originalNextSibling;
                    if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
                    if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                    else {
                        if (pos === -1) {
                            // the indices of the indices of the items that are part of the
                            // longest increasing subsequence in the oldIndices list
                            lisIndices = makeLisIndices(oldIndices);
                            li = lisIndices.length - 1;
                            for(i = end; i >= start; i--){
                                v = vnodes[i];
                                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                                else if (lisIndices[li] === i - start) li--;
                                else moveNodes(parent, v, nextSibling);
                                if (v.dom != null) nextSibling = vnodes[i].dom;
                            }
                        } else for(i = end; i >= start; i--){
                            v = vnodes[i];
                            if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                            if (v.dom != null) nextSibling = vnodes[i].dom;
                        }
                    }
                }
            }
        }
    }
    function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
        var oldTag = old.tag, tag = vnode.tag;
        if (oldTag === tag) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old)) return;
            if (typeof oldTag === "string") {
                if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
                switch(oldTag){
                    case "#":
                        updateText(old, vnode);
                        break;
                    case "<":
                        updateHTML(parent, old, vnode, ns, nextSibling);
                        break;
                    case "[":
                        updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                        break;
                    default:
                        updateElement(old, vnode, hooks, ns);
                }
            } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
        } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function updateText(old, vnode) {
        if (old.children.toString() !== vnode.children.toString()) old.dom.nodeValue = vnode.children;
        vnode.dom = old.dom;
    }
    function updateHTML(parent, old, vnode, ns, nextSibling) {
        if (old.children !== vnode.children) {
            removeHTML(parent, old);
            createHTML(parent, vnode, ns, nextSibling);
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
            vnode.instance = old.instance;
        }
    }
    function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
        updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
        var domSize = 0, children = vnode.children;
        vnode.dom = null;
        if (children != null) {
            for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null && child.dom != null) {
                    if (vnode.dom == null) vnode.dom = child.dom;
                    domSize += child.domSize || 1;
                }
            }
            if (domSize !== 1) vnode.domSize = domSize;
        }
    }
    function updateElement(old, vnode, hooks, ns) {
        var element = vnode.dom = old.dom;
        ns = getNameSpace(vnode) || ns;
        if (vnode.tag === "textarea") {
            if (vnode.attrs == null) vnode.attrs = {};
        }
        updateAttrs(vnode, old.attrs, vnode.attrs, ns);
        if (!maybeSetContentEditable(vnode)) updateNodes(element, old.children, vnode.children, hooks, null, ns);
    }
    function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        updateLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
        if (vnode.instance != null) {
            if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
        } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = undefined;
            vnode.domSize = 0;
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
        }
    }
    function getKeyMap(vnodes, start, end) {
        var map = Object.create(null);
        for(; start < end; start++){
            var vnode = vnodes[start];
            if (vnode != null) {
                var key = vnode.key;
                if (key != null) map[key] = start;
            }
        }
        return map;
    }
    // Lifted from ivi https://github.com/ivijs/ivi/
    // takes a list of unique numbers (-1 is special and can
    // occur multiple times) and returns an array with the indices
    // of the items that are part of the longest increasing
    // subsequence
    var lisTemp = [];
    function makeLisIndices(a) {
        var result = [
            0
        ];
        var u = 0, v = 0, i = 0;
        var il = lisTemp.length = a.length;
        for(var i = 0; i < il; i++)lisTemp[i] = a[i];
        for(var i = 0; i < il; ++i){
            if (a[i] === -1) continue;
            var j = result[result.length - 1];
            if (a[j] < a[i]) {
                lisTemp[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                // Fast integer average without overflow.
                // eslint-disable-next-line no-bitwise
                var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
                if (a[result[c]] < a[i]) u = c + 1;
                else v = c;
            }
            if (a[i] < a[result[u]]) {
                if (u > 0) lisTemp[i] = result[u - 1];
                result[u] = i;
            }
        }
        u = result.length;
        v = result[u - 1];
        while(u-- > 0){
            result[u] = v;
            v = lisTemp[v];
        }
        lisTemp.length = 0;
        return result;
    }
    function getNextSibling(vnodes, i, nextSibling) {
        for(; i < vnodes.length; i++){
            if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
        }
        return nextSibling;
    }
    // This covers a really specific edge case:
    // - Parent node is keyed and contains child
    // - Child is removed, returns unresolved promise in `onbeforeremove`
    // - Parent node is moved in keyed diff
    // - Remaining children still need moved appropriately
    //
    // Ideally, I'd track removed nodes as well, but that introduces a lot more
    // complexity and I'm not exactly interested in doing that.
    function moveNodes(parent, vnode, nextSibling) {
        var frag = $doc.createDocumentFragment();
        moveChildToFrag(parent, frag, vnode);
        insertNode(parent, frag, nextSibling);
    }
    function moveChildToFrag(parent, frag, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") for(var i = 0; i < vnode.instance.length; i++)frag.appendChild(vnode.instance[i]);
            else if (vnode.tag !== "[") // Don't recurse for text nodes *or* elements, just fragments
            frag.appendChild(vnode.dom);
            else if (vnode.children.length === 1) {
                vnode = vnode.children[0];
                if (vnode != null) continue;
            } else for(var i = 0; i < vnode.children.length; i++){
                var child = vnode.children[i];
                if (child != null) moveChildToFrag(parent, frag, child);
            }
            break;
        }
    }
    function insertNode(parent, dom, nextSibling) {
        if (nextSibling != null) parent.insertBefore(dom, nextSibling);
        else parent.appendChild(dom);
    }
    function maybeSetContentEditable(vnode) {
        if (vnode.attrs == null || vnode.attrs.contenteditable == null && // attribute
        vnode.attrs.contentEditable == null // property
        ) return false;
        var children = vnode.children;
        if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
        } else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.");
        return true;
    }
    //remove
    function removeNodes(parent, vnodes, start, end) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) removeNode(parent, vnode);
        }
    }
    function removeNode(parent, vnode) {
        var mask = 0;
        var original = vnode.state;
        var stateResult, attrsResult;
        if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
            var result = callHook.call(vnode.state.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                mask = 1;
                stateResult = result;
            }
        }
        if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
            var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                // eslint-disable-next-line no-bitwise
                mask |= 2;
                attrsResult = result;
            }
        }
        checkState(vnode, original);
        // If we can, try to fast-path it and avoid all the overhead of awaiting
        if (!mask) {
            onremove(vnode);
            removeChild(parent, vnode);
        } else {
            if (stateResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 1) {
                        mask &= 2;
                        if (!mask) reallyRemove();
                    }
                };
                stateResult.then(next, next);
            }
            if (attrsResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 2) {
                        mask &= 1;
                        if (!mask) reallyRemove();
                    }
                };
                attrsResult.then(next, next);
            }
        }
        function reallyRemove() {
            checkState(vnode, original);
            onremove(vnode);
            removeChild(parent, vnode);
        }
    }
    function removeHTML(parent, vnode) {
        for(var i = 0; i < vnode.instance.length; i++)parent.removeChild(vnode.instance[i]);
    }
    function removeChild(parent, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") removeHTML(parent, vnode);
            else {
                if (vnode.tag !== "[") {
                    parent.removeChild(vnode.dom);
                    if (!Array.isArray(vnode.children)) break;
                }
                if (vnode.children.length === 1) {
                    vnode = vnode.children[0];
                    if (vnode != null) continue;
                } else for(var i = 0; i < vnode.children.length; i++){
                    var child = vnode.children[i];
                    if (child != null) removeChild(parent, child);
                }
            }
            break;
        }
    }
    function onremove(vnode) {
        if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
        if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
        if (typeof vnode.tag !== "string") {
            if (vnode.instance != null) onremove(vnode.instance);
        } else {
            var children = vnode.children;
            if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null) onremove(child);
            }
        }
    }
    //attrs
    function setAttrs(vnode, attrs, ns) {
        // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
        //
        // Also, the DOM does things to inputs based on the value, so it needs set first.
        // See: https://github.com/MithrilJS/mithril.js/issues/2622
        if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type);
        var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file";
        for(var key in attrs)setAttr(vnode, key, null, attrs[key], ns, isFileInput);
    }
    function setAttr(vnode, key, old, value, ns, isFileInput) {
        if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object" || key === "type" && vnode.tag === "input") return;
        if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value);
        if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        else if (key === "style") updateStyle(vnode.dom, old, value);
        else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
                // Only do the coercion if we're actually going to check the value.
                /* eslint-disable no-implicit-coercion */ //setting input[value] to same value by typing on focused element moves cursor to end in Chrome
                //setting input[type=file][value] to same value causes an error to be generated if it's non-empty
                if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement())) return;
                //setting select[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return;
                //setting option[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return;
                //setting input[type=file][value] to different value is an error if it's non-empty
                // Not ideal, but it at least works around the most common source of uncaught exceptions for now.
                if (isFileInput && "" + value !== "") {
                    console.error("`value` is read-only on file inputs!");
                    return;
                }
            /* eslint-enable no-implicit-coercion */ }
            vnode.dom[key] = value;
        } else if (typeof value === "boolean") {
            if (value) vnode.dom.setAttribute(key, "");
            else vnode.dom.removeAttribute(key);
        } else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
    }
    function removeAttr(vnode, key, old, ns) {
        if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return;
        if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined);
        else if (key === "style") updateStyle(vnode.dom, old, null);
        else if (hasPropertyKey(vnode, key, ns) && key !== "className" && key !== "title" // creates "null" as title
         && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) vnode.dom[key] = null;
        else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
            if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
        }
    }
    function setLateSelectAttrs(vnode, attrs) {
        if ("value" in attrs) {
            if (attrs.value === null) {
                if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
            } else {
                var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
                ;
                if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) vnode.dom.value = normalized;
            }
        }
        if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
    }
    function updateAttrs(vnode, old, attrs, ns) {
        if (old && old === attrs) console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major");
        if (attrs != null) {
            // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
            //
            // Also, the DOM does things to inputs based on the value, so it needs set first.
            // See: https://github.com/MithrilJS/mithril.js/issues/2622
            if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type);
            var isFileInput = vnode.tag === "input" && attrs.type === "file";
            for(var key in attrs)setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput);
        }
        var val;
        if (old != null) {
            for(var key in old)if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) removeAttr(vnode, key, val, ns);
        }
    }
    function isFormAttribute(vnode, attr) {
        return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement;
    }
    function isLifecycleMethod(attr) {
        return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
    }
    function hasPropertyKey(vnode, key, ns) {
        // Filter out namespaced keys
        return ns === undefined && // If it's a custom element, just keep it.
        (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
        key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height" // && key !== "type"
        ) && key in vnode.dom;
    }
    //style
    var uppercaseRegex = /[A-Z]/g;
    function toLowerCase(capital) {
        return "-" + capital.toLowerCase();
    }
    function normalizeKey(key) {
        return key[0] === "-" && key[1] === "-" ? key : key === "cssFloat" ? "float" : key.replace(uppercaseRegex, toLowerCase);
    }
    function updateStyle(element, old, style) {
        if (old === style) ;
        else if (style == null) // New style is missing, just clear it.
        element.style.cssText = "";
        else if (typeof style !== "object") // New style is a string, let engine deal with patching.
        element.style.cssText = style;
        else if (old == null || typeof old !== "object") {
            // `old` is missing or a string, `style` is an object.
            element.style.cssText = "";
            // Add new style properties
            for(var key in style){
                var value = style[key];
                if (value != null) element.style.setProperty(normalizeKey(key), String(value));
            }
        } else {
            // Both old & new are (different) objects.
            // Update style properties that have changed
            for(var key in style){
                var value = style[key];
                if (value != null && (value = String(value)) !== String(old[key])) element.style.setProperty(normalizeKey(key), value);
            }
            // Remove style properties that no longer exist
            for(var key in old)if (old[key] != null && style[key] == null) element.style.removeProperty(normalizeKey(key));
        }
    }
    // Here's an explanation of how this works:
    // 1. The event names are always (by design) prefixed by `on`.
    // 2. The EventListener interface accepts either a function or an object
    //    with a `handleEvent` method.
    // 3. The object does not inherit from `Object.prototype`, to avoid
    //    any potential interference with that (e.g. setters).
    // 4. The event name is remapped to the handler before calling it.
    // 5. In function-based event handlers, `ev.target === this`. We replicate
    //    that below.
    // 6. In function-based event handlers, `return false` prevents the default
    //    action and stops event propagation. We replicate that below.
    function EventDict() {
        // Save this, so the current redraw is correctly tracked.
        this._ = currentRedraw;
    }
    EventDict.prototype = Object.create(null);
    EventDict.prototype.handleEvent = function(ev) {
        var handler = this["on" + ev.type];
        var result;
        if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
        else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
        if (this._ && ev.redraw !== false) (0, this._)();
        if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    //event
    function updateEvent(vnode, key, value) {
        if (vnode.events != null) {
            vnode.events._ = currentRedraw;
            if (vnode.events[key] === value) return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
                if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = value;
            } else {
                if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = undefined;
            }
        } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
        }
    }
    //lifecycle
    function initLifecycle(source, vnode, hooks) {
        if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
        if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
    }
    function updateLifecycle(source, vnode, hooks) {
        if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
    }
    function shouldNotUpdate(vnode, old) {
        do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
                var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
                var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            return false;
        }while (false); // eslint-disable-line no-constant-condition
        vnode.dom = old.dom;
        vnode.domSize = old.domSize;
        vnode.instance = old.instance;
        // One would think having the actual latest attributes would be ideal,
        // but it doesn't let us properly diff based on our current internal
        // representation. We have to save not only the old DOM info, but also
        // the attributes used to create it, as we diff *that*, not against the
        // DOM directly (with a few exceptions in `setAttr`). And, of course, we
        // need to save the children and text as they are conceptually not
        // unlike special "attributes" internally.
        vnode.attrs = old.attrs;
        vnode.children = old.children;
        vnode.text = old.text;
        return true;
    }
    var currentDOM;
    return function(dom, vnodes, redraw) {
        if (!dom) throw new TypeError("DOM element being rendered to does not exist.");
        if (currentDOM != null && dom.contains(currentDOM)) throw new TypeError("Node is currently being rendered to and thus is locked.");
        var prevRedraw = currentRedraw;
        var prevDOM = currentDOM;
        var hooks = [];
        var active = activeElement();
        var namespace = dom.namespaceURI;
        currentDOM = dom;
        currentRedraw = typeof redraw === "function" ? redraw : undefined;
        try {
            // First time rendering into a node clears it out
            if (dom.vnodes == null) dom.textContent = "";
            vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [
                vnodes
            ]);
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
            dom.vnodes = vnodes;
            // `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
            if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus();
            for(var i = 0; i < hooks.length; i++)hooks[i]();
        } finally{
            currentRedraw = prevRedraw;
            currentDOM = prevDOM;
        }
    };
};

},{"8c1a3af9d274e105":"5c56e"}],"8CHiL":[function(require,module,exports) {
"use strict";
var Vnode = require("467dc3c2fbf7fe6a");
module.exports = function(render, schedule, console) {
    var subscriptions = [];
    var pending = false;
    var offset = -1;
    function sync() {
        for(offset = 0; offset < subscriptions.length; offset += 2)try {
            render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw);
        } catch (e) {
            console.error(e);
        }
        offset = -1;
    }
    function redraw() {
        if (!pending) {
            pending = true;
            schedule(function() {
                pending = false;
                sync();
            });
        }
    }
    redraw.sync = sync;
    function mount(root, component) {
        if (component != null && component.view == null && typeof component !== "function") throw new TypeError("m.mount expects a component, not a vnode.");
        var index = subscriptions.indexOf(root);
        if (index >= 0) {
            subscriptions.splice(index, 2);
            if (index <= offset) offset -= 2;
            render(root, []);
        }
        if (component != null) {
            subscriptions.push(root, component);
            render(root, Vnode(component), redraw);
        }
    }
    return {
        mount: mount,
        redraw: redraw
    };
};

},{"467dc3c2fbf7fe6a":"5c56e"}],"8fm7T":[function(require,module,exports) {
"use strict";
var buildPathname = require("8978bad752a3e24e");
var hasOwn = require("68d5fe67225153a7");
module.exports = function($window, Promise, oncompletion) {
    var callbackCount = 0;
    function PromiseProxy(executor) {
        return new Promise(executor);
    }
    // In case the global Promise is some userland library's where they rely on
    // `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
    // similar. Let's *not* break them.
    PromiseProxy.prototype = Promise.prototype;
    PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
    ;
    function makeRequest(factory) {
        return function(url, args) {
            if (typeof url !== "string") {
                args = url;
                url = url.url;
            } else if (args == null) args = {};
            var promise = new Promise(function(resolve, reject) {
                factory(buildPathname(url, args.params), args, function(data) {
                    if (typeof args.type === "function") {
                        if (Array.isArray(data)) for(var i = 0; i < data.length; i++)data[i] = new args.type(data[i]);
                        else data = new args.type(data);
                    }
                    resolve(data);
                }, reject);
            });
            if (args.background === true) return promise;
            var count = 0;
            function complete() {
                if (--count === 0 && typeof oncompletion === "function") oncompletion();
            }
            return wrap(promise);
            function wrap(promise) {
                var then = promise.then;
                // Set the constructor, so engines know to not await or resolve
                // this as a native promise. At the time of writing, this is
                // only necessary for V8, but their behavior is the correct
                // behavior per spec. See this spec issue for more details:
                // https://github.com/tc39/ecma262/issues/1577. Also, see the
                // corresponding comment in `request/tests/test-request.js` for
                // a bit more background on the issue at hand.
                promise.constructor = PromiseProxy;
                promise.then = function() {
                    count++;
                    var next = then.apply(promise, arguments);
                    next.then(complete, function(e) {
                        complete();
                        if (count === 0) throw e;
                    });
                    return wrap(next);
                };
                return promise;
            }
        };
    }
    function hasHeader(args, name) {
        for(var key in args.headers){
            if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true;
        }
        return false;
    }
    return {
        request: makeRequest(function(url, args, resolve, reject) {
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
                aborted = true;
                abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
            if (assumeJSON && body != null && !hasHeader(args, "content-type")) xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) xhr.setRequestHeader("Accept", "application/json, text/*");
            if (args.withCredentials) xhr.withCredentials = args.withCredentials;
            if (args.timeout) xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for(var key in args.headers)if (hasOwn.call(args.headers, key)) xhr.setRequestHeader(key, args.headers[key]);
            xhr.onreadystatechange = function(ev) {
                // Don't throw errors on xhr.abort().
                if (aborted) return;
                if (ev.target.readyState === 4) try {
                    var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                    // When the response type isn't "" or "text",
                    // `xhr.responseText` is the wrong thing to use.
                    // Browsers do the right thing and throw here, and we
                    // should honor that and do the right thing by
                    // preferring `xhr.response` where possible/practical.
                    var response = ev.target.response, message;
                    if (responseType === "json") {
                        // For IE and Edge, which don't implement
                        // `responseType: "json"`.
                        if (!ev.target.responseType && typeof args.extract !== "function") // Handle no-content which will not parse.
                        try {
                            response = JSON.parse(ev.target.responseText);
                        } catch (e) {
                            response = null;
                        }
                    } else if (!responseType || responseType === "text") // Only use this default if it's text. If a parsed
                    // document is needed on old IE and friends (all
                    // unsupported), the user should use a custom
                    // `config` instead. They're already using this at
                    // their own risk.
                    {
                        if (response == null) response = ev.target.responseText;
                    }
                    if (typeof args.extract === "function") {
                        response = args.extract(ev.target, args);
                        success = true;
                    } else if (typeof args.deserialize === "function") response = args.deserialize(response);
                    if (success) resolve(response);
                    else {
                        var completeErrorResponse = function() {
                            try {
                                message = ev.target.responseText;
                            } catch (e) {
                                message = response;
                            }
                            var error = new Error(message);
                            error.code = ev.target.status;
                            error.response = response;
                            reject(error);
                        };
                        if (xhr.status === 0) // Use setTimeout to push this code block onto the event queue
                        // This allows `xhr.ontimeout` to run in the case that there is a timeout
                        // Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
                        // as `xhr.onreadystatechange` will run before it
                        setTimeout(function() {
                            if (isTimeout) return;
                            completeErrorResponse();
                        });
                        else completeErrorResponse();
                    }
                } catch (e) {
                    reject(e);
                }
            };
            xhr.ontimeout = function(ev) {
                isTimeout = true;
                var error = new Error("Request timed out");
                error.code = ev.target.status;
                reject(error);
            };
            if (typeof args.config === "function") {
                xhr = args.config(xhr, args, url) || xhr;
                // Propagate the `abort` to any replacement XHR as well.
                if (xhr !== original) {
                    replacedAbort = xhr.abort;
                    xhr.abort = function() {
                        aborted = true;
                        replacedAbort.call(this);
                    };
                }
            }
            if (body == null) xhr.send();
            else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body);
            else xhr.send(JSON.stringify(body));
        }),
        jsonp: makeRequest(function(url, args, resolve, reject) {
            var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
            var script = $window.document.createElement("script");
            $window[callbackName] = function(data) {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                resolve(data);
            };
            script.onerror = function() {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                reject(new Error("JSONP request failed"));
            };
            script.src = url + (url.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(args.callbackKey || "callback") + "=" + encodeURIComponent(callbackName);
            $window.document.documentElement.appendChild(script);
        })
    };
};

},{"8978bad752a3e24e":"k2dgA","68d5fe67225153a7":"elD1t"}],"k2dgA":[function(require,module,exports) {
"use strict";
var buildQueryString = require("70a4649d20f83b8a");
var assign = require("888e60f1722c8b46");
// Returns `path` from `template` + `params`
module.exports = function(template, params) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(template)) throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
    if (params == null) return template;
    var queryIndex = template.indexOf("?");
    var hashIndex = template.indexOf("#");
    var queryEnd = hashIndex < 0 ? template.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = template.slice(0, pathEnd);
    var query = {};
    assign(query, params);
    var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
        delete query[key];
        // If no such parameter exists, don't interpolate it.
        if (params[key] == null) return m;
        // Escape normal parameters, but not variadic ones.
        return variadic ? params[key] : encodeURIComponent(String(params[key]));
    });
    // In case the template substitution adds new query/hash parameters.
    var newQueryIndex = resolved.indexOf("?");
    var newHashIndex = resolved.indexOf("#");
    var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
    var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
    var result = resolved.slice(0, newPathEnd);
    if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
    if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
    var querystring = buildQueryString(query);
    if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
    if (hashIndex >= 0) result += template.slice(hashIndex);
    if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
    return result;
};

},{"70a4649d20f83b8a":"fbqKb","888e60f1722c8b46":"buAYb"}],"fbqKb":[function(require,module,exports) {
"use strict";
module.exports = function(object) {
    if (Object.prototype.toString.call(object) !== "[object Object]") return "";
    var args = [];
    for(var key in object)destructure(key, object[key]);
    return args.join("&");
    function destructure(key, value) {
        if (Array.isArray(value)) for(var i = 0; i < value.length; i++)destructure(key + "[" + i + "]", value[i]);
        else if (Object.prototype.toString.call(value) === "[object Object]") for(var i in value)destructure(key + "[" + i + "]", value[i]);
        else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
    }
};

},{}],"buAYb":[function(require,module,exports) {
// This exists so I'm only saving it once.
"use strict";
var hasOwn = require("658fcf17ed001102");
module.exports = Object.assign || function(target, source) {
    for(var key in source)if (hasOwn.call(source, key)) target[key] = source[key];
};

},{"658fcf17ed001102":"elD1t"}],"4SNaV":[function(require,module,exports) {
"use strict";
var mountRedraw = require("4fdedb338340a3f3");
module.exports = require("9c1b8b10412e09b2")(typeof window !== "undefined" ? window : null, mountRedraw);

},{"4fdedb338340a3f3":"jh7iq","9c1b8b10412e09b2":"iaKFj"}],"iaKFj":[function(require,module,exports) {
"use strict";
var Vnode = require("68465c675053e055");
var m = require("adb1374fbd62ddb4");
var Promise = require("dd5e4296bf8c58a8");
var buildPathname = require("f15df7f3b1724444");
var parsePathname = require("730e93a5d59ec1d9");
var compileTemplate = require("829227ed273d4a02");
var assign = require("bc482b3d75b86f47");
var censor = require("ba0f83b8edd5bfe2");
var sentinel = {};
function decodeURIComponentSave(component) {
    try {
        return decodeURIComponent(component);
    } catch (e) {
        return component;
    }
}
module.exports = function($window, mountRedraw) {
    var callAsync = $window == null ? null : typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout;
    var p = Promise.resolve();
    var scheduled = false;
    // state === 0: init
    // state === 1: scheduled
    // state === 2: done
    var ready = false;
    var state = 0;
    var compiled, fallbackRoute;
    var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
    var RouterRoot = {
        onbeforeupdate: function() {
            state = state ? 2 : 1;
            return !(!state || sentinel === currentResolver);
        },
        onremove: function() {
            $window.removeEventListener("popstate", fireAsync, false);
            $window.removeEventListener("hashchange", resolveRoute, false);
        },
        view: function() {
            if (!state || sentinel === currentResolver) return;
            // Wrap in a fragment to preserve existing key semantics
            var vnode = [
                Vnode(component, attrs.key, attrs)
            ];
            if (currentResolver) vnode = currentResolver.render(vnode[0]);
            return vnode;
        }
    };
    var SKIP = route.SKIP = {};
    function resolveRoute() {
        scheduled = false;
        // Consider the pathname holistically. The prefix might even be invalid,
        // but that's not our problem.
        var prefix = $window.location.hash;
        if (route.prefix[0] !== "#") {
            prefix = $window.location.search + prefix;
            if (route.prefix[0] !== "?") {
                prefix = $window.location.pathname + prefix;
                if (prefix[0] !== "/") prefix = "/" + prefix;
            }
        }
        // This seemingly useless `.concat()` speeds up the tests quite a bit,
        // since the representation is consistently a relatively poorly
        // optimized cons string.
        var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave).slice(route.prefix.length);
        var data = parsePathname(path);
        assign(data.params, $window.history.state);
        function reject(e) {
            console.error(e);
            setPath(fallbackRoute, null, {
                replace: true
            });
        }
        loop(0);
        function loop(i) {
            // state === 0: init
            // state === 1: scheduled
            // state === 2: done
            for(; i < compiled.length; i++)if (compiled[i].check(data)) {
                var payload = compiled[i].component;
                var matchedRoute = compiled[i].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                    if (update !== lastUpdate) return;
                    if (comp === SKIP) return loop(i + 1);
                    component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                    attrs = data.params, currentPath = path, lastUpdate = null;
                    currentResolver = payload.render ? payload : null;
                    if (state === 2) mountRedraw.redraw();
                    else {
                        state = 2;
                        mountRedraw.redraw.sync();
                    }
                };
                // There's no understating how much I *wish* I could
                // use `async`/`await` here...
                if (payload.view || typeof payload === "function") {
                    payload = {};
                    update(localComp);
                } else if (payload.onmatch) p.then(function() {
                    return payload.onmatch(data.params, path, matchedRoute);
                }).then(update, path === fallbackRoute ? null : reject);
                else update("div");
                return;
            }
            if (path === fallbackRoute) throw new Error("Could not resolve default route " + fallbackRoute + ".");
            setPath(fallbackRoute, null, {
                replace: true
            });
        }
    }
    // Set it unconditionally so `m.route.set` and `m.route.Link` both work,
    // even if neither `pushState` nor `hashchange` are supported. It's
    // cleared if `hashchange` is used, since that makes it automatically
    // async.
    function fireAsync() {
        if (!scheduled) {
            scheduled = true;
            // TODO: just do `mountRedraw.redraw()` here and elide the timer
            // dependency. Note that this will muck with tests a *lot*, so it's
            // not as easy of a change as it sounds.
            callAsync(resolveRoute);
        }
    }
    function setPath(path, data, options) {
        path = buildPathname(path, data);
        if (ready) {
            fireAsync();
            var state = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path);
            else $window.history.pushState(state, title, route.prefix + path);
        } else $window.location.href = route.prefix + path;
    }
    function route(root, defaultRoute, routes) {
        if (!root) throw new TypeError("DOM element being rendered to does not exist.");
        compiled = Object.keys(routes).map(function(route) {
            if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route)) throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
            return {
                route: route,
                component: routes[route],
                check: compileTemplate(route)
            };
        });
        fallbackRoute = defaultRoute;
        if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
                return i.check(defaultData);
            })) throw new ReferenceError("Default route doesn't match any known routes.");
        }
        if (typeof $window.history.pushState === "function") $window.addEventListener("popstate", fireAsync, false);
        else if (route.prefix[0] === "#") $window.addEventListener("hashchange", resolveRoute, false);
        ready = true;
        mountRedraw.mount(root, RouterRoot);
        resolveRoute();
    }
    route.set = function(path, data, options) {
        if (lastUpdate != null) {
            options = options || {};
            options.replace = true;
        }
        lastUpdate = null;
        setPath(path, data, options);
    };
    route.get = function() {
        return currentPath;
    };
    route.prefix = "#!";
    route.Link = {
        view: function(vnode) {
            // Omit the used parameters from the rendered element - they are
            // internal. Also, censor the various lifecycle methods.
            //
            // We don't strip the other parameters because for convenience we
            // let them be specified in the selector as well.
            var child = m(vnode.attrs.selector || "a", censor(vnode.attrs, [
                "options",
                "params",
                "selector",
                "onclick"
            ]), vnode.children);
            var options, onclick, href;
            // Let's provide a *right* way to disable a route link, rather than
            // letting people screw up accessibility on accident.
            //
            // The attribute is coerced so users don't get surprised over
            // `disabled: 0` resulting in a button that's somehow routable
            // despite being visibly disabled.
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
                child.attrs.href = null;
                child.attrs["aria-disabled"] = "true";
            // If you *really* do want add `onclick` on a disabled link, use
            // an `oncreate` hook to add it.
            } else {
                options = vnode.attrs.options;
                onclick = vnode.attrs.onclick;
                // Easier to build it now to keep it isomorphic.
                href = buildPathname(child.attrs.href, vnode.attrs.params);
                child.attrs.href = route.prefix + href;
                child.attrs.onclick = function(e) {
                    var result;
                    if (typeof onclick === "function") result = onclick.call(e.currentTarget, e);
                    else if (onclick == null || typeof onclick !== "object") ;
                    else if (typeof onclick.handleEvent === "function") onclick.handleEvent(e);
                    // Adapted from React Router's implementation:
                    // https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
                    //
                    // Try to be flexible and intuitive in how we handle links.
                    // Fun fact: links aren't as obvious to get right as you
                    // would expect. There's a lot more valid ways to click a
                    // link than this, and one might want to not simply click a
                    // link, but right click or command-click it to copy the
                    // link target, etc. Nope, this isn't just for blind people.
                    if (// Skip if `onclick` prevented default
                    result !== false && !e.defaultPrevented && // Ignore everything but left clicks
                    (e.button === 0 || e.which === 0 || e.which === 1) && // Let the browser handle `target=_blank`, etc.
                    (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        e.redraw = false;
                        route.set(href, null, options);
                    }
                };
            }
            return child;
        }
    };
    route.param = function(key) {
        return attrs && key != null ? attrs[key] : attrs;
    };
    return route;
};

},{"68465c675053e055":"5c56e","adb1374fbd62ddb4":"js0vQ","dd5e4296bf8c58a8":"298EJ","f15df7f3b1724444":"k2dgA","730e93a5d59ec1d9":"jK2nr","829227ed273d4a02":"cVcAy","bc482b3d75b86f47":"buAYb","ba0f83b8edd5bfe2":"4snGY"}],"jK2nr":[function(require,module,exports) {
"use strict";
var parseQueryString = require("8660a02beda9c833");
// Returns `{path, params}` from `url`
module.exports = function(url) {
    var queryIndex = url.indexOf("?");
    var hashIndex = url.indexOf("#");
    var queryEnd = hashIndex < 0 ? url.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
    if (!path) path = "/";
    else {
        if (path[0] !== "/") path = "/" + path;
        if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1);
    }
    return {
        path: path,
        params: queryIndex < 0 ? {} : parseQueryString(url.slice(queryIndex + 1, queryEnd))
    };
};

},{"8660a02beda9c833":"ZeRxY"}],"ZeRxY":[function(require,module,exports) {
"use strict";
function decodeURIComponentSave(str) {
    try {
        return decodeURIComponent(str);
    } catch (err) {
        return str;
    }
}
module.exports = function(string) {
    if (string === "" || string == null) return {};
    if (string.charAt(0) === "?") string = string.slice(1);
    var entries = string.split("&"), counters = {}, data = {};
    for(var i = 0; i < entries.length; i++){
        var entry = entries[i].split("=");
        var key = decodeURIComponentSave(entry[0]);
        var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : "";
        if (value === "true") value = true;
        else if (value === "false") value = false;
        var levels = key.split(/\]\[?|\[/);
        var cursor = data;
        if (key.indexOf("[") > -1) levels.pop();
        for(var j = 0; j < levels.length; j++){
            var level = levels[j], nextLevel = levels[j + 1];
            var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
                var key = levels.slice(0, j).join();
                if (counters[key] == null) counters[key] = Array.isArray(cursor) ? cursor.length : 0;
                level = counters[key]++;
            } else if (level === "__proto__") break;
            if (j === levels.length - 1) cursor[level] = value;
            else {
                // Read own properties exclusively to disallow indirect
                // prototype pollution
                var desc = Object.getOwnPropertyDescriptor(cursor, level);
                if (desc != null) desc = desc.value;
                if (desc == null) cursor[level] = desc = isNumber ? [] : {};
                cursor = desc;
            }
        }
    }
    return data;
};

},{}],"cVcAy":[function(require,module,exports) {
"use strict";
var parsePathname = require("738f895382d52b2b");
// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
    var templateData = parsePathname(template);
    var templateKeys = Object.keys(templateData.params);
    var keys = [];
    var regexp = new RegExp("^" + templateData.path.replace(// I escape literal text so people can use things like `:file.:ext` or
    // `:lang-:locale` in routes. This is all merged into one pass so I
    // don't also accidentally escape `-` and make it harder to detect it to
    // ban it from template parameters.
    /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m, key, extra) {
        if (key == null) return "\\" + m;
        keys.push({
            k: key,
            r: extra === "..."
        });
        if (extra === "...") return "(.*)";
        if (extra === ".") return "([^/]+)\\.";
        return "([^/]+)" + (extra || "");
    }) + "$");
    return function(data) {
        // First, check the params. Usually, there isn't any, and it's just
        // checking a static set.
        for(var i = 0; i < templateKeys.length; i++){
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;
        }
        // If no interpolations exist, let's skip all the ceremony
        if (!keys.length) return regexp.test(data.path);
        var values = regexp.exec(data.path);
        if (values == null) return false;
        for(var i = 0; i < keys.length; i++)data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
        return true;
    };
};

},{"738f895382d52b2b":"jK2nr"}],"4snGY":[function(require,module,exports) {
"use strict";
// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```
var hasOwn = require("ea1ad0c0d427959");
// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().
var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
module.exports = function(attrs, extras) {
    var result = {};
    if (extras != null) {
        for(var key in attrs)if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) result[key] = attrs[key];
    } else {
        for(var key in attrs)if (hasOwn.call(attrs, key) && !magic.test(key)) result[key] = attrs[key];
    }
    return result;
};

},{"ea1ad0c0d427959":"elD1t"}],"3jIkr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _controlButtons = require("./ControlButtons");
var _controlButtonsDefault = parcelHelpers.interopDefault(_controlButtons);
var _modal = require("./Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _gameEndContent = require("./GameEndContent");
var _gameEndContentDefault = parcelHelpers.interopDefault(_gameEndContent);
var _helpContent = require("./HelpContent");
var _helpContentDefault = parcelHelpers.interopDefault(_helpContent);
var _keyboard = require("./Keyboard");
var _keyboardDefault = parcelHelpers.interopDefault(_keyboard);
var _row = require("./Row");
var _rowDefault = parcelHelpers.interopDefault(_row);
var _util = require("../Util");
var _utilDefault = parcelHelpers.interopDefault(_util);
class MainPage {
    static #_ = this.MAX_ROWS = 6;
    static #_1 = this.HELP_ICON = `<svg width="80px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z" fill="#5C5F62"/></svg>`;
    constructor(){
        // Init components
        this.keyboard = new (0, _keyboardDefault.default)(this.setValue.bind(this));
        this.controlButtons = new (0, _controlButtonsDefault.default)(this.onEnter.bind(this), this.onBackspace.bind(this));
        const scaleNumber = Number((0, _mithrilDefault.default).route.param("id"));
        this.reset(Number.isInteger(scaleNumber) ? scaleNumber : null);
        this.modal = new (0, _modalDefault.default)(this.closeModal.bind(this));
        // Debug
        window.M = this;
    }
    reset(scaleNumber = null) {
        this.rows = new Array(MainPage.MAX_ROWS).fill().map(()=>new (0, _rowDefault.default)());
        this.isFinished = false;
        this.currentRowIndex = 0;
        this.scaleNumber = scaleNumber === null ? (0, _utilDefault.default).getRandomScaleNumber() : scaleNumber;
        this.answerScale = (0, _utilDefault.default).getScaleByNumber(this.scaleNumber);
        this.modalContent = null;
        (0, _mithrilDefault.default).redraw();
    }
    openHelpModal() {
        this.modalContent = (0, _helpContentDefault.default);
    }
    openEndGameModal() {
        // Add delay to show animation
        window.setTimeout(()=>{
            this.modalContent = new (0, _gameEndContentDefault.default)(this.reset.bind(this), this.answerScale.name, this.getShareable());
            (0, _mithrilDefault.default).redraw();
        }, 2500);
    }
    closeModal() {
        this.modalContent = null;
    }
    onEnter() {
        if (this.isFinished) return;
        if (!this.currentRow().isFilled()) return;
        this.submitGuess();
    }
    onBackspace() {
        if (this.isFinished) return;
        this.currentRow().clearLast();
    }
    currentRow() {
        return this.rows[this.currentRowIndex];
    }
    getShareable() {
        const rows = this.rows.slice(0, this.currentRowIndex);
        const fullResults = rows.map((row)=>row.compareWithAnswer(this.answerScale));
        return (0, _utilDefault.default).resultsToShareable(fullResults, this.scaleNumber);
    }
    submitGuess() {
        const results = this.currentRow().compareWithAnswer(this.answerScale);
        this.currentRow().displayResults(results);
        this.currentRowIndex++;
        (0, _mithrilDefault.default).redraw();
        if (results.every((x)=>x === "C")) {
            this.isFinished = true;
            this.openEndGameModal();
        } else if (this.currentRowIndex >= MainPage.MAX_ROWS) {
            this.isFinished = true;
            this.openEndGameModal();
        }
    }
    setValue(value) {
        if (this.isFinished) return;
        this.currentRow().setValue(value);
        (0, _mithrilDefault.default).redraw();
    }
    view() {
        return [
            (0, _mithrilDefault.default)("div#nav", [
                (0, _mithrilDefault.default)("h1", "Scale-dle"),
                (0, _mithrilDefault.default)("div#help", {
                    onclick: ()=>{
                        this.openHelpModal();
                    }
                }, (0, _mithrilDefault.default).trust(MainPage.HELP_ICON))
            ]),
            this.modalContent ? (0, _mithrilDefault.default)(this.modal, (0, _mithrilDefault.default)(this.modalContent)) : null,
            (0, _mithrilDefault.default)("div.grid", this.rows.map((row)=>(0, _mithrilDefault.default)(row))),
            (0, _mithrilDefault.default)(this.controlButtons),
            (0, _mithrilDefault.default)(this.keyboard)
        ];
    }
}
exports.default = MainPage;

},{"mithril":"1zcoP","./ControlButtons":"ekgeK","./Modal":"iKMno","./GameEndContent":"koUi1","./HelpContent":"eGBM6","./Keyboard":"80DYI","./Row":"wMjtY","../Util":"fkKci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekgeK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
class ControlButtons {
    constructor(onEnter, onBackspace){
        this.onEnter = onEnter;
        this.onBackspace = onBackspace;
    }
    view() {
        return (0, _mithrilDefault.default)("div#control", [
            (0, _mithrilDefault.default)("div.button", {
                onclick: this.onEnter
            }, "enter"),
            (0, _mithrilDefault.default)("div.button", {
                onclick: this.onBackspace
            }, "\u232B")
        ]);
    }
}
exports.default = ControlButtons;

},{"mithril":"1zcoP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iKMno":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
class Modal {
    constructor(onclose){
        this.onclose = onclose;
    }
    view(vnode) {
        return (0, _mithrilDefault.default)("div.modal", [
            (0, _mithrilDefault.default)("span.close", {
                onclick: this.onclose
            }, "X"),
            (0, _mithrilDefault.default)("div.content", vnode.children)
        ]);
    }
}
exports.default = Modal;

},{"mithril":"1zcoP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"koUi1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _util = require("../Util");
var _utilDefault = parcelHelpers.interopDefault(_util);
class GameEndContent {
    static #_ = this.SHARE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 30 30"> <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path></svg>`;
    constructor(onreset, answerScaleName, shareable){
        this.onreset = onreset;
        this.answerScaleName = answerScaleName;
        this.shareable = shareable;
    }
    async onshare() {
        await navigator.clipboard.writeText(this.shareable);
    }
    view() {
        return [
            (0, _mithrilDefault.default)("h1", (0, _utilDefault.default).normalizeScaleName(this.answerScaleName)),
            (0, _mithrilDefault.default)("div.button", {
                onclick: this.onshare.bind(this)
            }, [
                (0, _mithrilDefault.default)("span.share", "Share"),
                (0, _mithrilDefault.default).trust(GameEndContent.SHARE_ICON)
            ]),
            (0, _mithrilDefault.default)("div.button", {
                onclick: ()=>{
                    this.onreset();
                }
            }, "Next Scale-dle!")
        ];
    }
}
exports.default = GameEndContent;

},{"mithril":"1zcoP","../Util":"fkKci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkKci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tonal = require("tonal");
class Util {
    static #_ = this.SCALE_TYPES = [
        "major",
        "minor",
        "harmonic minor",
        "melodic minor",
        "dorian",
        "phrygian",
        "lydian",
        "mixolydian",
        "locrian",
        "pentatonic",
        "whole-half diminished",
        "half-whole diminished"
    ];
    static #_1 = this.ROOTS = [
        "A",
        "Bb",
        "B",
        "C",
        "C#",
        "D",
        "Eb",
        "E",
        "F",
        "F#",
        "G",
        "Ab"
    ];
    static #_2 = this.BLACK_NOTES = [
        "C#",
        "D#",
        "F#",
        "G#",
        "A#"
    ];
    static #_3 = this.BLACK_NOTES_FLAT = [
        "Db",
        "Eb",
        "Gb",
        "Ab",
        "Bb"
    ];
    static #_4 = this.WHITE_NOTES = [
        "C",
        "D",
        "E",
        "F",
        "G",
        "A",
        "B"
    ];
    static getRandomScaleNumber() {
        // TODO: use the proper algorithm rather than assuming 12 roots and scale types
        return Math.floor(Math.random() * 144);
    }
    static getScaleByNumber(i) {
        // TODO: use the proper algorithm rather than assuming 12 roots and scale types
        const root = this.ROOTS[i % 12];
        const scaleType = this.SCALE_TYPES[Math.floor(i / 12)];
        const octave = 5; // Doesn't really matter
        return (0, _tonal.Scale).get(`${root}${octave} ${scaleType}`);
    }
    // Get midi array
    static toMidiArray(notes) {
        return notes.map((noteName)=>(0, _tonal.Note).get(noteName).midi % 12);
    }
    // Returns an array of results:
    // "C": correct,
    // "W": wrong spot,
    // "X": does not exist
    static calculateGuess(guess, rawAnswer) {
        // Normalize correct to be same length as guess
        const answer = rawAnswer.concat(rawAnswer).slice(0, guess.length);
        // Make map of answer to track note usage
        const answerMap = {};
        answer.forEach((note)=>{
            if (!(note in answerMap)) answerMap[note] = 0;
            answerMap[note]++;
        });
        const result = Array(guess.length);
        // First pass to find correct notes
        guess.forEach((note, i)=>{
            if (note === answer[i]) {
                result[i] = "C";
                answerMap[note]--;
            }
        });
        // Second pass to figure out the other results
        guess.forEach((note, i)=>{
            if (result[i] === "C") return;
            if (answerMap[note]) {
                result[i] = "W";
                answerMap[note]--;
            } else result[i] = "X";
        });
        return result;
    }
    static #_5 = this.EMOJI_MAP = {
        "C": "\uD83D\uDFE9",
        "W": "\uD83D\uDFE8",
        "X": "\u2B1B"
    };
    static #_6 = this.URL = "seanyeh.github.io/scaledle";
    static resultsToShareable(resultsList, puzzleNumber) {
        const tries = resultsList.length;
        const resultsStr = resultsList.map((results)=>`${results.map((x)=>Util.EMOJI_MAP[x]).join("")}\n`).join("");
        return `Scale-dle #${puzzleNumber} ${tries}/6\n${resultsStr}\n${Util.URL}`;
    }
    static normalizeScaleName(scaleName) {
        // Remove octave from name
        let newName = scaleName.replace(/[0-9]/, "");
        // Rename diminished scales to octatonic
        if (newName.includes("half-whole diminished")) newName = newName.replace("half-whole diminished", "octatonic (half-whole)");
        else if (newName.includes("diminished")) newName = newName.replace("diminished", "octatonic (whole-half)");
        return newName;
    }
}
exports.default = Util;

},{"tonal":"h8GkW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8GkW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbcNotation", ()=>(0, _abcNotationDefault.default));
parcelHelpers.export(exports, "Array", ()=>_array);
parcelHelpers.export(exports, "Chord", ()=>(0, _chordDefault.default));
parcelHelpers.export(exports, "ChordDictionary", ()=>ChordDictionary);
parcelHelpers.export(exports, "ChordType", ()=>(0, _chordTypeDefault.default));
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionDefault.default));
parcelHelpers.export(exports, "Core", ()=>_core);
parcelHelpers.export(exports, "DurationValue", ()=>(0, _durationValueDefault.default));
parcelHelpers.export(exports, "Interval", ()=>(0, _intervalDefault.default));
parcelHelpers.export(exports, "Key", ()=>(0, _keyDefault.default));
parcelHelpers.export(exports, "Midi", ()=>(0, _midiDefault.default));
parcelHelpers.export(exports, "Mode", ()=>(0, _modeDefault.default));
parcelHelpers.export(exports, "Note", ()=>(0, _noteDefault.default));
parcelHelpers.export(exports, "PcSet", ()=>PcSet);
parcelHelpers.export(exports, "Pcset", ()=>(0, _pcsetDefault.default));
parcelHelpers.export(exports, "Progression", ()=>(0, _progressionDefault.default));
parcelHelpers.export(exports, "Range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "RomanNumeral", ()=>(0, _romanNumeralDefault.default));
parcelHelpers.export(exports, "Scale", ()=>(0, _scaleDefault.default));
parcelHelpers.export(exports, "ScaleDictionary", ()=>ScaleDictionary);
parcelHelpers.export(exports, "ScaleType", ()=>(0, _scaleTypeDefault.default));
parcelHelpers.export(exports, "TimeSignature", ()=>(0, _timeSignatureDefault.default));
parcelHelpers.export(exports, "Tonal", ()=>Tonal);
var _abcNotation = require("@tonaljs/abc-notation");
var _abcNotationDefault = parcelHelpers.interopDefault(_abcNotation);
var _array = require("@tonaljs/array");
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
var _chordType = require("@tonaljs/chord-type");
var _chordTypeDefault = parcelHelpers.interopDefault(_chordType);
var _collection = require("@tonaljs/collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
var _core = require("@tonaljs/core");
var _durationValue = require("@tonaljs/duration-value");
var _durationValueDefault = parcelHelpers.interopDefault(_durationValue);
var _interval = require("@tonaljs/interval");
var _intervalDefault = parcelHelpers.interopDefault(_interval);
var _key = require("@tonaljs/key");
var _keyDefault = parcelHelpers.interopDefault(_key);
var _midi = require("@tonaljs/midi");
var _midiDefault = parcelHelpers.interopDefault(_midi);
var _mode = require("@tonaljs/mode");
var _modeDefault = parcelHelpers.interopDefault(_mode);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var _pcset = require("@tonaljs/pcset");
var _pcsetDefault = parcelHelpers.interopDefault(_pcset);
var _progression = require("@tonaljs/progression");
var _progressionDefault = parcelHelpers.interopDefault(_progression);
var _range = require("@tonaljs/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _romanNumeral = require("@tonaljs/roman-numeral");
var _romanNumeralDefault = parcelHelpers.interopDefault(_romanNumeral);
var _scale = require("@tonaljs/scale");
var _scaleDefault = parcelHelpers.interopDefault(_scale);
var _scaleType = require("@tonaljs/scale-type");
var _scaleTypeDefault = parcelHelpers.interopDefault(_scaleType);
var _timeSignature = require("@tonaljs/time-signature");
var _timeSignatureDefault = parcelHelpers.interopDefault(_timeSignature);
parcelHelpers.exportAll(_core, exports);
var Tonal = _core;
var PcSet = (0, _pcsetDefault.default);
var ChordDictionary = (0, _chordTypeDefault.default);
var ScaleDictionary = (0, _scaleTypeDefault.default);

},{"@tonaljs/abc-notation":"drQEU","@tonaljs/array":"3k8ea","@tonaljs/chord":"6ncZZ","@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/duration-value":"9nkSn","@tonaljs/interval":"2nbRQ","@tonaljs/key":"iUI0Q","@tonaljs/midi":"3mmFz","@tonaljs/mode":"aVKRW","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/progression":"4YROa","@tonaljs/range":"8Q44U","@tonaljs/roman-numeral":"8RLpa","@tonaljs/scale":"cecAp","@tonaljs/scale-type":"eRJbX","@tonaljs/time-signature":"lbySg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drQEU":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abcToScientificNotation", ()=>abcToScientificNotation);
parcelHelpers.export(exports, "default", ()=>abc_notation_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "scientificToAbcNotation", ()=>scientificToAbcNotation);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _core = require("@tonaljs/core");
var fillStr = (character, times)=>Array(times + 1).join(character);
var REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function tokenize(str) {
    const m = REGEX.exec(str);
    if (!m) return [
        "",
        "",
        ""
    ];
    return [
        m[1],
        m[2],
        m[3]
    ];
}
function abcToScientificNotation(str) {
    const [acc, letter, oct] = tokenize(str);
    if (letter === "") return "";
    let o = 4;
    for(let i = 0; i < oct.length; i++)o += oct.charAt(i) === "," ? -1 : 1;
    const a = acc[0] === "_" ? acc.replace(/_/g, "b") : acc[0] === "^" ? acc.replace(/\^/g, "#") : "";
    return letter.charCodeAt(0) > 96 ? letter.toUpperCase() + a + (o + 1) : letter + a + o;
}
function scientificToAbcNotation(str) {
    const n = (0, _core.note)(str);
    if (n.empty || !n.oct && n.oct !== 0) return "";
    const { letter, acc, oct } = n;
    const a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
    const l = oct > 4 ? letter.toLowerCase() : letter;
    const o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
    return a + l + o;
}
function transpose(note2, interval) {
    return scientificToAbcNotation((0, _core.transpose)(abcToScientificNotation(note2), interval));
}
function distance(from, to) {
    return (0, _core.distance)(abcToScientificNotation(from), abcToScientificNotation(to));
}
var abc_notation_default = {
    abcToScientificNotation,
    scientificToAbcNotation,
    tokenize,
    transpose,
    distance
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Dyc":[function(require,module,exports) {
// src/utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accToAlt", ()=>accToAlt);
parcelHelpers.export(exports, "altToAcc", ()=>altToAcc);
parcelHelpers.export(exports, "coordToInterval", ()=>coordToInterval);
parcelHelpers.export(exports, "coordToNote", ()=>coordToNote);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "fillStr", ()=>fillStr);
parcelHelpers.export(exports, "interval", ()=>interval);
parcelHelpers.export(exports, "isNamed", ()=>isNamed);
parcelHelpers.export(exports, "isPitch", ()=>isPitch);
parcelHelpers.export(exports, "note", ()=>note);
parcelHelpers.export(exports, "stepToLetter", ()=>stepToLetter);
parcelHelpers.export(exports, "tokenizeInterval", ()=>tokenizeInterval);
parcelHelpers.export(exports, "tokenizeNote", ()=>tokenizeNote);
parcelHelpers.export(exports, "tonicIntervalsTransposer", ()=>tonicIntervalsTransposer);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
function deprecate(original, alternative, fn) {
    return function(...args) {
        console.warn(`${original} is deprecated. Use ${alternative}.`);
        return fn.apply(this, args);
    };
}
// src/named.ts
function isNamed(src) {
    return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
}
// src/pitch.ts
function isPitch(pitch) {
    return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
}
var FIFTHS = [
    0,
    2,
    4,
    -1,
    1,
    3,
    5
];
var STEPS_TO_OCTS = FIFTHS.map((fifths)=>Math.floor(fifths * 7 / 12));
function encode(pitch) {
    const { step, alt, oct, dir = 1 } = pitch;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === void 0) return [
        dir * f
    ];
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [
        dir * f,
        dir * o
    ];
}
var FIFTHS_TO_STEPS = [
    3,
    0,
    4,
    1,
    5,
    2,
    6
];
function decode(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === void 0) return {
        step,
        alt,
        dir
    };
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return {
        step,
        alt,
        oct,
        dir
    };
}
function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
}
// src/note.ts
var NoNote = {
    empty: true,
    name: "",
    pc: "",
    acc: ""
};
var cache = /* @__PURE__ */ new Map();
var stepToLetter = (step)=>"CDEFGAB".charAt(step);
var altToAcc = (alt)=>alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
var accToAlt = (acc)=>acc[0] === "b" ? -acc.length : acc.length;
function note(src) {
    const stringSrc = JSON.stringify(src);
    const cached = cache.get(stringSrc);
    if (cached) return cached;
    const value = typeof src === "string" ? parse(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
    cache.set(stringSrc, value);
    return value;
}
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenizeNote(str) {
    const m = REGEX.exec(str);
    return [
        m[1].toUpperCase(),
        m[2].replace(/x/g, "##"),
        m[3],
        m[4]
    ];
}
function coordToNote(noteCoord) {
    return note(decode(noteCoord));
}
var mod = (n, m)=>(n % m + m) % m;
var SEMI = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
function parse(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") return NoNote;
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : void 0;
    const coord = encode({
        step,
        alt,
        oct
    });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma = (SEMI[step] + alt + 120) % 12;
    const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 1188 : SEMI[step] + alt + 12 * (oct + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
    };
}
function pitchName(props) {
    const { step, alt, oct } = props;
    const letter = stepToLetter(step);
    if (!letter) return "";
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
}
// src/interval.ts
var NoInterval = {
    empty: true,
    name: "",
    acc: ""
};
var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX2 = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
function tokenizeInterval(str) {
    const m = REGEX2.exec(`${str}`);
    if (m === null) return [
        "",
        ""
    ];
    return m[1] ? [
        m[1],
        m[2]
    ] : [
        m[4],
        m[3]
    ];
}
var cache2 = {};
function interval(src) {
    return typeof src === "string" ? cache2[src] || (cache2[src] = parse2(src)) : isPitch(src) ? interval(pitchName2(src)) : isNamed(src) ? interval(src.name) : NoInterval;
}
var SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
var TYPES = "PMMPPMM";
function parse2(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") return NoInterval;
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") return NoInterval;
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = encode({
        step,
        alt,
        oct,
        dir
    });
    return {
        empty: false,
        name,
        num,
        q,
        step,
        alt,
        dir,
        type,
        simple,
        semitones,
        chroma,
        coord,
        oct
    };
}
function coordToInterval(coord, forceDescending) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = forceDescending || isDescending ? [
        -f,
        -o,
        -1
    ] : [
        f,
        o,
        1
    ];
    return interval(decode(ivl));
}
function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
function pitchName2(props) {
    const { step, alt, oct = 0, dir } = props;
    if (!dir) return "";
    const calcNum = step + 1 + 7 * oct;
    const num = calcNum === 0 ? step + 1 : calcNum;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
}
function altToQ(type, alt) {
    if (alt === 0) return type === "majorable" ? "M" : "P";
    else if (alt === -1 && type === "majorable") return "m";
    else if (alt > 0) return fillStr("A", alt);
    else return fillStr("d", type === "perfectable" ? alt : alt + 1);
}
// src/distance.ts
function transpose(noteName, intervalName) {
    const note2 = note(noteName);
    const intervalCoord = Array.isArray(intervalName) ? intervalName : interval(intervalName).coord;
    if (note2.empty || !intervalCoord || intervalCoord.length < 2) return "";
    const noteCoord = note2.coord;
    const tr = noteCoord.length === 1 ? [
        noteCoord[0] + intervalCoord[0]
    ] : [
        noteCoord[0] + intervalCoord[0],
        noteCoord[1] + intervalCoord[1]
    ];
    return coordToNote(tr).name;
}
function tonicIntervalsTransposer(intervals, tonic) {
    const len = intervals.length;
    return (normalized)=>{
        if (!tonic) return "";
        const index = normalized < 0 ? (len - -normalized % len) % len : normalized % len;
        const octaves = Math.floor(normalized / len);
        const root = transpose(tonic, [
            0,
            octaves
        ]);
        return transpose(root, intervals[index]);
    };
}
function distance(fromNote, toNote) {
    const from = note(fromNote);
    const to = note(toNote);
    if (from.empty || to.empty) return "";
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    const forceDescending = to.height === from.height && to.midi !== null && from.midi !== null && from.step > to.step;
    return coordToInterval([
        fifths,
        octs
    ], forceDescending).name;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3k8ea":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "sortedNoteNames", ()=>sortedNoteNames);
parcelHelpers.export(exports, "sortedUniqNoteNames", ()=>sortedUniqNoteNames);
var _core = require("@tonaljs/core");
var isArray = Array.isArray;
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function sortedNoteNames(notes) {
    const valid = notes.map((n)=>(0, _core.note)(n)).filter((n)=>!n.empty);
    return valid.sort((a, b)=>a.height - b.height).map((n)=>n.name);
}
function sortedUniqNoteNames(arr) {
    return sortedNoteNames(arr).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ncZZ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chord", ()=>chord);
parcelHelpers.export(exports, "chordScales", ()=>chordScales);
parcelHelpers.export(exports, "default", ()=>chord_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>(0, _chordDetect.detect));
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getChord", ()=>getChord);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _chordDetect = require("@tonaljs/chord-detect");
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
function tokenize(name) {
    const [letter, acc, oct, type] = (0, _core.tokenizeNote)(name);
    if (letter === "") return [
        "",
        name
    ];
    if (letter === "A" && type === "ug") return [
        "",
        "aug"
    ];
    return [
        letter + acc,
        oct + type
    ];
}
function get(src) {
    if (src === "") return NoChord;
    if (Array.isArray(src) && src.length === 2) return getChord(src[1], src[0]);
    else {
        const [tonic, type] = tokenize(src);
        const chord2 = getChord(type, tonic);
        return chord2.empty ? getChord(src) : chord2;
    }
}
function getChord(typeName, optionalTonic, optionalRoot) {
    const type = (0, _chordType.get)(typeName);
    const tonic = (0, _core.note)(optionalTonic || "");
    const root = (0, _core.note)(optionalRoot || "");
    if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) return NoChord;
    const rootInterval = (0, _core.distance)(tonic.pc, root.pc);
    const rootDegree = type.intervals.indexOf(rootInterval) + 1;
    if (!root.empty && !rootDegree) return NoChord;
    const intervals = Array.from(type.intervals);
    for(let i = 1; i < rootDegree; i++){
        const num = intervals[0][0];
        const quality = intervals[0][1];
        const newNum = parseInt(num, 10) + 7;
        intervals.push(`${newNum}${quality}`);
        intervals.shift();
    }
    const notes = tonic.empty ? [] : intervals.map((i)=>(0, _core.transpose)(tonic, i));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
    const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
    return {
        ...type,
        name,
        symbol,
        type: type.name,
        root: root.name,
        intervals,
        rootDegree,
        tonic: tonic.name,
        notes
    };
}
var chord = (0, _core.deprecate)("Chord.chord", "Chord.get", get);
function transpose(chordName, interval) {
    const [tonic, type] = tokenize(chordName);
    if (!tonic) return chordName;
    return (0, _core.transpose)(tonic, interval) + type;
}
function chordScales(name) {
    const s = get(name);
    const isChordIncluded = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _scaleType.all)().filter((scale)=>isChordIncluded(scale.chroma)).map((scale)=>scale.name);
}
function extended(chordName) {
    const s = get(chordName);
    const isSuperset = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSuperset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function reduced(chordName) {
    const s = get(chordName);
    const isSubset = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSubset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function degrees(chordName) {
    const { intervals, tonic } = get(chordName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(chordName) {
    const { intervals, tonic } = get(chordName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var chord_default = {
    getChord,
    get,
    detect: (0, _chordDetect.detect),
    chordScales,
    extended,
    reduced,
    tokenize,
    transpose,
    degrees,
    steps,
    // deprecate
    chord
};

},{"@tonaljs/chord-detect":"8m9ss","@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8m9ss":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>chord_detect_default);
parcelHelpers.export(exports, "detect", ()=>detect);
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var namedSet = (notes)=>{
    const pcToName = notes.reduce((record, n)=>{
        const chroma = (0, _core.note)(n).chroma;
        if (chroma !== void 0) record[chroma] = record[chroma] || (0, _core.note)(n).name;
        return record;
    }, {});
    return (chroma)=>pcToName[chroma];
};
function detect(source, options = {}) {
    const notes = source.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    if ((0, _core.note).length === 0) return [];
    const found = findMatches(notes, 1, options);
    return found.filter((chord)=>chord.weight).sort((a, b)=>b.weight - a.weight).map((chord)=>chord.name);
}
var BITMASK = {
    // 3m 000100000000
    // 3M 000010000000
    anyThirds: 384,
    // 5P 000000010000
    perfectFifth: 16,
    // 5d 000000100000
    // 5A 000000001000
    nonPerfectFifths: 40,
    anySeventh: 3
};
var testChromaNumber = (bitmask)=>(chromaNumber)=>Boolean(chromaNumber & bitmask);
var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);
function hasAnyThirdAndPerfectFifthAndAnySeventh(chordType) {
    const chromaNumber = parseInt(chordType.chroma, 2);
    return hasAnyThird(chromaNumber) && hasPerfectFifth(chromaNumber) && hasAnySeventh(chromaNumber);
}
function withPerfectFifth(chroma) {
    const chromaNumber = parseInt(chroma, 2);
    return hasNonPerfectFifth(chromaNumber) ? chroma : (chromaNumber | 16).toString(2);
}
function findMatches(notes, weight, options) {
    const tonic = notes[0];
    const tonicChroma = (0, _core.note)(tonic).chroma;
    const noteName = namedSet(notes);
    const allModes = (0, _pcset.modes)(notes, false);
    const found = [];
    allModes.forEach((mode, index)=>{
        const modeWithPerfectFifth = options.assumePerfectFifth && withPerfectFifth(mode);
        const chordTypes = (0, _chordType.all)().filter((chordType)=>{
            if (options.assumePerfectFifth && hasAnyThirdAndPerfectFifthAndAnySeventh(chordType)) return chordType.chroma === modeWithPerfectFifth;
            return chordType.chroma === mode;
        });
        chordTypes.forEach((chordType)=>{
            const chordName = chordType.aliases[0];
            const baseNote = noteName(index);
            const isInversion = index !== tonicChroma;
            if (isInversion) found.push({
                weight: 0.5 * weight,
                name: `${baseNote}${chordName}/${tonic}`
            });
            else found.push({
                weight: 1 * weight,
                name: `${baseNote}${chordName}`
            });
        });
    });
    return found;
}
var chord_detect_default = {
    detect
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSYoM":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "chordType", ()=>chordType);
parcelHelpers.export(exports, "default", ()=>chord_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "symbols", ()=>symbols);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var CHORDS = [
    // ==Major==
    [
        "1P 3M 5P",
        "major",
        "M ^  maj"
    ],
    [
        "1P 3M 5P 7M",
        "major seventh",
        "maj7 \u0394 ma7 M7 Maj7 ^7"
    ],
    [
        "1P 3M 5P 7M 9M",
        "major ninth",
        "maj9 \u03949 ^9"
    ],
    [
        "1P 3M 5P 7M 9M 13M",
        "major thirteenth",
        "maj13 Maj13 ^13"
    ],
    [
        "1P 3M 5P 6M",
        "sixth",
        "6 add6 add13 M6"
    ],
    [
        "1P 3M 5P 6M 9M",
        "sixth added ninth",
        "6add9 6/9 69 M69"
    ],
    [
        "1P 3M 6m 7M",
        "major seventh flat sixth",
        "M7b6 ^7b6"
    ],
    [
        "1P 3M 5P 7M 11A",
        "major seventh sharp eleventh",
        "maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"
    ],
    // ==Minor==
    // '''Normal'''
    [
        "1P 3m 5P",
        "minor",
        "m min -"
    ],
    [
        "1P 3m 5P 7m",
        "minor seventh",
        "m7 min7 mi7 -7"
    ],
    [
        "1P 3m 5P 7M",
        "minor/major seventh",
        "m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"
    ],
    [
        "1P 3m 5P 6M",
        "minor sixth",
        "m6 -6"
    ],
    [
        "1P 3m 5P 7m 9M",
        "minor ninth",
        "m9 -9"
    ],
    [
        "1P 3m 5P 7M 9M",
        "minor/major ninth",
        "mM9 mMaj9 -^9"
    ],
    [
        "1P 3m 5P 7m 9M 11P",
        "minor eleventh",
        "m11 -11"
    ],
    [
        "1P 3m 5P 7m 9M 13M",
        "minor thirteenth",
        "m13 -13"
    ],
    // '''Diminished'''
    [
        "1P 3m 5d",
        "diminished",
        "dim \xb0 o"
    ],
    [
        "1P 3m 5d 7d",
        "diminished seventh",
        "dim7 \xb07 o7"
    ],
    [
        "1P 3m 5d 7m",
        "half-diminished",
        "m7b5 \xf8 -7b5 h7 h"
    ],
    // ==Dominant/Seventh==
    // '''Normal'''
    [
        "1P 3M 5P 7m",
        "dominant seventh",
        "7 dom"
    ],
    [
        "1P 3M 5P 7m 9M",
        "dominant ninth",
        "9"
    ],
    [
        "1P 3M 5P 7m 9M 13M",
        "dominant thirteenth",
        "13"
    ],
    [
        "1P 3M 5P 7m 11A",
        "lydian dominant seventh",
        "7#11 7#4"
    ],
    // '''Altered'''
    [
        "1P 3M 5P 7m 9m",
        "dominant flat ninth",
        "7b9"
    ],
    [
        "1P 3M 5P 7m 9A",
        "dominant sharp ninth",
        "7#9"
    ],
    [
        "1P 3M 7m 9m",
        "altered",
        "alt7"
    ],
    // '''Suspended'''
    [
        "1P 4P 5P",
        "suspended fourth",
        "sus4 sus"
    ],
    [
        "1P 2M 5P",
        "suspended second",
        "sus2"
    ],
    [
        "1P 4P 5P 7m",
        "suspended fourth seventh",
        "7sus4 7sus"
    ],
    [
        "1P 5P 7m 9M 11P",
        "eleventh",
        "11"
    ],
    [
        "1P 4P 5P 7m 9m",
        "suspended fourth flat ninth",
        "b9sus phryg 7b9sus 7b9sus4"
    ],
    // ==Other==
    [
        "1P 5P",
        "fifth",
        "5"
    ],
    [
        "1P 3M 5A",
        "augmented",
        "aug + +5 ^#5"
    ],
    [
        "1P 3m 5A",
        "minor augmented",
        "m#5 -#5 m+"
    ],
    [
        "1P 3M 5A 7M",
        "augmented seventh",
        "maj7#5 maj7+5 +maj7 ^7#5"
    ],
    [
        "1P 3M 5P 7M 9M 11A",
        "major sharp eleventh (lydian)",
        "maj9#11 \u03949#11 ^9#11"
    ],
    // ==Legacy==
    [
        "1P 2M 4P 5P",
        "",
        "sus24 sus4add9"
    ],
    [
        "1P 3M 5A 7M 9M",
        "",
        "maj9#5 Maj9#5"
    ],
    [
        "1P 3M 5A 7m",
        "",
        "7#5 +7 7+ 7aug aug7"
    ],
    [
        "1P 3M 5A 7m 9A",
        "",
        "7#5#9 7#9#5 7alt"
    ],
    [
        "1P 3M 5A 7m 9M",
        "",
        "9#5 9+"
    ],
    [
        "1P 3M 5A 7m 9M 11A",
        "",
        "9#5#11"
    ],
    [
        "1P 3M 5A 7m 9m",
        "",
        "7#5b9 7b9#5"
    ],
    [
        "1P 3M 5A 7m 9m 11A",
        "",
        "7#5b9#11"
    ],
    [
        "1P 3M 5A 9A",
        "",
        "+add#9"
    ],
    [
        "1P 3M 5A 9M",
        "",
        "M#5add9 +add9"
    ],
    [
        "1P 3M 5P 6M 11A",
        "",
        "M6#11 M6b5 6#11 6b5"
    ],
    [
        "1P 3M 5P 6M 7M 9M",
        "",
        "M7add13"
    ],
    [
        "1P 3M 5P 6M 9M 11A",
        "",
        "69#11"
    ],
    [
        "1P 3m 5P 6M 9M",
        "",
        "m69 -69"
    ],
    [
        "1P 3M 5P 6m 7m",
        "",
        "7b6"
    ],
    [
        "1P 3M 5P 7M 9A 11A",
        "",
        "maj7#9#11"
    ],
    [
        "1P 3M 5P 7M 9M 11A 13M",
        "",
        "M13#11 maj13#11 M13+4 M13#4"
    ],
    [
        "1P 3M 5P 7M 9m",
        "",
        "M7b9"
    ],
    [
        "1P 3M 5P 7m 11A 13m",
        "",
        "7#11b13 7b5b13"
    ],
    [
        "1P 3M 5P 7m 13M",
        "",
        "7add6 67 7add13"
    ],
    [
        "1P 3M 5P 7m 9A 11A",
        "",
        "7#9#11 7b5#9 7#9b5"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13M",
        "",
        "13#9#11"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13m",
        "",
        "7#9#11b13"
    ],
    [
        "1P 3M 5P 7m 9A 13M",
        "",
        "13#9"
    ],
    [
        "1P 3M 5P 7m 9A 13m",
        "",
        "7#9b13"
    ],
    [
        "1P 3M 5P 7m 9M 11A",
        "",
        "9#11 9+4 9#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13M",
        "",
        "13#11 13+4 13#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13m",
        "",
        "9#11b13 9b5b13"
    ],
    [
        "1P 3M 5P 7m 9m 11A",
        "",
        "7b9#11 7b5b9 7b9b5"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13M",
        "",
        "13b9#11"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13m",
        "",
        "7b9b13#11 7b9#11b13 7b5b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 13M",
        "",
        "13b9"
    ],
    [
        "1P 3M 5P 7m 9m 13m",
        "",
        "7b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 9A",
        "",
        "7b9#9"
    ],
    [
        "1P 3M 5P 9M",
        "",
        "Madd9 2 add9 add2"
    ],
    [
        "1P 3M 5P 9m",
        "",
        "Maddb9"
    ],
    [
        "1P 3M 5d",
        "",
        "Mb5"
    ],
    [
        "1P 3M 5d 6M 7m 9M",
        "",
        "13b5"
    ],
    [
        "1P 3M 5d 7M",
        "",
        "M7b5"
    ],
    [
        "1P 3M 5d 7M 9M",
        "",
        "M9b5"
    ],
    [
        "1P 3M 5d 7m",
        "",
        "7b5"
    ],
    [
        "1P 3M 5d 7m 9M",
        "",
        "9b5"
    ],
    [
        "1P 3M 7m",
        "",
        "7no5"
    ],
    [
        "1P 3M 7m 13m",
        "",
        "7b13"
    ],
    [
        "1P 3M 7m 9M",
        "",
        "9no5"
    ],
    [
        "1P 3M 7m 9M 13M",
        "",
        "13no5"
    ],
    [
        "1P 3M 7m 9M 13m",
        "",
        "9b13"
    ],
    [
        "1P 3m 4P 5P",
        "",
        "madd4"
    ],
    [
        "1P 3m 5P 6m 7M",
        "",
        "mMaj7b6"
    ],
    [
        "1P 3m 5P 6m 7M 9M",
        "",
        "mMaj9b6"
    ],
    [
        "1P 3m 5P 7m 11P",
        "",
        "m7add11 m7add4"
    ],
    [
        "1P 3m 5P 9M",
        "",
        "madd9"
    ],
    [
        "1P 3m 5d 6M 7M",
        "",
        "o7M7"
    ],
    [
        "1P 3m 5d 7M",
        "",
        "oM7"
    ],
    [
        "1P 3m 6m 7M",
        "",
        "mb6M7"
    ],
    [
        "1P 3m 6m 7m",
        "",
        "m7#5"
    ],
    [
        "1P 3m 6m 7m 9M",
        "",
        "m9#5"
    ],
    [
        "1P 3m 5A 7m 9M 11P",
        "",
        "m11A"
    ],
    [
        "1P 3m 6m 9m",
        "",
        "mb6b9"
    ],
    [
        "1P 2M 3m 5d 7m",
        "",
        "m9b5"
    ],
    [
        "1P 4P 5A 7M",
        "",
        "M7#5sus4"
    ],
    [
        "1P 4P 5A 7M 9M",
        "",
        "M9#5sus4"
    ],
    [
        "1P 4P 5A 7m",
        "",
        "7#5sus4"
    ],
    [
        "1P 4P 5P 7M",
        "",
        "M7sus4"
    ],
    [
        "1P 4P 5P 7M 9M",
        "",
        "M9sus4"
    ],
    [
        "1P 4P 5P 7m 9M",
        "",
        "9sus4 9sus"
    ],
    [
        "1P 4P 5P 7m 9M 13M",
        "",
        "13sus4 13sus"
    ],
    [
        "1P 4P 5P 7m 9m 13m",
        "",
        "7sus4b9b13 7b9b13sus4"
    ],
    [
        "1P 4P 7m 10m",
        "",
        "4 quartal"
    ],
    [
        "1P 5P 7m 9m 11P",
        "",
        "11b9"
    ]
];
var data_default = CHORDS;
// index.ts
var NoChordType = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function get(type) {
    return index[type] || NoChordType;
}
var chordType = (0, _core.deprecate)("ChordType.chordType", "ChordType.get", get);
function names() {
    return dictionary.map((chord)=>chord.name).filter((x)=>x);
}
function symbols() {
    return dictionary.map((chord)=>chord.aliases[0]).filter((x)=>x);
}
function keys() {
    return Object.keys(index);
}
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ChordType.entries", "ChordType.all", all);
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord = {
        ...(0, _pcset.get)(intervals),
        name: fullName || "",
        quality,
        intervals,
        aliases
    };
    dictionary.push(chord);
    if (chord.name) index[chord.name] = chord;
    index[chord.setNum] = chord;
    index[chord.chroma] = chord;
    chord.aliases.forEach((alias)=>addAlias(chord, alias));
}
function addAlias(chord, alias) {
    index[alias] = chord;
}
function getQuality(intervals) {
    const has = (interval)=>intervals.indexOf(interval) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
data_default.forEach(([ivls, fullName, names2])=>add(ivls.split(" "), names2.split(" "), fullName));
dictionary.sort((a, b)=>a.setNum - b.setNum);
var chord_type_default = {
    names,
    symbols,
    get,
    all,
    add,
    removeAll,
    keys,
    // deprecated
    entries,
    chordType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyyUH":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyPcset", ()=>EmptyPcset);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "chromaToIntervals", ()=>chromaToIntervals);
parcelHelpers.export(exports, "chromas", ()=>chromas);
parcelHelpers.export(exports, "default", ()=>pcset_default);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "includes", ()=>includes);
parcelHelpers.export(exports, "isChroma", ()=>isChroma);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isNoteIncludedIn", ()=>isNoteIncludedIn);
parcelHelpers.export(exports, "isSubsetOf", ()=>isSubsetOf);
parcelHelpers.export(exports, "isSupersetOf", ()=>isSupersetOf);
parcelHelpers.export(exports, "modes", ()=>modes);
parcelHelpers.export(exports, "pcset", ()=>pcset);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
};
var setNumToChroma = (num2)=>Number(num2).toString(2);
var chromaToNumber = (chroma2)=>parseInt(chroma2, 2);
var REGEX = /^[01]{12}$/;
function isChroma(set) {
    return REGEX.test(set);
}
var isPcsetNum = (set)=>typeof set === "number" && set >= 0 && set <= 4095;
var isPcset = (set)=>set && isChroma(set.chroma);
var cache = {
    [EmptyPcset.chroma]: EmptyPcset
};
function get(src) {
    const chroma2 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache[chroma2] = cache[chroma2] || chromaToPcset(chroma2);
}
var pcset = (0, _core.deprecate)("Pcset.pcset", "Pcset.get", get);
var chroma = (set)=>get(set).chroma;
var intervals = (set)=>get(set).intervals;
var num = (set)=>get(set).setNum;
var IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
];
function chromaToIntervals(chroma2) {
    const intervals2 = [];
    for(let i = 0; i < 12; i++)if (chroma2.charAt(i) === "1") intervals2.push(IVLS[i]);
    return intervals2;
}
function chromas() {
    return (0, _collection.range)(2048, 4095).map(setNumToChroma);
}
function modes(set, normalize = true) {
    const pcs = get(set);
    const binary = pcs.chroma.split("");
    return (0, _collection.compact)(binary.map((_, i)=>{
        const r = (0, _collection.rotate)(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
    }));
}
function isEqual(s1, s2) {
    return get(s1).setNum === get(s2).setNum;
}
function isSubsetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o & s) === o;
    };
}
function isSupersetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o | s) === o;
    };
}
function isNoteIncludedIn(set) {
    const s = get(set);
    return (noteName)=>{
        const n = (0, _core.note)(noteName);
        return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
    };
}
var includes = isNoteIncludedIn;
function filter(set) {
    const isIncluded = isNoteIncludedIn(set);
    return (notes)=>{
        return notes.filter(isIncluded);
    };
}
var pcset_default = {
    get,
    chroma,
    num,
    intervals,
    chromas,
    isSupersetOf,
    isSubsetOf,
    isNoteIncludedIn,
    isEqual,
    filter,
    modes,
    pcset
};
function chromaRotations(chroma2) {
    const binary = chroma2.split("");
    return binary.map((_, i)=>(0, _collection.rotate)(i, binary).join(""));
}
function chromaToPcset(chroma2) {
    const setNum = chromaToNumber(chroma2);
    const normalizedNum = chromaRotations(chroma2).map(chromaToNumber).filter((n)=>n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals2 = chromaToIntervals(chroma2);
    return {
        empty: false,
        name: "",
        setNum,
        chroma: chroma2,
        normalized,
        intervals: intervals2
    };
}
function listToChroma(set) {
    if (set.length === 0) return EmptyPcset.chroma;
    let pitch;
    const binary = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    for(let i = 0; i < set.length; i++){
        pitch = (0, _core.note)(set[i]);
        if (pitch.empty) pitch = (0, _core.interval)(set[i]);
        if (!pitch.empty) binary[pitch.chroma] = 1;
    }
    return binary.join("");
}

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akihX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "default", ()=>collection_default);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}
var collection_default = {
    compact,
    permutations,
    range,
    rotate,
    shuffle
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRJbX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoScaleType", ()=>NoScaleType);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>scale_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "scaleType", ()=>scaleType);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var SCALES = [
    [
        "1P 2M 3M 5P 6M",
        "major pentatonic",
        "pentatonic"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7M",
        "major",
        "ionian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m",
        "minor",
        "aeolian"
    ],
    [
        "1P 2M 3m 3M 5P 6M",
        "major blues"
    ],
    [
        "1P 3m 4P 5d 5P 7m",
        "minor blues",
        "blues"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7M",
        "melodic minor"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7M",
        "harmonic minor"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m 7M",
        "bebop"
    ],
    [
        "1P 2M 3m 4P 5d 6m 6M 7M",
        "diminished",
        "whole-half diminished"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7m",
        "dorian"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7M",
        "lydian"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m",
        "mixolydian",
        "dominant"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7m",
        "phrygian"
    ],
    [
        "1P 2m 3m 4P 5d 6m 7m",
        "locrian"
    ],
    [
        "1P 3M 4P 5P 7M",
        "ionian pentatonic"
    ],
    [
        "1P 3M 4P 5P 7m",
        "mixolydian pentatonic",
        "indian"
    ],
    [
        "1P 2M 4P 5P 6M",
        "ritusen"
    ],
    [
        "1P 2M 4P 5P 7m",
        "egyptian"
    ],
    [
        "1P 3M 4P 5d 7m",
        "neopolitan major pentatonic"
    ],
    [
        "1P 3m 4P 5P 6m",
        "vietnamese 1"
    ],
    [
        "1P 2m 3m 5P 6m",
        "pelog"
    ],
    [
        "1P 2m 4P 5P 6m",
        "kumoijoshi"
    ],
    [
        "1P 2M 3m 5P 6m",
        "hirajoshi"
    ],
    [
        "1P 2m 4P 5d 7m",
        "iwato"
    ],
    [
        "1P 2m 4P 5P 7m",
        "in-sen"
    ],
    [
        "1P 3M 4A 5P 7M",
        "lydian pentatonic",
        "chinese"
    ],
    [
        "1P 3m 4P 6m 7m",
        "malkos raga"
    ],
    [
        "1P 3m 4P 5d 7m",
        "locrian pentatonic",
        "minor seven flat five pentatonic"
    ],
    [
        "1P 3m 4P 5P 7m",
        "minor pentatonic",
        "vietnamese 2"
    ],
    [
        "1P 3m 4P 5P 6M",
        "minor six pentatonic"
    ],
    [
        "1P 2M 3m 5P 6M",
        "flat three pentatonic",
        "kumoi"
    ],
    [
        "1P 2M 3M 5P 6m",
        "flat six pentatonic"
    ],
    [
        "1P 2m 3M 5P 6M",
        "scriabin"
    ],
    [
        "1P 3M 5d 6m 7m",
        "whole tone pentatonic"
    ],
    [
        "1P 3M 4A 5A 7M",
        "lydian #5P pentatonic"
    ],
    [
        "1P 3M 4A 5P 7m",
        "lydian dominant pentatonic"
    ],
    [
        "1P 3m 4P 5P 7M",
        "minor #7M pentatonic"
    ],
    [
        "1P 3m 4d 5d 7m",
        "super locrian pentatonic"
    ],
    [
        "1P 2M 3m 4P 5P 7M",
        "minor hexatonic"
    ],
    [
        "1P 2A 3M 5P 5A 7M",
        "augmented"
    ],
    [
        "1P 2M 4P 5P 6M 7m",
        "piongio"
    ],
    [
        "1P 2m 3M 4A 6M 7m",
        "prometheus neopolitan"
    ],
    [
        "1P 2M 3M 4A 6M 7m",
        "prometheus"
    ],
    [
        "1P 2m 3M 5d 6m 7m",
        "mystery #1"
    ],
    [
        "1P 2m 3M 4P 5A 6M",
        "six tone symmetric"
    ],
    [
        "1P 2M 3M 4A 5A 6A",
        "whole tone",
        "messiaen's mode #1"
    ],
    [
        "1P 2m 4P 4A 5P 7M",
        "messiaen's mode #5"
    ],
    [
        "1P 2M 3M 4P 5d 6m 7m",
        "locrian major",
        "arabian"
    ],
    [
        "1P 2m 3M 4A 5P 6m 7M",
        "double harmonic lydian"
    ],
    [
        "1P 2m 2A 3M 4A 6m 7m",
        "altered",
        "super locrian",
        "diminished whole tone",
        "pomeroy"
    ],
    [
        "1P 2M 3m 4P 5d 6m 7m",
        "locrian #2",
        "half-diminished",
        "aeolian b5"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7m",
        "mixolydian b6",
        "melodic minor fifth mode",
        "hindu"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7m",
        "lydian dominant",
        "lydian b7",
        "overtone"
    ],
    [
        "1P 2M 3M 4A 5A 6M 7M",
        "lydian augmented"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7m",
        "dorian b2",
        "phrygian #6",
        "melodic minor second mode"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7d",
        "ultralocrian",
        "superlocrian bb7",
        "superlocrian diminished"
    ],
    [
        "1P 2m 3m 4P 5d 6M 7m",
        "locrian 6",
        "locrian natural 6",
        "locrian sharp 6"
    ],
    [
        "1P 2A 3M 4P 5P 5A 7M",
        "augmented heptatonic"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7m",
        "dorian #4",
        "ukrainian dorian",
        "romanian minor",
        "altered dorian"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7M",
        "lydian diminished"
    ],
    [
        "1P 2M 3M 4A 5A 7m 7M",
        "leading whole tone"
    ],
    [
        "1P 2M 3M 4A 5P 6m 7m",
        "lydian minor"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7m",
        "phrygian dominant",
        "spanish",
        "phrygian major"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7M",
        "balinese"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7M",
        "neopolitan major"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7M",
        "harmonic major"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7M",
        "double harmonic major",
        "gypsy"
    ],
    [
        "1P 2M 3m 4A 5P 6m 7M",
        "hungarian minor"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7m",
        "hungarian major"
    ],
    [
        "1P 2m 3M 4P 5d 6M 7m",
        "oriental"
    ],
    [
        "1P 2m 3m 3M 4A 5P 7m",
        "flamenco"
    ],
    [
        "1P 2m 3m 4A 5P 6m 7M",
        "todi raga"
    ],
    [
        "1P 2m 3M 4P 5d 6m 7M",
        "persian"
    ],
    [
        "1P 2m 3M 5d 6m 7m 7M",
        "enigmatic"
    ],
    [
        "1P 2M 3M 4P 5A 6M 7M",
        "major augmented",
        "major #5",
        "ionian augmented",
        "ionian #5"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7M",
        "lydian #9"
    ],
    [
        "1P 2m 2M 4P 4A 5P 6m 7M",
        "messiaen's mode #4"
    ],
    [
        "1P 2m 3M 4P 4A 5P 6m 7M",
        "purvi raga"
    ],
    [
        "1P 2m 3m 3M 4P 5P 6m 7m",
        "spanish heptatonic"
    ],
    [
        "1P 2M 3m 3M 4P 5P 6M 7m",
        "bebop minor"
    ],
    [
        "1P 2M 3M 4P 5P 5A 6M 7M",
        "bebop major"
    ],
    [
        "1P 2m 3m 4P 5d 5P 6m 7m",
        "bebop locrian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m 7M",
        "minor bebop"
    ],
    [
        "1P 2M 3M 4P 5d 5P 6M 7M",
        "ichikosucho"
    ],
    [
        "1P 2M 3m 4P 5P 6m 6M 7M",
        "minor six diminished"
    ],
    [
        "1P 2m 3m 3M 4A 5P 6M 7m",
        "half-whole diminished",
        "dominant diminished",
        "messiaen's mode #2"
    ],
    [
        "1P 3m 3M 4P 5P 6M 7m 7M",
        "kafi raga"
    ],
    [
        "1P 2M 3M 4P 4A 5A 6A 7M",
        "messiaen's mode #6"
    ],
    [
        "1P 2M 3m 3M 4P 5d 5P 6M 7m",
        "composite blues"
    ],
    [
        "1P 2M 3m 3M 4A 5P 6m 7m 7M",
        "messiaen's mode #3"
    ],
    [
        "1P 2m 2M 3m 4P 4A 5P 6m 6M 7M",
        "messiaen's mode #7"
    ],
    [
        "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M",
        "chromatic"
    ]
];
var data_default = SCALES;
// index.ts
var NoScaleType = {
    ...(0, _pcset.EmptyPcset),
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function names() {
    return dictionary.map((scale)=>scale.name);
}
function get(type) {
    return index[type] || NoScaleType;
}
var scaleType = (0, _core.deprecate)("ScaleDictionary.scaleType", "ScaleType.get", get);
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ScaleDictionary.entries", "ScaleType.all", all);
function keys() {
    return Object.keys(index);
}
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, name, aliases = []) {
    const scale = {
        ...(0, _pcset.get)(intervals),
        name,
        intervals,
        aliases
    };
    dictionary.push(scale);
    index[scale.name] = scale;
    index[scale.setNum] = scale;
    index[scale.chroma] = scale;
    scale.aliases.forEach((alias)=>addAlias(scale, alias));
    return scale;
}
function addAlias(scale, alias) {
    index[alias] = scale;
}
data_default.forEach(([ivls, name, ...aliases])=>add(ivls.split(" "), name, aliases));
var scale_type_default = {
    names,
    get,
    all,
    add,
    removeAll,
    keys,
    entries,
    scaleType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nkSn":[function(require,module,exports) {
// data.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>duration_value_default);
parcelHelpers.export(exports, "fraction", ()=>fraction);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "shorthands", ()=>shorthands);
parcelHelpers.export(exports, "value", ()=>value);
var DATA = [
    [
        0.125,
        "dl",
        [
            "large",
            "duplex longa",
            "maxima",
            "octuple",
            "octuple whole"
        ]
    ],
    [
        0.25,
        "l",
        [
            "long",
            "longa"
        ]
    ],
    [
        0.5,
        "d",
        [
            "double whole",
            "double",
            "breve"
        ]
    ],
    [
        1,
        "w",
        [
            "whole",
            "semibreve"
        ]
    ],
    [
        2,
        "h",
        [
            "half",
            "minim"
        ]
    ],
    [
        4,
        "q",
        [
            "quarter",
            "crotchet"
        ]
    ],
    [
        8,
        "e",
        [
            "eighth",
            "quaver"
        ]
    ],
    [
        16,
        "s",
        [
            "sixteenth",
            "semiquaver"
        ]
    ],
    [
        32,
        "t",
        [
            "thirty-second",
            "demisemiquaver"
        ]
    ],
    [
        64,
        "sf",
        [
            "sixty-fourth",
            "hemidemisemiquaver"
        ]
    ],
    [
        128,
        "h",
        [
            "hundred twenty-eighth"
        ]
    ],
    [
        256,
        "th",
        [
            "two hundred fifty-sixth"
        ]
    ]
];
var data_default = DATA;
// index.ts
var VALUES = [];
data_default.forEach(([denominator, shorthand, names2])=>add(denominator, shorthand, names2));
var NoDuration = {
    empty: true,
    name: "",
    value: 0,
    fraction: [
        0,
        0
    ],
    shorthand: "",
    dots: "",
    names: []
};
function names() {
    return VALUES.reduce((names2, duration)=>{
        duration.names.forEach((name)=>names2.push(name));
        return names2;
    }, []);
}
function shorthands() {
    return VALUES.map((dur)=>dur.shorthand);
}
var REGEX = /^([^.]+)(\.*)$/;
function get(name) {
    const [_, simple, dots] = REGEX.exec(name) || [];
    const base = VALUES.find((dur)=>dur.shorthand === simple || dur.names.includes(simple));
    if (!base) return NoDuration;
    const fraction2 = calcDots(base.fraction, dots.length);
    const value2 = fraction2[0] / fraction2[1];
    return {
        ...base,
        name,
        dots,
        value: value2,
        fraction: fraction2
    };
}
var value = (name)=>get(name).value;
var fraction = (name)=>get(name).fraction;
var duration_value_default = {
    names,
    shorthands,
    get,
    value,
    fraction
};
function add(denominator, shorthand, names2) {
    VALUES.push({
        empty: false,
        dots: "",
        name: "",
        value: 1 / denominator,
        fraction: denominator < 1 ? [
            1 / denominator,
            1
        ] : [
            1,
            denominator
        ],
        shorthand,
        names: names2
    });
}
function calcDots(fraction2, dots) {
    const pow = Math.pow(2, dots);
    let numerator = fraction2[0] * pow;
    let denominator = fraction2[1] * pow;
    const base = numerator;
    for(let i = 0; i < dots; i++)numerator += base / Math.pow(2, i + 1);
    while(numerator % 2 === 0 && denominator % 2 === 0){
        numerator /= 2;
        denominator /= 2;
    }
    return [
        numerator,
        denominator
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nbRQ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addTo", ()=>addTo);
parcelHelpers.export(exports, "default", ()=>interval_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "fromSemitones", ()=>fromSemitones);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "invert", ()=>invert);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "num", ()=>num);
parcelHelpers.export(exports, "quality", ()=>quality);
parcelHelpers.export(exports, "semitones", ()=>semitones);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "substract", ()=>substract);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
var _core = require("@tonaljs/core");
function names() {
    return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
var get = (0, _core.interval);
var name = (name2)=>(0, _core.interval)(name2).name;
var semitones = (name2)=>(0, _core.interval)(name2).semitones;
var quality = (name2)=>(0, _core.interval)(name2).q;
var num = (name2)=>(0, _core.interval)(name2).num;
function simplify(name2) {
    const i = (0, _core.interval)(name2);
    return i.empty ? "" : i.simple + i.q;
}
function invert(name2) {
    const i = (0, _core.interval)(name2);
    if (i.empty) return "";
    const step = (7 - i.step) % 7;
    const alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
    return (0, _core.interval)({
        step,
        alt,
        oct: i.oct,
        dir: i.dir
    }).name;
}
var IN = [
    1,
    2,
    2,
    3,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    7
];
var IQ = "P m M m M P d P m M m M".split(" ");
function fromSemitones(semitones2) {
    const d = semitones2 < 0 ? -1 : 1;
    const n = Math.abs(semitones2);
    const c = n % 12;
    const o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
}
var distance = (0, _core.distance);
var add = combinator((a, b)=>[
        a[0] + b[0],
        a[1] + b[1]
    ]);
var addTo = (interval)=>(other)=>add(interval, other);
var substract = combinator((a, b)=>[
        a[0] - b[0],
        a[1] - b[1]
    ]);
function transposeFifths(interval, fifths) {
    const ivl = get(interval);
    if (ivl.empty) return "";
    const [nFifths, nOcts, dir] = ivl.coord;
    return (0, _core.coordToInterval)([
        nFifths + fifths,
        nOcts,
        dir
    ]).name;
}
var interval_default = {
    names,
    get,
    name,
    num,
    semitones,
    quality,
    fromSemitones,
    distance,
    invert,
    simplify,
    add,
    addTo,
    substract,
    transposeFifths
};
function combinator(fn) {
    return (a, b)=>{
        const coordA = (0, _core.interval)(a).coord;
        const coordB = (0, _core.interval)(b).coord;
        if (coordA && coordB) {
            const coord = fn(coordA, coordB);
            return (0, _core.coordToInterval)(coord).name;
        }
    };
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUI0Q":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>key_default);
parcelHelpers.export(exports, "majorKey", ()=>majorKey);
parcelHelpers.export(exports, "majorTonicFromKeySignature", ()=>majorTonicFromKeySignature);
parcelHelpers.export(exports, "minorKey", ()=>minorKey);
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _romanNumeral = require("@tonaljs/roman-numeral");
var Empty = Object.freeze([]);
var NoKey = {
    type: "major",
    tonic: "",
    alteration: 0,
    keySignature: ""
};
var NoKeyScale = {
    tonic: "",
    grades: Empty,
    intervals: Empty,
    scale: Empty,
    triads: Empty,
    chords: Empty,
    chordsHarmonicFunction: Empty,
    chordScales: Empty
};
var NoMajorKey = {
    ...NoKey,
    ...NoKeyScale,
    type: "major",
    minorRelative: "",
    scale: Empty,
    secondaryDominants: Empty,
    secondaryDominantsMinorRelative: Empty,
    substituteDominants: Empty,
    substituteDominantsMinorRelative: Empty
};
var NoMinorKey = {
    ...NoKey,
    type: "minor",
    relativeMajor: "",
    natural: NoKeyScale,
    harmonic: NoKeyScale,
    melodic: NoKeyScale
};
var mapScaleToType = (scale, list, sep = "")=>list.map((type, i)=>`${scale[i]}${sep}${type}`);
function keyScale(grades, triads, chords, harmonicFunctions, chordScales) {
    return (tonic)=>{
        const intervals = grades.map((gr)=>(0, _romanNumeral.get)(gr).interval || "");
        const scale = intervals.map((interval)=>(0, _core.transpose)(tonic, interval));
        return {
            tonic,
            grades,
            intervals,
            scale,
            triads: mapScaleToType(scale, triads),
            chords: mapScaleToType(scale, chords),
            chordsHarmonicFunction: harmonicFunctions.slice(),
            chordScales: mapScaleToType(scale, chordScales, " ")
        };
    };
}
var distInFifths = (from, to)=>{
    const f = (0, _core.note)(from);
    const t = (0, _core.note)(to);
    return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
};
var MajorScale = keyScale("I II III IV V VI VII".split(" "), " m m   m dim".split(" "), "maj7 m7 m7 maj7 7 m7 m7b5".split(" "), "T SD T SD D T D".split(" "), "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(","));
var NaturalScale = keyScale("I II bIII IV V bVI bVII".split(" "), "m dim  m m  ".split(" "), "m7 m7b5 maj7 m7 m7 maj7 7".split(" "), "T SD T SD D SD SD".split(" "), "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(","));
var HarmonicScale = keyScale("I II bIII IV V bVI VII".split(" "), "m dim aug m   dim".split(" "), "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "), "T SD T SD D SD D".split(" "), "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(","));
var MelodicScale = keyScale("I II bIII IV V VI VII".split(" "), "m m aug   dim dim".split(" "), "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "), "T SD T SD D  ".split(" "), "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));
function majorKey(tonic) {
    const pc = (0, _core.note)(tonic).pc;
    if (!pc) return NoMajorKey;
    const keyScale2 = MajorScale(pc);
    const alteration = distInFifths("C", pc);
    const romanInTonic = (src)=>{
        const r = (0, _romanNumeral.get)(src);
        if (r.empty) return "";
        return (0, _core.transpose)(tonic, r.interval) + r.chordType;
    };
    return {
        ...keyScale2,
        type: "major",
        minorRelative: (0, _core.transpose)(pc, "-3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        secondaryDominants: "- VI7 VII7 I7 II7 III7 -".split(" ").map(romanInTonic),
        secondaryDominantsMinorRelative: "- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(romanInTonic),
        substituteDominants: "- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(romanInTonic),
        substituteDominantsMinorRelative: "- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(romanInTonic)
    };
}
function minorKey(tnc) {
    const pc = (0, _core.note)(tnc).pc;
    if (!pc) return NoMinorKey;
    const alteration = distInFifths("C", pc) - 3;
    return {
        type: "minor",
        tonic: pc,
        relativeMajor: (0, _core.transpose)(pc, "3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        natural: NaturalScale(pc),
        harmonic: HarmonicScale(pc),
        melodic: MelodicScale(pc)
    };
}
function majorTonicFromKeySignature(sig) {
    if (typeof sig === "number") return (0, _note.transposeFifths)("C", sig);
    else if (typeof sig === "string" && /^b+|#+$/.test(sig)) return (0, _note.transposeFifths)("C", (0, _core.accToAlt)(sig));
    return null;
}
var key_default = {
    majorKey,
    majorTonicFromKeySignature,
    minorKey
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeHTX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accidentals", ()=>accidentals);
parcelHelpers.export(exports, "ascending", ()=>ascending);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>note_default);
parcelHelpers.export(exports, "descending", ()=>descending);
parcelHelpers.export(exports, "enharmonic", ()=>enharmonic);
parcelHelpers.export(exports, "freq", ()=>freq);
parcelHelpers.export(exports, "fromFreq", ()=>fromFreq);
parcelHelpers.export(exports, "fromFreqSharps", ()=>fromFreqSharps);
parcelHelpers.export(exports, "fromMidi", ()=>fromMidi);
parcelHelpers.export(exports, "fromMidiSharps", ()=>fromMidiSharps);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "midi", ()=>midi);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "octave", ()=>octave);
parcelHelpers.export(exports, "pitchClass", ()=>pitchClass);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "sortedNames", ()=>sortedNames);
parcelHelpers.export(exports, "sortedUniqNames", ()=>sortedUniqNames);
parcelHelpers.export(exports, "tr", ()=>tr);
parcelHelpers.export(exports, "trBy", ()=>trBy);
parcelHelpers.export(exports, "trFifths", ()=>trFifths);
parcelHelpers.export(exports, "trFrom", ()=>trFrom);
parcelHelpers.export(exports, "transpose", ()=>transpose);
parcelHelpers.export(exports, "transposeBy", ()=>transposeBy);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
parcelHelpers.export(exports, "transposeFrom", ()=>transposeFrom);
parcelHelpers.export(exports, "transposeOctaves", ()=>transposeOctaves);
var _core = require("@tonaljs/core");
var _midi = require("@tonaljs/midi");
var NAMES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];
var toName = (n)=>n.name;
var onlyNotes = (array)=>array.map((0, _core.note)).filter((n)=>!n.empty);
function names(array) {
    if (array === void 0) return NAMES.slice();
    else if (!Array.isArray(array)) return [];
    else return onlyNotes(array).map(toName);
}
var get = (0, _core.note);
var name = (note)=>get(note).name;
var pitchClass = (note)=>get(note).pc;
var accidentals = (note)=>get(note).acc;
var octave = (note)=>get(note).oct;
var midi = (note)=>get(note).midi;
var freq = (note)=>get(note).freq;
var chroma = (note)=>get(note).chroma;
function fromMidi(midi2) {
    return (0, _midi.midiToNoteName)(midi2);
}
function fromFreq(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2));
}
function fromFreqSharps(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2), {
        sharps: true
    });
}
function fromMidiSharps(midi2) {
    return (0, _midi.midiToNoteName)(midi2, {
        sharps: true
    });
}
var transpose = (0, _core.transpose);
var tr = (0, _core.transpose);
var transposeBy = (interval)=>(note)=>transpose(note, interval);
var trBy = transposeBy;
var transposeFrom = (note)=>(interval)=>transpose(note, interval);
var trFrom = transposeFrom;
function transposeFifths(noteName, fifths) {
    return transpose(noteName, [
        fifths,
        0
    ]);
}
var trFifths = transposeFifths;
function transposeOctaves(noteName, octaves) {
    return transpose(noteName, [
        0,
        octaves
    ]);
}
var ascending = (a, b)=>a.height - b.height;
var descending = (a, b)=>b.height - a.height;
function sortedNames(notes, comparator) {
    comparator = comparator || ascending;
    return onlyNotes(notes).sort(comparator).map(toName);
}
function sortedUniqNames(notes) {
    return sortedNames(notes, ascending).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
var simplify = (noteName)=>{
    const note = get(noteName);
    if (note.empty) return "";
    return (0, _midi.midiToNoteName)(note.midi || note.chroma, {
        sharps: note.alt > 0,
        pitchClass: note.midi === null
    });
};
function enharmonic(noteName, destName) {
    const src = get(noteName);
    if (src.empty) return "";
    const dest = get(destName || (0, _midi.midiToNoteName)(src.midi || src.chroma, {
        sharps: src.alt < 0,
        pitchClass: true
    }));
    if (dest.empty || dest.chroma !== src.chroma) return "";
    if (src.oct === void 0) return dest.pc;
    const srcChroma = src.chroma - src.alt;
    const destChroma = dest.chroma - dest.alt;
    const destOctOffset = srcChroma > 11 || destChroma < 0 ? -1 : srcChroma < 0 || destChroma > 11 ? 1 : 0;
    const destOct = src.oct + destOctOffset;
    return dest.pc + destOct;
}
var note_default = {
    names,
    get,
    name,
    pitchClass,
    accidentals,
    octave,
    midi,
    ascending,
    descending,
    sortedNames,
    sortedUniqNames,
    fromMidi,
    fromMidiSharps,
    freq,
    fromFreq,
    fromFreqSharps,
    chroma,
    transpose,
    tr,
    transposeBy,
    trBy,
    transposeFrom,
    trFrom,
    transposeFifths,
    transposeOctaves,
    trFifths,
    simplify,
    enharmonic
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mmFz":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>midi_default);
parcelHelpers.export(exports, "freqToMidi", ()=>freqToMidi);
parcelHelpers.export(exports, "isMidi", ()=>isMidi);
parcelHelpers.export(exports, "midiToFreq", ()=>midiToFreq);
parcelHelpers.export(exports, "midiToNoteName", ()=>midiToNoteName);
parcelHelpers.export(exports, "pcset", ()=>pcset);
parcelHelpers.export(exports, "pcsetDegrees", ()=>pcsetDegrees);
parcelHelpers.export(exports, "pcsetNearest", ()=>pcsetNearest);
parcelHelpers.export(exports, "pcsetSteps", ()=>pcsetSteps);
parcelHelpers.export(exports, "toMidi", ()=>toMidi);
var _core = require("@tonaljs/core");
function isMidi(arg) {
    return +arg >= 0 && +arg <= 127;
}
function toMidi(note) {
    if (isMidi(note)) return +note;
    const n = (0, _core.note)(note);
    return n.empty ? null : n.midi;
}
function midiToFreq(midi, tuning = 440) {
    return Math.pow(2, (midi - 69) / 12) * tuning;
}
var L2 = Math.log(2);
var L440 = Math.log(440);
function freqToMidi(freq) {
    const v = 12 * (Math.log(freq) - L440) / L2 + 69;
    return Math.round(v * 100) / 100;
}
var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
function midiToNoteName(midi, options = {}) {
    if (isNaN(midi) || midi === -Infinity || midi === Infinity) return "";
    midi = Math.round(midi);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi % 12];
    if (options.pitchClass) return pc;
    const o = Math.floor(midi / 12) - 1;
    return pc + o;
}
function chroma(midi) {
    return midi % 12;
}
function pcsetFromChroma(chroma2) {
    return chroma2.split("").reduce((pcset2, val, index)=>{
        if (index < 12 && val === "1") pcset2.push(index);
        return pcset2;
    }, []);
}
function pcsetFromMidi(midi) {
    return midi.map(chroma).sort((a, b)=>a - b).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function pcset(notes) {
    return Array.isArray(notes) ? pcsetFromMidi(notes) : pcsetFromChroma(notes);
}
function pcsetNearest(notes) {
    const set = pcset(notes);
    return (midi)=>{
        const ch = chroma(midi);
        for(let i = 0; i < 12; i++){
            if (set.includes(ch + i)) return midi + i;
            if (set.includes(ch - i)) return midi - i;
        }
        return void 0;
    };
}
function pcsetSteps(notes, tonic) {
    const set = pcset(notes);
    const len = set.length;
    return (step)=>{
        const index = step < 0 ? (len - -step % len) % len : step % len;
        const octaves = Math.floor(step / len);
        return set[index] + octaves * 12 + tonic;
    };
}
function pcsetDegrees(notes, tonic) {
    const steps = pcsetSteps(notes, tonic);
    return (degree)=>{
        if (degree === 0) return void 0;
        return steps(degree > 0 ? degree - 1 : degree);
    };
}
var midi_default = {
    chroma,
    freqToMidi,
    isMidi,
    midiToFreq,
    midiToNoteName,
    pcsetNearest,
    pcset,
    pcsetDegrees,
    pcsetSteps,
    toMidi
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RLpa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>roman_numeral_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _core = require("@tonaljs/core");
var NoRomanNumeral = {
    empty: true,
    name: "",
    chordType: ""
};
var cache = {};
function get(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : typeof src === "number" ? get(NAMES[src] || "") : (0, _core.isPitch)(src) ? fromPitch(src) : (0, _core.isNamed)(src) ? get(src.name) : NoRomanNumeral;
}
var romanNumeral = (0, _core.deprecate)("RomanNumeral.romanNumeral", "RomanNumeral.get", get);
function names(major = true) {
    return (major ? NAMES : NAMES_MINOR).slice();
}
function fromPitch(pitch) {
    return get((0, _core.altToAcc)(pitch.alt) + NAMES[pitch.step]);
}
var REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function tokenize(str) {
    return REGEX.exec(str) || [
        "",
        "",
        "",
        ""
    ];
}
var ROMANS = "I II III IV V VI VII";
var NAMES = ROMANS.split(" ");
var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
function parse(src) {
    const [name, acc, roman, chordType] = tokenize(src);
    if (!roman) return NoRomanNumeral;
    const upperRoman = roman.toUpperCase();
    const step = NAMES.indexOf(upperRoman);
    const alt = (0, _core.accToAlt)(acc);
    const dir = 1;
    return {
        empty: false,
        name,
        roman,
        interval: (0, _core.interval)({
            step,
            alt,
            dir
        }).name,
        acc,
        chordType,
        alt,
        step,
        major: roman === upperRoman,
        oct: 0,
        dir
    };
}
var roman_numeral_default = {
    names,
    get,
    romanNumeral
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVKRW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>mode_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "notes", ()=>notes);
parcelHelpers.export(exports, "relativeTonic", ()=>relativeTonic);
parcelHelpers.export(exports, "seventhChords", ()=>seventhChords);
parcelHelpers.export(exports, "triads", ()=>triads);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _interval = require("@tonaljs/interval");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var MODES = [
    [
        0,
        2773,
        0,
        "ionian",
        "",
        "Maj7",
        "major"
    ],
    [
        1,
        2902,
        2,
        "dorian",
        "m",
        "m7"
    ],
    [
        2,
        3418,
        4,
        "phrygian",
        "m",
        "m7"
    ],
    [
        3,
        2741,
        -1,
        "lydian",
        "",
        "Maj7"
    ],
    [
        4,
        2774,
        1,
        "mixolydian",
        "",
        "7"
    ],
    [
        5,
        2906,
        3,
        "aeolian",
        "m",
        "m7",
        "minor"
    ],
    [
        6,
        3434,
        5,
        "locrian",
        "dim",
        "m7b5"
    ]
];
var NoMode = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
};
var modes = MODES.map(toMode);
var index = {};
modes.forEach((mode2)=>{
    index[mode2.name] = mode2;
    mode2.aliases.forEach((alias)=>{
        index[alias] = mode2;
    });
});
function get(name) {
    return typeof name === "string" ? index[name.toLowerCase()] || NoMode : name && name.name ? get(name.name) : NoMode;
}
var mode = (0, _core.deprecate)("Mode.mode", "Mode.get", get);
function all() {
    return modes.slice();
}
var entries = (0, _core.deprecate)("Mode.mode", "Mode.all", all);
function names() {
    return modes.map((mode2)=>mode2.name);
}
function toMode(mode2) {
    const [modeNum, setNum, alt, name, triad, seventh, alias] = mode2;
    const aliases = alias ? [
        alias
    ] : [];
    const chroma = Number(setNum).toString(2);
    const intervals = (0, _scaleType.get)(name).intervals;
    return {
        empty: false,
        intervals,
        modeNum,
        chroma,
        normalized: chroma,
        name,
        setNum,
        alt,
        triad,
        seventh,
        aliases
    };
}
function notes(modeName, tonic) {
    return get(modeName).intervals.map((ivl)=>(0, _core.transpose)(tonic, ivl));
}
function chords(chords2) {
    return (modeName, tonic)=>{
        const mode2 = get(modeName);
        if (mode2.empty) return [];
        const triads2 = (0, _collection.rotate)(mode2.modeNum, chords2);
        const tonics = mode2.intervals.map((i)=>(0, _core.transpose)(tonic, i));
        return triads2.map((triad, i)=>tonics[i] + triad);
    };
}
var triads = chords(MODES.map((x)=>x[4]));
var seventhChords = chords(MODES.map((x)=>x[5]));
function distance(destination, source) {
    const from = get(source);
    const to = get(destination);
    if (from.empty || to.empty) return "";
    return (0, _interval.simplify)((0, _interval.transposeFifths)("1P", to.alt - from.alt));
}
function relativeTonic(destination, source, tonic) {
    return (0, _core.transpose)(tonic, distance(destination, source));
}
var mode_default = {
    get,
    names,
    all,
    distance,
    relativeTonic,
    notes,
    triads,
    seventhChords,
    entries,
    mode
};

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/interval":"2nbRQ","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YROa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>progression_default);
parcelHelpers.export(exports, "fromRomanNumerals", ()=>fromRomanNumerals);
parcelHelpers.export(exports, "toRomanNumerals", ()=>toRomanNumerals);
var _chord = require("@tonaljs/chord");
var _core = require("@tonaljs/core");
var _romanNumeral = require("@tonaljs/roman-numeral");
function fromRomanNumerals(tonic, chords) {
    const romanNumerals = chords.map((0, _romanNumeral.get));
    return romanNumerals.map((rn)=>(0, _core.transpose)(tonic, (0, _core.interval)(rn)) + rn.chordType);
}
function toRomanNumerals(tonic, chords) {
    return chords.map((chord)=>{
        const [note, chordType] = (0, _chord.tokenize)(chord);
        const intervalName = (0, _core.distance)(tonic, note);
        const roman = (0, _romanNumeral.get)((0, _core.interval)(intervalName));
        return roman.name + chordType;
    });
}
var progression_default = {
    fromRomanNumerals,
    toRomanNumerals
};

},{"@tonaljs/chord":"6ncZZ","@tonaljs/core":"d3Dyc","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q44U":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromatic", ()=>chromatic);
parcelHelpers.export(exports, "default", ()=>range_default);
parcelHelpers.export(exports, "numeric", ()=>numeric);
var _collection = require("@tonaljs/collection");
var _midi = require("@tonaljs/midi");
function numeric(notes) {
    const midi = (0, _collection.compact)(notes.map((note)=>typeof note === "number" ? note : (0, _midi.toMidi)(note)));
    if (!notes.length || midi.length !== notes.length) return [];
    return midi.reduce((result, note)=>{
        const last = result[result.length - 1];
        return result.concat((0, _collection.range)(last, note).slice(1));
    }, [
        midi[0]
    ]);
}
function chromatic(notes, options) {
    return numeric(notes).map((midi)=>(0, _midi.midiToNoteName)(midi, options));
}
var range_default = {
    numeric,
    chromatic
};

},{"@tonaljs/collection":"akihX","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cecAp":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>scale_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>detect);
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "modeNames", ()=>modeNames);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "rangeOf", ()=>rangeOf);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleChords", ()=>scaleChords);
parcelHelpers.export(exports, "scaleNotes", ()=>scaleNotes);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _chordType = require("@tonaljs/chord-type");
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoScale = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
function tokenize(name) {
    if (typeof name !== "string") return [
        "",
        ""
    ];
    const i = name.indexOf(" ");
    const tonic = (0, _core.note)(name.substring(0, i));
    if (tonic.empty) {
        const n = (0, _core.note)(name);
        return n.empty ? [
            "",
            name
        ] : [
            n.name,
            ""
        ];
    }
    const type = name.substring(tonic.name.length + 1);
    return [
        tonic.name,
        type.length ? type : ""
    ];
}
var names = (0, _scaleType.names);
function get(src) {
    const tokens = Array.isArray(src) ? src : tokenize(src);
    const tonic = (0, _core.note)(tokens[0]).name;
    const st = (0, _scaleType.get)(tokens[1]);
    if (st.empty) return NoScale;
    const type = st.name;
    const notes = tonic ? st.intervals.map((i)=>(0, _core.transpose)(tonic, i)) : [];
    const name = tonic ? tonic + " " + type : type;
    return {
        ...st,
        name,
        type,
        tonic,
        notes
    };
}
var scale = (0, _core.deprecate)("Scale.scale", "Scale.get", get);
function detect(notes, options = {}) {
    const notesChroma = (0, _pcset.chroma)(notes);
    const tonic = (0, _core.note)(options.tonic ?? notes[0] ?? "");
    const tonicChroma = tonic.chroma;
    if (tonicChroma === void 0) return [];
    const pitchClasses = notesChroma.split("");
    pitchClasses[tonicChroma] = "1";
    const scaleChroma = (0, _collection.rotate)(tonicChroma, pitchClasses).join("");
    const match = (0, _scaleType.all)().find((scaleType)=>scaleType.chroma === scaleChroma);
    const results = [];
    if (match) results.push(tonic.name + " " + match.name);
    if (options.match === "exact") return results;
    extended(scaleChroma).forEach((scaleName)=>{
        results.push(tonic.name + " " + scaleName);
    });
    return results;
}
function scaleChords(name) {
    const s = get(name);
    const inScale = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>inScale(chord.chroma)).map((chord)=>chord.aliases[0]);
}
function extended(name) {
    const chroma2 = (0, _pcset.isChroma)(name) ? name : get(name).chroma;
    const isSuperset = (0, _pcset.isSupersetOf)(chroma2);
    return (0, _scaleType.all)().filter((scale2)=>isSuperset(scale2.chroma)).map((scale2)=>scale2.name);
}
function reduced(name) {
    const isSubset = (0, _pcset.isSubsetOf)(get(name).chroma);
    return (0, _scaleType.all)().filter((scale2)=>isSubset(scale2.chroma)).map((scale2)=>scale2.name);
}
function scaleNotes(notes) {
    const pcset = notes.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    const tonic = pcset[0];
    const scale2 = (0, _note.sortedUniqNames)(pcset);
    return (0, _collection.rotate)(scale2.indexOf(tonic), scale2);
}
function modeNames(name) {
    const s = get(name);
    if (s.empty) return [];
    const tonics = s.tonic ? s.notes : s.intervals;
    return (0, _pcset.modes)(s.chroma).map((chroma2, i)=>{
        const modeName = get(chroma2).name;
        return modeName ? [
            tonics[i],
            modeName
        ] : [
            "",
            ""
        ];
    }).filter((x)=>x[0]);
}
function getNoteNameOf(scale2) {
    const names2 = Array.isArray(scale2) ? scaleNotes(scale2) : get(scale2).notes;
    const chromas = names2.map((name)=>(0, _core.note)(name).chroma);
    return (noteOrMidi)=>{
        const currNote = typeof noteOrMidi === "number" ? (0, _core.note)((0, _note.fromMidi)(noteOrMidi)) : (0, _core.note)(noteOrMidi);
        const height = currNote.height;
        if (height === void 0) return void 0;
        const chroma2 = height % 12;
        const position = chromas.indexOf(chroma2);
        if (position === -1) return void 0;
        return (0, _note.enharmonic)(currNote.name, names2[position]);
    };
}
function rangeOf(scale2) {
    const getName = getNoteNameOf(scale2);
    return (fromNote, toNote)=>{
        const from = (0, _core.note)(fromNote).height;
        const to = (0, _core.note)(toNote).height;
        if (from === void 0 || to === void 0) return [];
        return (0, _collection.range)(from, to).map(getName).filter((x)=>x);
    };
}
function degrees(scaleName) {
    const { intervals, tonic } = get(scaleName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(scaleName) {
    const { intervals, tonic } = get(scaleName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var scale_default = {
    degrees,
    detect,
    extended,
    get,
    modeNames,
    names,
    rangeOf,
    reduced,
    scaleChords,
    scaleNotes,
    steps,
    tokenize,
    // deprecated
    scale
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbySg":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>time_signature_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "parse", ()=>parse);
var NONE = {
    empty: true,
    name: "",
    upper: void 0,
    lower: void 0,
    type: void 0,
    additive: []
};
var NAMES = [
    "4/4",
    "3/4",
    "2/4",
    "2/2",
    "12/8",
    "9/8",
    "6/8",
    "3/8"
];
function names() {
    return NAMES.slice();
}
var REGEX = /^(\d*\d(?:\+\d)*)\/(\d+)$/;
var CACHE = /* @__PURE__ */ new Map();
function get(literal) {
    const stringifiedLiteral = JSON.stringify(literal);
    const cached = CACHE.get(stringifiedLiteral);
    if (cached) return cached;
    const ts = build(parse(literal));
    CACHE.set(stringifiedLiteral, ts);
    return ts;
}
function parse(literal) {
    if (typeof literal === "string") {
        const [_, up2, low] = REGEX.exec(literal) || [];
        return parse([
            up2,
            low
        ]);
    }
    const [up, down] = literal;
    const denominator = +down;
    if (typeof up === "number") return [
        up,
        denominator
    ];
    const list = up.split("+").map((n)=>+n);
    return list.length === 1 ? [
        list[0],
        denominator
    ] : [
        list,
        denominator
    ];
}
var time_signature_default = {
    names,
    parse,
    get
};
var isPowerOfTwo = (x)=>Math.log(x) / Math.log(2) % 1 === 0;
function build([up, down]) {
    const upper = Array.isArray(up) ? up.reduce((a, b)=>a + b, 0) : up;
    const lower = down;
    if (upper === 0 || lower === 0) return NONE;
    const name = Array.isArray(up) ? `${up.join("+")}/${down}` : `${up}/${down}`;
    const additive = Array.isArray(up) ? up : [];
    const type = lower === 4 || lower === 2 ? "simple" : lower === 8 && upper % 3 === 0 ? "compound" : isPowerOfTwo(lower) ? "irregular" : "irrational";
    return {
        empty: false,
        name,
        type,
        upper,
        lower,
        additive
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGBM6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
class HelpContent {
    static #_ = this.CONTENT = `
  <h1>How to Play</h1>
  <p>
  Guess the Scale-dle in 6 tries.
  </p>

  <p>
  Possible scale types are:
  <a href="https://en.wikipedia.org/wiki/Major_scale" target="_blank">major</a>,
  <a href="https://en.wikipedia.org/wiki/Minor_scale" target="_blank">minor</a> (natural),
  <a href="https://en.wikipedia.org/wiki/Harmonic_minor_scale" target="_blank">harmonic minor</a>,
  <a href="https://en.wikipedia.org/wiki/Minor_scale#Melodic_minor_scale" target="_blank">melodic minor</a>,
  <a href="https://en.wikipedia.org/wiki/Dorian_mode#Renaissance_Dorian_anchor" target="_blank">dorian</a>,
  <a href="https://en.wikipedia.org/wiki/Phrygian_mode" target="_blank">phrygian</a>,
  <a href="https://en.wikipedia.org/wiki/Lydian_mode" target="_blank">lydian</a>,
  <a href="https://en.wikipedia.org/wiki/Mixolydian_mode" target="_blank">mixolydian</a>,
  <a href="https://en.wikipedia.org/wiki/Locrian_mode" target="_blank">locrian</a>,
  <a href="https://en.wikipedia.org/wiki/Pentatonic_scale#Major_pentatonic_scale" target="_blank">pentatonic</a>, and
  <a href="https://en.wikipedia.org/wiki/Octatonic_scale" target="_blank">octatonic</a> (whole-half and half-whole).
  </p>

  <p>
  In this game, all scales are 7 notes and ascending. For the octatonic scale, only the first 7 notes are used, and for the pentatonic scale, the 6th and 7th notes repeat the 1st and 2nd notes.
  </p>

  <p>
  Scale-dle was inspired by
  <a href="https://www.nytimes.com/games/wordle/">Wordle</a>
  and was created for the 2023 GitHub Game Off.
  </p>

  <p>
  Check out the code on <a href="https://github.com/seanyeh/scaledle">GitHub!</a>
  </p>
  `;
    view() {
        return (0, _mithrilDefault.default).trust(HelpContent.CONTENT);
    }
}
exports.default = HelpContent;

},{"mithril":"1zcoP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80DYI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _util = require("../Util");
var _utilDefault = parcelHelpers.interopDefault(_util);
class Keyboard {
    constructor(callback){
        this.callback = callback;
    }
    initShapes(ctx) {
        const width = ctx.canvas.clientWidth;
        const height = ctx.canvas.clientHeight;
        const keyWidth = width / 7;
        const offsets = [
            2 / 3,
            1 + 2 / 3,
            3 + 2 / 3,
            4 + 2 / 3,
            5 + 2 / 3
        ];
        this.blackKeys = offsets.map((offset)=>[
                offset * keyWidth,
                0,
                2 / 3 * keyWidth,
                height / 2
            ]);
        this.whiteKeys = Array(7).fill().map((_, i)=>[
                i * keyWidth,
                0,
                keyWidth,
                height
            ]);
    }
    _inBounds(px, py, x, y, w, h) {
        return px >= x && py >= y && px <= x + w && py <= y + h;
    }
    onclick(e) {
        const px = e.offsetX;
        const py = e.offsetY;
        let index = this.blackKeys.findIndex(([x, y, w, h])=>this._inBounds(px, py, x, y, w, h));
        if (index !== -1) return this.callback((0, _utilDefault.default).BLACK_NOTES[index]);
        index = this.whiteKeys.findIndex(([x, y, w, h])=>this._inBounds(px, py, x, y, w, h));
        if (index !== -1) return this.callback((0, _utilDefault.default).WHITE_NOTES[index]);
    }
    drawKeyboard(ctx) {
        this.initShapes(ctx);
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        // Draw white keys (only right edge)
        ctx.fillStyle = "black";
        this.whiteKeys.forEach(([x, y, w, h], i)=>{
            // Draw right edge
            ctx.beginPath();
            ctx.moveTo(x + w, 0);
            ctx.lineTo(x + w, y + h);
            ctx.stroke();
            // Draw letter
            ctx.font = "24px sans-serif";
            ctx.fillText((0, _utilDefault.default).WHITE_NOTES[i], x + w / 2, h - 30);
        });
        // Draw black keys
        this.blackKeys.forEach(([x, y, w, h], i)=>{
            ctx.fillStyle = "black";
            ctx.fillRect(x, y, w, h);
            // Draw letter
            ctx.fillStyle = "white";
            ctx.font = "16px sans-serif";
            ctx.fillText((0, _utilDefault.default).BLACK_NOTES[i], x + w / 2, 30);
            ctx.fillText((0, _utilDefault.default).BLACK_NOTES_FLAT[i], x + w / 2, 60);
        });
    }
    view() {
        const attrs = {
            oncreate: (vnode)=>{
                const ctx = vnode.dom.getContext("2d");
                this.drawKeyboard(ctx);
                vnode.dom.addEventListener("click", this.onclick.bind(this));
            }
        };
        return (0, _mithrilDefault.default)("div#canvas-wrapper", [
            (0, _mithrilDefault.default)("canvas[width=400][height=180]", attrs)
        ]);
    }
}
exports.default = Keyboard;

},{"mithril":"1zcoP","../Util":"fkKci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wMjtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _tonal = require("tonal");
var _util = require("../Util");
var _utilDefault = parcelHelpers.interopDefault(_util);
class Row {
    constructor(){
        this.cells = new Array(7).fill().map((_, i)=>new Cell(i));
    }
    compareWithAnswer(answerScale) {
        const answerMidis = (0, _utilDefault.default).toMidiArray(answerScale.notes);
        const guessMidis = (0, _utilDefault.default).toMidiArray(this.getNotes());
        return (0, _utilDefault.default).calculateGuess(guessMidis, answerMidis);
    }
    getNotes() {
        const octave = 5; // Doesn't matter
        const notes = this.cells.map((cell)=>(0, _tonal.Note).get(`${cell.value}${octave}`));
        return notes;
    }
    setValue(value) {
        const cell = this.nextEmptyCell();
        if (cell) cell.setValue(value);
    }
    displayResults(results) {
        this.cells.forEach((cell, i)=>cell.setStatus(results[i]));
    }
    clearLast() {
        const cell = this.lastCell();
        if (cell) cell.setValue(null);
    }
    getNextCellIndex() {
        for(let i = 0; i < this.cells.length; i++){
            if (this.cells[i].isEmpty()) return i;
        }
        return -1;
    }
    // Returns last filled cell
    lastCell() {
        const i = this.getNextCellIndex();
        if (i === -1) // All cells filled, so return last
        return this.cells[this.cells.length - 1];
        else if (i === 0) // All cells empty
        return;
        return this.cells[i - 1];
    }
    nextEmptyCell() {
        const i = this.getNextCellIndex();
        if (i === -1) return null;
        return this.cells[i];
    }
    isFilled() {
        return !this.nextEmptyCell();
    }
    view() {
        return (0, _mithrilDefault.default)("div.row", this.cells.map((box)=>(0, _mithrilDefault.default)(box)));
    }
}
exports.default = Row;
class Cell {
    static #_ = // Corresponding CSS classes
    this.STATUS_CLASSES = {
        "C": "correct",
        "W": "wrong-position",
        "X": "wrong",
        " ": "none"
    };
    constructor(column){
        this.column = column; // Used for css delay
        this.value = null;
        this.status = " ";
        this.flipped = false;
    }
    setValue(value) {
        this.value = value;
    }
    setStatus(status) {
        this.status = status;
        this.flipped = true;
    }
    isEmpty() {
        return this.value === null;
    }
    view() {
        return (0, _mithrilDefault.default)("div.cell", [
            (0, _mithrilDefault.default)(`div.delay${this.column}`, {
                class: this.flipped ? "inner-flipped" : "inner"
            }, [
                (0, _mithrilDefault.default)("div.front", this.value),
                (0, _mithrilDefault.default)("div.back", {
                    class: Cell.STATUS_CLASSES[this.status]
                }, this.value)
            ])
        ]);
    }
}

},{"mithril":"1zcoP","tonal":"h8GkW","../Util":"fkKci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4yLrY","lyqAI"], "lyqAI", "parcelRequire94c2")

//# sourceMappingURL=index.9d14e10e.js.map
