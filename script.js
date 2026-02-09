function scrollToGift() {
  document.getElementById("giftSection").scrollIntoView({ behavior: "smooth" });
}

// Floating emojis: chocolates & hearts
function createFloating(icon) {
  const el = document.createElement("div");
  el.textContent = icon;
  el.style.left = Math.random()*100 + "vw";
  el.style.bottom = "-20px";
  el.style.fontSize = (Math.random()*24+18) + "px";
  el.style.opacity = 0.8;
  document.body.appendChild(el);
  setTimeout(()=> el.remove(), 7000);
}

// Start floating on gift section
if(document.querySelector(".section2")) {
  setInterval(()=> createFloating("🍫"), 600);
  setInterval(()=> createFloating("❤️"), 800);
  setInterval(()=> createFloating("💖"), 1000);
}

// Chocolate hearts raining for Section 1
function createChocolateHeart() {
  const el = document.createElement("div");
  el.textContent = "🍫";
  el.style.position = "absolute";
  el.style.left = Math.random()*100 + "vw";
  el.style.top = "-20px";
  el.style.fontSize = (Math.random()*24+14) + "px";
  el.style.opacity = 0.8;
  document.querySelector(".chocolate-hearts").appendChild(el);
  setTimeout(()=> el.remove(), 5000);
}
setInterval(createChocolateHeart, 300);

// Rotating wishes
const wishes = document.querySelectorAll("#wishes p");
let current = 0;
setInterval(() => {
  wishes.forEach((w,i) => w.style.display = "none");
  wishes[current].style.display = "block";
  current = (current + 1) % wishes.length;
}, 4000);
