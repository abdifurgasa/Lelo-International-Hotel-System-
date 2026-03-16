import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let slideIndex = 0;
function showSlides(){
  const slides = document.querySelectorAll(".banner-slide-container");
  slides.forEach(s => s.style.display="none");
  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
showSlides();

window.showPanel = function(panelId){
  document.querySelectorAll(".panel").forEach(p => p.style.display="none");
  const panel = document.getElementById(panelId);
  if(panel) panel.style.display="block";
}

window.logout = function(){
  signOut(auth).then(() => window.location.href="login.html");
}

onAuthStateChanged(auth, user => {
  if(!user){
    window.location.href="login.html";
  } else {
    showPanel("dashboardPanel");
  }
});
