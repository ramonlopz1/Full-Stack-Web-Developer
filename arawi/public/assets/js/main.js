(()=>{var e={507:()=>{(()=>{let e=0;const t=["Texto 1","Texto 2","Texto 3"],n=["Span 1","Span 2","Span 3"],s=document.createElement("h1"),a=document.createElement("span"),r=document.querySelectorAll("#section-translate input[type=radio]");s.innerHTML=t[e],a.innerHTML=n[e],r[e].checked=!0,$("#section-translate").css("background-image",`url(assets/images/section-translate/${e}.jpg)`),$("#section-translate").prepend(a),$("#section-translate").prepend(s),r.forEach(((e,r)=>{e.onclick=()=>{$("#section-translate").css("background-image",`url(assets/images/section-translate/${r}.jpg)`),s.innerHTML=t[r],a.innerHTML=n[r]}})),setInterval((()=>{e++,e>=3&&(e=0),s.innerHTML=t[e],a.innerHTML=n[e],r[e].checked=!0,$("#section-translate").css("background-image",`url(assets/images/section-translate/${e}.jpg)`)}),4e3)})()},892:(e,t,n)=>{"use strict";n(507)}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n(892);n(507)})();