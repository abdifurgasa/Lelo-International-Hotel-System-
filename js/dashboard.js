// dashboard.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import "./i18n.js";

// Banner slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".banner-slide-container");
  slides.forEach(s => s.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
showSlides();

// Show panel
window.showPanel = function (panelId) {
  document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
  const panel = document.getElementById(panelId);
  if (panel) panel.style.display = "block";
}

// Logout
window.logout = function () {
  signOut(auth).then(() => window.location.href = "login.html");
}

// Toggle submenu
window.toggleSubmenu = function (id) {
  const submenu = document.getElementById(id);
  if (submenu.style.display === "flex" || submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "flex";
    submenu.style.flexDirection = "column";
  }
}

// Check login
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    showPanel("dashboardPanel");
  }
});
