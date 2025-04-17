let pumpCount = 0;
const body = document.getElementById("body");
const pumpImg = document.getElementById("pumpImg");
const title = document.getElementById("main-title");
const counter = document.getElementById("pumpCounter");
const thanksMessage = document.getElementById("thanks");

// Audio elements
const pumpAudio = document.getElementById("pumpAudio");
const explosionAudio = document.getElementById("explosionAudio");
const bassAudio = document.getElementById("bassAudio");

// Background images
const bgImage1 = document.getElementById("bgImage1");
const bgImage2 = document.getElementById("bgImage2");

// Initial background image URL
const initialBackground = 'https://cdn-0001.qstv.on.epicgames.com/UQWlvqUBQbkJTAnbkO/image/landscape_comp.jpeg';
const changedBackground = 'https://cdn-0001.qstv.on.epicgames.com/uchiZtqsHVUhisNUxu/image/landscape_comp.jpeg';

// Function to pump
function pumpIt() {
  pumpCount++;
  counter.innerText = "Pumps Pulled: " + pumpCount;

  // Play pump sound effect more frequently
  pumpAudio.play();

  // Pop-up text after each click
  showPopUp("+1");

  // CHAOS MILESTONES
  if (pumpCount === 10) {
    alert("Nice warm-up 😎");
  }

  if (pumpCount === 25) {
    body.classList.add("crazy");
  }

  if (pumpCount === 50) {
    alert("YOU'RE CRACKED 🔥");
    title.classList.add("shaky");
  }

  if (pumpCount === 75) {
    document.body.style.animation = "shake 0.2s infinite";
  }

  if (pumpCount === 100) {
    // Change background image at 100 clicks
    bgImage1.src = changedBackground;
    bgImage2.src = changedBackground;
    applyHueEffect();
  }

  if (pumpCount === 150) {
    explosionAudio.play();
    document.body.style.transform = "rotate(5deg)";
    setTimeout(() => {
      document.body.style.transform = "rotate(0)";
    }, 1000);
  }

  if (pumpCount === 200) {
    // Final INSANE Effect
    alert("💥💥💥 FINAL CHAOS UNLEASHED 💥💥💥");
    title.innerText = "INSANE MODE ACTIVATED!!";
    body.style.filter = "invert(1) brightness(2) saturate(10)";
    setInterval(() => {
      body.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }, 500);
  }

  if (pumpCount === 250) {
    title.classList.add("glitch");
    pumpImg.style.transition = "all 0.1s";
    setInterval(() => {
      const size = 100 + Math.random() * 50;
      pumpImg.style.width = size + "px";
    }, 100);
  }

  if (pumpCount === 300) {
    bassAudio.play();
    // Final Chaos Alert
    alert("💥💥💥 FINAL CHAOS UNLEASHED 💥💥💥");
    title.innerText = "INSANE MODE ACTIVATED!!";
    body.style.filter = "invert(1) brightness(2) saturate(10)";
    setInterval(() => {
      body.style.background = `hsl(${Math.random() * 360
