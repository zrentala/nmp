const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e) => {
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// hover
const parentBgEl = document.querySelector(".profile-section");
const childEls = document.querySelectorAll(".profiles span");
const textEl = document.querySelector(".desc-container");

childEls.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    const id = el.getAttribute("data-id");

    const bgEl = parentBgEl.querySelector(`.id-${id}`);
    const descEl = parentBgEl.querySelector(`.desc-${id}`);
    console.log(bgEl);

    parentBgEl.querySelectorAll("p").forEach((p) => {
        p.style.display = "none";
        p.style.animation = "";
      });

    parentBgEl.querySelectorAll("img").forEach((img) => {
      img.style.display = "none";
      img.style.animation = "";
    });
    bgEl.style.display = "block";
    bgEl.style.animation = "anima 1s ease forwards";
    descEl.style.display = "block";
    descEl.style.animation = "anima 1s ease forwards";
  });
});
