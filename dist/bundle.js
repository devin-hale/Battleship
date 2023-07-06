(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100lvh;\n    width: 100lvw;\n    background-color: navy;\n    position: relative;\n}\n\n#header {\n    background-color: azure;\n}\n\n#game {\n    background-color: rgba(0, 0, 94, 0.514);\n    min-width: 350px;\n    max-width: 500px;\n    width: 60%;\n    min-height: 500px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n.aiDiv, .playerDiv {\n    display: grid;\n    grid-template: repeat(10, 1fr)/repeat(10, 1fr);\n    padding: 5px;\n    height: 50%;\n    width: 96%;\n}\n\n.coordSquare {\n    border: 1px solid white;\n    padding: 2px;\n    transition: .1s;\n}\n\n\n#footer {\n    background-color: blue;\n}\n\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),u=n.n(l),d=n(589),p=n.n(d),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=e=>{let t=document.getElementById("game"),n=document.createElement("div");n.classList="aiDiv",e.board.forEach((e=>{let t=document.createElement("div");t.id=`AI:${e.squareID}`,t.classList="coordAISquare coordSquare",e.revealed?e.hitMiss?t.style.backgroundColor="red":t.style.backgroundColor="":t.style.backgroundColor="darkgrey",n.appendChild(t)})),t.appendChild(n)},g=e=>{let t=document.getElementById("game"),n=document.createElement("div");n.classList="playerDiv",e.board.forEach((e=>{let t=document.createElement("div");t.id=`P:${e.squareID}`,t.classList="coordPlayerSquare coordSquare",e.occupied&&(e.shipLink.isSunk||(t.style.backgroundColor="green"),e.hitMiss&&(t.style.backgroundColor="orange"),e.shipLink.isSunk&&(t.style.backgroundColor="red")),n.appendChild(t)})),t.appendChild(n)},v=(e,t)=>{document.getElementById("game"),t.board.forEach((e=>{let t=document.getElementById(`P:${e.squareID}`);e.occupied?(t.style.backgroundColor="green",e.hitMiss&&(t.style.backgroundColor="red")):t.style.backgroundColor=""}))},y=e=>{const t=e;let n=[];for(let e=0;e<=99;e++)n.push({squareID:e,occupied:!1,revealed:!1,hitMiss:null,shipLink:null});const r=(e,t)=>{switch(e.orientation){case 0:for(let r=0;r<e.length;r++){if(t-10*r<0)return!1;if(n[t-10*r].occupied)return!1}return t-10*(e.length-1)>=0;case 1:for(let r=0;r<e.length;r++){if(t+r>99)return!1;if(n[t+r].occupied)return!1}return Math.floor((t+(e.length-1))/10)===Math.floor(t/10);case 2:for(let r=0;r<e.length;r++){if(t+10*r>99)return!1;if(n[t+10*r].occupied)return!1}return t+10*(e.length-1)<100;case 3:for(let r=0;r<e.length;r++){if(t-r<0)return!1;if(n[t-r].occupied)return!1}return Math.floor((t-(e.length-1))/10)===Math.floor(t/10)}},o=e=>{n[e].revealed?n[e].revealed=!1:n[e].revealed=!0};return{owner:t,board:n,placementCheck:r,placeShip:(e,t)=>{if(r(e,t))switch(e.isPlaced=!0,e.orientation){case 0:for(let r=0;r<e.length;r++)n[t-10*r].occupied=!0,n[t-10*r].shipLink=e;return"Valid";case 1:for(let r=0;r<e.length;r++)n[t+r].occupied=!0,n[t+r].shipLink=e;return"Valid";case 2:for(let r=0;r<e.length;r++)n[t+10*r].occupied=!0,n[t+10*r].shipLink=e;return"Valid";case 3:for(let r=0;r<e.length;r++)n[t-r].occupied=!0,n[t-r].shipLink=e;return"Valid"}return"Invalid Placement"},isSunk:e=>!0===n[e].occupied?!0===n[e].isSunk:"No ship found at coordinate.",allSunk:()=>{let e=n.filter((e=>!0===e.occupied)),t=[];e.forEach((e=>{t.includes(e)||t.push(e)}));let r=0;return t.forEach((e=>{e.isSunk||r++})),0==r},revealToggle:o,receiveHit:e=>{if(n[e].revealed)return"You've already attacked this coordinate.";if(o(e),!0===n[e].occupied){if(!1===n[e].shipLink.isSunk){const t=n[e].shipLink.shipID;return n.filter((e=>!0===e.occupied&&e.shipLink.shipID===t)),n[e].shipLink.hitMiss=!0,n[e].shipLink.hits++,n[e].shipLink.hits==n[e].shipLink.length&&(n[e].shipLink.isSunk=!0),"Hit!"}return"Ship is already sunk."}return"Miss!"}}},k=e=>{document.getElementById("rotateButton").removeEventListener("click",(t=>{ships[e].orientation++,ships[e].orientation>3&&(ships[e].orientation=0)}))},b=(e,t)=>{let n=document.getElementById("rotateButton");e[t].orientation=0,n.addEventListener("click",(n=>{e[t].orientation++,e[t].orientation>3&&(e[t].orientation=0)}))},I=e=>({length:e,orientation:null,hits:0,shipID:1,isPlaced:!1,isSunk:!1,shipHit(){this.hits++},changeOrientation(e){this.orientation=e}});let E=y("AI"),L=y("Player"),x=(()=>{let e=[],t=I(5),n=I(4),r=I(3),o=I(3),i=I(2);return e.push(t,n,r,o,i),{ships:e,gameboard:null,takeTurn:(e,t)=>{e.receiveHit(t)},aiTurn:e=>{for(;;){let t=Math.floor(99*Math.random());if(!e.board[t].revealed)return e.receiveHit(t),"Turn Complete."}}}})();m(E),g(L),((e,t,n)=>{let r=0;b(e,r),t.board.forEach((n=>{let o=document.getElementById(`P:${n.squareID}`);o.addEventListener("mouseenter",(i=>{let a=[];switch(a=[],a.push(o),e[r].orientation){case 0:for(let t=1;t<e[r].length;t++)n.squareID-10*t>0&&a.push(document.getElementById("P:"+(n.squareID-10*t)));break;case 1:for(let t=1;t<e[r].length;t++)Math.floor((n.squareID+t)/10)===Math.floor(n.squareID/10)&&a.push(document.getElementById(`P:${n.squareID+t}`));break;case 2:for(let t=1;t<e[r].length;t++)n.squareID+10*t<99&&a.push(document.getElementById(`P:${n.squareID+10*t}`));break;case 3:for(let t=1;t<e[r].length;t++)Math.floor((n.squareID-t)/10)===Math.floor(n.squareID/10)&&a.push(document.getElementById("P:"+(n.squareID-t)))}a.forEach((o=>{t.placementCheck(e[r],n.squareID)?o.style.backgroundColor="green":o.style.backgroundColor="red"}))})),o.addEventListener("mouseout",(()=>{v(0,t)}))})),t.board.forEach((o=>{let i=document.getElementById(`P:${o.squareID}`);i.addEventListener("click",(n=>{t.placementCheck(e[r],o.squareID)&&(t.placeShip(e[r],o.squareID),v(0,t),r++,r<=4&&(k(r),b(e,r)))})),i.addEventListener("click",(()=>{r>4&&(k(r),document.getElementById("rotateButton").remove(),((e,t)=>{document.getElementById("game").innerHTML="",m(e),g(t)})(n,t))}))}))})(x.ships,L,E)})()})();