document.querySelectorAll("li > ul").forEach(function(e){var t=e.parentElement,n=document.createElement("span");n.textContent=t.childNodes[0].textContent.trim(),t.childNodes[0].textContent="",t.prepend(n),n.addEventListener("click",function(){var e=t.querySelector("ul");if(e){var n=e.style.display;e.style.display="none"===n?"block":"none"}})});
//# sourceMappingURL=index.61215cae.js.map
