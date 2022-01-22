(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>z});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),s=r.n(c),d=new URL(r(843),r.b),l=new URL(r(499),r.b),u=new URL(r(728),r.b),p=new URL(r(118),r.b),m=new URL(r(842),r.b),h=i()(a()),f=s()(d),v=s()(l),g=s()(u),b=s()(p),x=s()(m);h.push([e.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-image: url("+f+');\r\n  background-position: center;\r\n  background-size: cover, cover, cover, cover, cover, cover, cover, cover, cover,\r\n    cover;\r\n  background-attachment: fixed;\r\n  max-width: 100vw;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.header {\r\n  border-bottom: 2px solid #c59d5f;\r\n  color: goldenrod;\r\n  font-weight: 600;\r\n  font-size: 2em;\r\n  width: 100vw;\r\n  height: 20vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.mainContentContainer {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.tabs {\r\n  padding: 10px;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.tabs:hover {\r\n  border-bottom: goldenrod 1px solid;\r\n  font-size: 33px;\r\n  cursor: pointer;\r\n}\r\n\r\n.containers {\r\n  height: 60vh;\r\n  width: 70vw;\r\n  background-color: #00000099;\r\n  border-radius: 10px;\r\n}\r\n\r\n.homeContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menuContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  align-content: space-around;\r\n}\r\n\r\n.mainText {\r\n  font-family: "Marcellus SC", serif;\r\n  color: goldenrod;\r\n  font-size: 4em;\r\n  border-bottom: 2px solid #c59d5f;\r\n  padding: 0 20px 20px 20px;\r\n}\r\n\r\n.menuBtn {\r\n  color: black;\r\n  background-color: #c59d5f;\r\n  width: 240px;\r\n  height: 80px;\r\n  font-size: 30px;\r\n  border-color: #c59d5f;\r\n  border-style: none;\r\n  margin-top: 20px;\r\n  font-family: "Times New Roman", Times, serif;\r\n}\r\n\r\n.menuBtn:hover {\r\n  cursor: pointer;\r\n  background-color: black;\r\n  color: #c59d5f;\r\n}\r\n\r\n\r\n.pizzaContainer1,\r\n.pizzaContainer2,\r\n.pizzaContainer3,\r\n.pizzaContainer4 {\r\n  height: 28vh;\r\n  width: 33vw;\r\n  border: 1px solid #c59d5f;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.pizzaTxt1,\r\n.pizzaTxt2,\r\n.pizzaTxt3,\r\n.pizzaTxt4 {\r\n  color: white;\r\n  font-size: 1.7rem;\r\n  max-width: 15vw;\r\n  align-self: flex-start;\r\n  margin-top: 2vh\r\n}\r\n.pizzaImg1 {\r\n  background-image: url('+v+");\r\n  width: 15vw;\r\n  height: 25vh;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  background-size: 115%;\r\n  background-repeat: no-repeat;\r\n}\r\n.pizzaImg2 {\r\n  background-image: url("+g+");\r\n  width: 15vw;\r\n  height: 25vh;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  background-size: 200%;\r\n  background-repeat: no-repeat;\r\n}\r\n.pizzaImg3 {\r\n  background-image: url("+b+");\r\n  width: 15vw;\r\n  height: 25vh;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  background-size: 140%;\r\n  background-repeat: no-repeat;\r\n}\r\n.pizzaImg4 {\r\n  background-image: url("+x+");\r\n  width: 15vw;\r\n  height: 25vh;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  background-size: 120%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.pizzaContainer1:hover,\r\n.pizzaContainer2:hover,\r\n.pizzaContainer3:hover,\r\n.pizzaContainer4:hover {\r\n  border:2px solid goldenrod;\r\n  cursor: pointer;\r\n}\r\n\r\n.loremIpsum {\r\n  color: white;\r\n  font-size: 1.3rem;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  display: flex;\r\n  align-items: center;\r\n  width: inherit;\r\n  height: inherit;\r\n  padding: 30px;\r\n}\r\n.footer {\r\n  height: 10vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 2px solid #c59d5f;\r\n  color: #c59d5f;\r\n  font-size: 25px;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n",""]);const z=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=r(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);n[c].references--}for(var s=t(e,a),d=0;d<o.length;d++){var l=r(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},499:(e,n,r)=>{e.exports=r.p+"61ac35ed0d7f3e8aa9d7.jpg"},842:(e,n,r)=>{e.exports=r.p+"2e68a53c5ee04736694a.jpg"},728:(e,n,r)=>{e.exports=r.p+"b49083b14e715d89d49b.jpg"},843:(e,n,r)=>{e.exports=r.p+"5c256fbba125259668db.jpg"},118:(e,n,r)=>{e.exports=r.p+"3d79bc343d9fcf7e93ad.jpg"}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{const e=document.createElement("div");e.classList.add("mainContentContainer");const n=function(){e.innerHTML="";const n=document.createElement("div");n.classList.add("menuContainer","containers"),e.appendChild(n);for(let e=1;e<=4;e++){const r=document.createElement("div");r.classList.add(`pizzaContainer${e}`),n.appendChild(r);const t=document.createElement("div");t.classList.add(`pizzaImg${e}`),r.appendChild(t);const a=document.createElement("div");a.classList.add(`pizzaTxt${e}`),r.appendChild(a)}function r(e,n){document.querySelector(`.pizzaTxt${e}`).innerHTML=n}r(1,'<span style="color:goldenrod; font-weight: bold">PEPPERONI</span> <br/> mozzarella, tomate, folhas e pepperoni'),r(2,'<span style="color:goldenrod; font-weight: bold">MARGHERITA</span> <br/> mozzarella, rodelas de tomate e manjericão'),r(3,'<span style="color:goldenrod; font-weight: bold">PORTUGUESA</span> <br/> mozzarella, tomate, folhas e pepperoni'),r(4,'<span style="color:goldenrod; font-weight: bold">CALABRESA</span> <br/> mozzarella, tomate, folhas e pepperoni')},t=function(){e.innerHTML="";const r=document.createElement("div");r.classList.add("homeContainer","containers"),e.appendChild(r);const t=document.createElement("div");t.classList.add("mainText"),t.innerText="L'arte della pizza",r.appendChild(t);const a=document.createElement("button");a.classList.add("menuBtn"),a.textContent="VER MENU",r.appendChild(a),a.addEventListener("click",n)};var a=r(379),o=r.n(a),i=r(795),c=r.n(i),s=r(569),d=r.n(s),l=r(565),u=r.n(l),p=r(216),m=r.n(p),h=r(589),f=r.n(h),v=r(426),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),o()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.querySelector("#content"),r=document.createElement("div"),a=document.createElement("div");a.classList.add("tabs","home"),a.innerText="HOME",r.appendChild(a);const o=document.createElement("div");o.classList.add("tabs","menu"),o.innerText="MENU",r.appendChild(o);const i=document.createElement("div");i.classList.add("tabs","about"),i.innerText="SOBRE",r.appendChild(i);const c=document.createElement("div");c.classList.add("tabs","contact"),c.innerText="CONTATO",r.appendChild(c),r.classList.add("header"),n.appendChild(r),n.appendChild(e),t();const s=document.createElement("div");s.classList.add("footer"),s.innerText="Developed by: Bruno Osanes",n.appendChild(s)}();const b=document.querySelector(".home"),x=document.querySelector(".menu"),z=document.querySelector(".about"),y=document.querySelector(".contact");b.addEventListener("click",t),x.addEventListener("click",n),z.addEventListener("click",(function(){e.innerHTML="";const n=document.createElement("div");n.classList.add("sobreContainer","containers"),e.appendChild(n);const r=document.createElement("div");r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum turpis vel mollis. Nulla ac mauris pulvinar, vestibulum mi a, dictum elit. Proin tempor, eros vel pharetra consectetur, nisl diam condimentum purus, ac accumsan nisi nisl in neque. Mauris pellentesque magna eget massa congue tempor maximus aliquam quam. Phasellus suscipit auctor convallis. In hac habitasse platea dictumst. Nulla facilisi. Nullam lectus nunc, dictum quis urna at, aliquet vulputate ex. Donec cursus laoreet ante, non volutpat orci feugiat a. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum turpis vel mollis. Nulla ac mauris pulvinar, vestibulum mi a, dictum elit. Proin tempor, eros vel pharetra consectetur, nisl diam condimentum purus, ac accumsan nisi nisl in neque. Mauris pellentesque magna eget massa congue tempor maximus aliquam quam. Phasellus suscipit auctor convallis. In hac habitasse platea dictumst. Nulla facilisi. Nullam lectus nunc, dictum quis urna at, aliquet vulputate ex. Donec cursus laoreet ante, non volutpat orci feugiat a.",r.classList.add("loremIpsum"),n.appendChild(r)})),y.addEventListener("click",(function(){e.innerHTML="";const n=document.createElement("div");n.classList.add("ContatoContainer","containers"),e.appendChild(n);const r=document.createElement("div");r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum turpis vel mollis. Nulla ac mauris pulvinar, vestibulum mi a, dictum elit. Proin tempor, eros vel pharetra consectetur, nisl diam condimentum purus, ac accumsan nisi nisl in neque. Mauris pellentesque magna eget massa congue tempor maximus aliquam quam. Phasellus suscipit auctor convallis. In hac habitasse platea dictumst. Nulla facilisi. Nullam lectus nunc, dictum quis urna at, aliquet vulputate ex. Donec cursus laoreet ante, non volutpat orci feugiat a.",r.classList.add("loremIpsum"),n.appendChild(r)}))})()})();