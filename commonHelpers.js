import{S as u}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(o){const r="https://pixabay.com/api/",n="43229281-da9ce3bce46360bd3cf91ebb8",i=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f(o){return o.map(({webformatURL:r,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:a})=>`
      <li><a class="modal" href="${n}"><img src="${r}" alt="${i}">
      <div>
        <h2>Likes <p>${e}</p></h2>
        <h2>Views <p></p>${t}</h2>
        <h2>Comments <p>${s}</p></h2>
        <h2>Downloads <p>${a}</p></h2>
      </div>
      </a>
      </li>`).join("")}const m=document.querySelector(".js-form"),c=document.querySelector(".js-list");m.addEventListener("submit",p);function p(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim().toLowerCase();l(r).then(n=>{if(!n.hits.length){c.innerHTML="",alert("no image");return}c.innerHTML=f(n.hits),new u(".gallery a")}),o.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
