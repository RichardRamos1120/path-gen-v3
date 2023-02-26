/*! For license information please see 703.224d43ad.chunk.js.LICENSE.txt */
(self.webpackChunkpathgen_v3=self.webpackChunkpathgen_v3||[]).push([[703],{8703:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||u()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!==typeof Reflect&&Reflect,v=b.apply,T=b.construct;v||(v=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),T||(T=function(e,t){return r(e,o(t))});var N=D(Array.prototype.forEach),A=D(Array.prototype.pop),E=D(Array.prototype.push),w=D(String.prototype.toLowerCase),S=D(String.prototype.toString),_=D(String.prototype.match),k=D(String.prototype.replace),x=D(String.prototype.indexOf),L=D(String.prototype.trim),O=D(RegExp.prototype.test),C=R(TypeError);function D(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function R(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return T(e,n)}}function M(e,t,n){n=n||w,m&&m(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function I(e){var t,n=y(null);for(t in e)!0===v(s,e,[t])&&(n[t]=e[t]);return n}function F(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return D(n.get);if("function"===typeof n.value)return D(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var U=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),z=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),G=h(["#text"]),W=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Y=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),X=g(/\${[\w\W]*}/gm),Z=g(/^data-[\-\w.\u00B7-\uFFFF]/),J=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=g(/^(?:\w+script|data):/i),te=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=g(/^html$/i),re=function(){return"undefined"===typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),n=function(e){return ae(e)};if(n.version="2.4.4",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=u.prototype,b=F(y,"cloneNode"),v=F(y,"nextSibling"),T=F(y,"childNodes"),D=F(y,"parentNode");if("function"===typeof l){var R=a.createElement("template");R.content&&R.content.ownerDocument&&(a=R.content.ownerDocument)}var ie=oe(g,r),le=ie?ie.createHTML(""):"",ce=a,ue=ce.implementation,se=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=r.importNode,de={};try{de=I(a).documentMode?a.documentMode:{}}catch(Rt){}var he={};n.isSupported="function"===typeof D&&ue&&"undefined"!==typeof ue.createHTMLDocument&&9!==de;var ge,ye,be=K,ve=V,Te=X,Ne=Z,Ae=J,Ee=ee,we=te,Se=Q,_e=null,ke=M({},[].concat(o(U),o(H),o(z),o(B),o(G))),xe=null,Le=M({},[].concat(o(W),o(q),o(Y),o($))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,De=null,Re=!0,Me=!0,Ie=!1,Fe=!0,Ue=!1,He=!1,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!1,We=!0,qe=!1,Ye="user-content-",$e=!0,Ke=!1,Ve={},Xe=null,Ze=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Je=null,Qe=M({},["audio","video","img","source","image","track"]),et=null,tt=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",at=ot,it=!1,lt=null,ct=M({},[nt,rt,ot],S),ut=["application/xhtml+xml","text/html"],st="text/html",mt=null,ft=a.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},dt=function(t){mt&&mt===t||(t&&"object"===e(t)||(t={}),t=I(t),ge=ge=-1===ut.indexOf(t.PARSER_MEDIA_TYPE)?st:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===ge?S:w,_e="ALLOWED_TAGS"in t?M({},t.ALLOWED_TAGS,ye):ke,xe="ALLOWED_ATTR"in t?M({},t.ALLOWED_ATTR,ye):Le,lt="ALLOWED_NAMESPACES"in t?M({},t.ALLOWED_NAMESPACES,S):ct,et="ADD_URI_SAFE_ATTR"in t?M(I(tt),t.ADD_URI_SAFE_ATTR,ye):tt,Je="ADD_DATA_URI_TAGS"in t?M(I(Qe),t.ADD_DATA_URI_TAGS,ye):Qe,Xe="FORBID_CONTENTS"in t?M({},t.FORBID_CONTENTS,ye):Ze,Ce="FORBID_TAGS"in t?M({},t.FORBID_TAGS,ye):{},De="FORBID_ATTR"in t?M({},t.FORBID_ATTR,ye):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,Re=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ue=t.SAFE_FOR_TEMPLATES||!1,He=t.WHOLE_DOCUMENT||!1,Be=t.RETURN_DOM||!1,je=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,Pe=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,Se=t.ALLOWED_URI_REGEXP||Se,at=t.NAMESPACE||ot,t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),je&&(Be=!0),Ve&&(_e=M({},o(G)),xe=[],!0===Ve.html&&(M(_e,U),M(xe,W)),!0===Ve.svg&&(M(_e,H),M(xe,q),M(xe,$)),!0===Ve.svgFilters&&(M(_e,z),M(xe,q),M(xe,$)),!0===Ve.mathMl&&(M(_e,B),M(xe,Y),M(xe,$))),t.ADD_TAGS&&(_e===ke&&(_e=I(_e)),M(_e,t.ADD_TAGS,ye)),t.ADD_ATTR&&(xe===Le&&(xe=I(xe)),M(xe,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&M(et,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Xe===Ze&&(Xe=I(Xe)),M(Xe,t.FORBID_CONTENTS,ye)),$e&&(_e["#text"]=!0),He&&M(_e,["html","head","body"]),_e.table&&(M(_e,["tbody"]),delete Ce.tbody),h&&h(t),mt=t)},ht=M({},["mi","mo","mn","ms","mtext"]),gt=M({},["foreignobject","desc","title","annotation-xml"]),yt=M({},["title","style","font","a","script"]),bt=M({},H);M(bt,z),M(bt,P);var vt=M({},B);M(vt,j);var Tt=function(e){var t=D(e);t&&t.tagName||(t={namespaceURI:at,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===rt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===nt?"svg"===n&&("annotation-xml"===r||ht[r]):Boolean(bt[n]):e.namespaceURI===nt?t.namespaceURI===ot?"math"===n:t.namespaceURI===rt?"math"===n&&gt[r]:Boolean(vt[n]):e.namespaceURI===ot?!(t.namespaceURI===rt&&!gt[r])&&!(t.namespaceURI===nt&&!ht[r])&&!vt[n]&&(yt[n]||!bt[n]):!("application/xhtml+xml"!==ge||!lt[e.namespaceURI]))},Nt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Rt){try{e.outerHTML=le}catch(Rt){e.remove()}}},At=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Rt){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(Be||je)try{Nt(t)}catch(Rt){}else try{t.setAttribute(e,"")}catch(Rt){}},Et=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=_(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&at===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(at===ot)try{t=(new d).parseFromString(o,ge)}catch(Rt){}if(!t||!t.documentElement){t=ue.createDocument(at,"template",null);try{t.documentElement.innerHTML=it?le:o}catch(Rt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),at===ot?fe.call(t,He?"html":"body")[0]:He?t.documentElement:i},wt=function(e){return se.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},St=function(e){return e instanceof p&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof f)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},_t=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},kt=function(e,t,r){he[e]&&N(he[e],(function(e){e.call(n,t,r,mt)}))},xt=function(e){var t;if(kt("beforeSanitizeElements",e,null),St(e))return Nt(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return Nt(e),!0;var r=ye(e.nodeName);if(kt("uponSanitizeElement",e,{tagName:r,allowedTags:_e}),e.hasChildNodes()&&!_t(e.firstElementChild)&&(!_t(e.content)||!_t(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return Nt(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return Nt(e),!0;if(!_e[r]||Ce[r]){if(!Ce[r]&&Ot(r)){if(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if($e&&!Xe[r]){var o=D(e)||e.parentNode,a=T(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return Nt(e),!0}return e instanceof u&&!Tt(e)?(Nt(e),!0):"noscript"!==r&&"noembed"!==r||!O(/<\/no(script|embed)/i,e.innerHTML)?(Ue&&3===e.nodeType&&(t=e.textContent,t=k(t,be," "),t=k(t,ve," "),t=k(t,Te," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),kt("afterSanitizeElements",e,null),!1):(Nt(e),!0)},Lt=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in a||n in ft))return!1;if(Me&&!De[t]&&O(Ne,t));else if(Re&&O(Ae,t));else if(!xe[t]||De[t]){if(!(Ot(e)&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&O(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(et[t]);else if(O(Se,k(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!Je[e])if(Ie&&!O(Ee,k(n,we,"")));else if(n)return!1;return!0},Ot=function(e){return e.indexOf("-")>0},Ct=function(t){var r,o,a,i;kt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:L(r.value),a=ye(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,kt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(At(s,t),c.keepAttr))if(Fe||!O(/\/>/i,o)){Ue&&(o=k(o,be," "),o=k(o,ve," "),o=k(o,Te," "));var f=ye(t.nodeName);if(Lt(f,a,o)){if(!qe||"id"!==a&&"name"!==a||(At(s,t),o=Ye+o),ie&&"object"===e(g)&&"function"===typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=ie.createHTML(o);break;case"TrustedScriptURL":o=ie.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),A(n.removed)}catch(Rt){}}}else At(s,t)}kt("afterSanitizeAttributes",t,null)}},Dt=function e(t){var n,r=wt(t);for(kt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)kt("uponSanitizeShadowNode",n,null),xt(n)||(n.content instanceof i&&e(n.content),Ct(n));kt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,u,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((it=!o)&&(o="\x3c!--\x3e"),"string"!==typeof o&&!_t(o)){if("function"!==typeof o.toString)throw C("toString is not a function");if("string"!==typeof(o=o.toString()))throw C("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof o)return t.toStaticHTML(o);if(_t(o))return t.toStaticHTML(o.outerHTML)}return o}if(ze||dt(f),n.removed=[],"string"===typeof o&&(Ke=!1),Ke){if(o.nodeName){var p=ye(o.nodeName);if(!_e[p]||Ce[p])throw C("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=Et("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Be&&!Ue&&!He&&-1===o.indexOf("<"))return ie&&Ge?ie.createHTML(o):o;if(!(a=Et(o)))return Be?null:Ge?le:""}a&&Pe&&Nt(a.firstChild);for(var d=wt(Ke?o:a);u=d.nextNode();)3===u.nodeType&&u===s||xt(u)||(u.content instanceof i&&Dt(u.content),Ct(u),s=u);if(s=null,Ke)return o;if(Be){if(je)for(m=me.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return(xe.shadowroot||xe.shadowrootmod)&&(m=pe.call(r,m,!0)),m}var h=He?a.outerHTML:a.innerHTML;return He&&_e["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&O(ne,a.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+h),Ue&&(h=k(h,be," "),h=k(h,ve," "),h=k(h,Te," ")),ie&&Ge?ie.createHTML(h):h},n.setConfig=function(e){dt(e),ze=!0},n.clearConfig=function(){mt=null,ze=!1},n.isValidAttribute=function(e,t,n){mt||dt({});var r=ye(e),o=ye(t);return Lt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(he[e]=he[e]||[],E(he[e],t))},n.removeHook=function(e){if(he[e])return A(he[e])},n.removeHooks=function(e){he[e]&&(he[e]=[])},n.removeAllHooks=function(){he={}},n}return ae()}()}}]);
//# sourceMappingURL=703.224d43ad.chunk.js.map