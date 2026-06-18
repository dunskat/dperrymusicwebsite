// Auto-update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle nav background once you scroll past the hero
const nav = document.querySelector(".nav");
const onScroll = () => {
  if (window.scrollY > 40) {
    nav.style.background = "rgba(10,10,15,0.85)";
    nav.style.borderBottom = "1px solid var(--border)";
  } else {
    nav.style.background = "linear-gradient(to bottom, rgba(10,10,15,0.6), transparent)";
    nav.style.borderBottom = "none";
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
