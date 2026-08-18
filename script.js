const intro = document.getElementById("intro");
const memoryCard = document.getElementById("memoryCard");
const finalCard = document.getElementById("finalCard");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");
const memoryImage = document.getElementById("memoryImage");
const photoWrap = document.querySelector(".photo-wrap");
const smallTitle = document.getElementById("smallTitle");
const mainTitle = document.getElementById("mainTitle");
const message = document.getElementById("message");
const dots = [...document.querySelectorAll(".dot")];

const slides = [
  {
    image: "graduation.jpg",
    small: "A BEAUTIFUL MEMORY",
    title: "Every moment becomes a memory.",
    text: "No matter how busy life gets, there are people and moments that make everything feel a little brighter."
  },
  {
    image: "flowers.jpg",
    small: "A LITTLE FLOWER FOR YOU",
    title: "Some feelings are better shown than explained.",
    text: "So here's a small bouquet of flowers, wrapped in a little animation, as a reminder that you are appreciated."
  },
  {
    image: "graduation.jpg",
    small: "ONE MORE THING",
    title: "Thank you for being part of the story.",
    text: "May the days ahead bring more smiles, more beautiful memories, and plenty of reasons to keep caring for one another."
  }
];

let current = 0;

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > .35 ? "♥" : "✦";
  heart.style.setProperty("--left", `${Math.random() * 100}%`);
  heart.style.setProperty("--size", `${12 + Math.random() * 22}px`);
  heart.style.setProperty("--duration", `${6 + Math.random() * 7}s`);
  document.querySelector(".bg-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}

setInterval(createHeart, 650);

function showSlide(index) {
  current = index;

  photoWrap.classList.add("change");

  setTimeout(() => {
    const slide = slides[index];
    memoryImage.src = slide.image;
    smallTitle.textContent = slide.small;
    mainTitle.textContent = slide.title;
    message.textContent = slide.text;

    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    photoWrap.classList.remove("change");

    nextBtn.textContent = index === slides.length - 1 ? "See the ending ♥" : "Next ♥";
  }, 350);
}

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  memoryCard.classList.remove("hidden");
  showSlide(0);
});

nextBtn.addEventListener("click", () => {
  if (current < slides.length - 1) {
    showSlide(current + 1);
  } else {
    memoryCard.classList.add("hidden");
    finalCard.classList.remove("hidden");
  }
});

replayBtn.addEventListener("click", () => {
  finalCard.classList.add("hidden");
  intro.classList.remove("hidden");
  current = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !intro.classList.contains("hidden")) {
    startBtn.click();
  }
  if (e.key === "ArrowRight" && !memoryCard.classList.contains("hidden")) {
    nextBtn.click();
  }
});
