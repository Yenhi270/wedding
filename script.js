// slider
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 3000);

// popup ảnh
let imgs = document.querySelectorAll(".gallery img");
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");

imgs.forEach(img => {
  img.onclick = () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  };
});

if(popup){
  popup.onclick = () => popup.style.display = "none";
}

// animation
let fade = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  fade.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});