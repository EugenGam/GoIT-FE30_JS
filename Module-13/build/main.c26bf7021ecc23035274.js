(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+4e/":function(e,t,n){},L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("+4e/"),n("RtS0"),n("JBxO"),n("FdtR"),n("3dw1");var i={pixaby:"https://pixabay.com/api/?image_type=photo&orientation=horizontal",key:"&key=16377797-6d9ebd48227d507be381d4be6",form:document.querySelector(".search-form"),list:document.querySelector(".gallery"),btn:document.querySelector(".findBtn"),input:document.querySelector(".inpt"),gallery:document.querySelector(".js-gallery"),addMore:document.querySelector(".add__more "),up:document.querySelector(".up")},o=1,a=0;var c="",s=function(){console.log(i.input.value),i.input.value!==c&&(c=i.input.value,i.gallery.innerHTML="",i.up.classList.remove("visible"),i.addMore.classList.remove("visible"),a=0),fetch(i.pixaby+"&q="+i.input.value+"&page="+o+"&per_page=12"+i.key).then((function(e){return e.json()})).then((function(e){return function(e){e.hits.forEach((function(e){i.gallery.insertAdjacentHTML("beforeend",'<li class="gallery__item">\n    <a\n      class="gallery__link"\n      href="'+e.largeImageURL+'"\n    >\n      <img\n        class="gallery__image"\n        src="'+e.webformatURL+'"\n        data-source="'+e.largeImageURL+'"\n        alt="'+e.tags+'"\n      />\n    </a>\n    <div class="stats">\n      <p class="stats-item">\n        <i class="material-icons">thumb_up</i>\n        '+e.likes+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">visibility</i>\n        '+e.views+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">comment</i>\n        '+e.comments+'\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">cloud_download</i>\n        '+e.downloads+"\n      </p>\n    </div>\n  </li>")}))}(e)})).then((function(e){window.scrollTo(0,a),i.up.classList.add("visible"),i.addMore.classList.add("visible"),a+=1e3})),o+=1};i.btn.addEventListener("click",s),i.addMore.addEventListener("click",s),i.up.addEventListener("click",(function(){window.scrollTo(0,0)})),i.input.addEventListener("keydown",(function(e){13!=e.which&&13!=e.keyCode||(e.preventDefault(),s())}));n("e/wL")},"e/wL":function(e,t){function n(){document.querySelector("div.lightbox").classList.remove("is-open"),document.querySelector(".lightbox__image").src=""}document.querySelector(".js-gallery").addEventListener("click",(function(e){e.preventDefault();var t=e.target.dataset.source;document.querySelector("div.lightbox").classList.add("is-open"),document.querySelector(".lightbox__image").src=""+t})),document.querySelector(".lightbox__button").addEventListener("click",n),document.querySelector(".lightbox__overlay").addEventListener("click",n),document.addEventListener("keydown",(function(e){"Escape"===e.key&&n()}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c26bf7021ecc23035274.js.map