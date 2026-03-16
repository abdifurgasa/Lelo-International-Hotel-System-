// login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("error");

loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  errorText.innerText = "";

  if (!email || !password) {
    errorText.innerText = "Please enter email and password.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    console.error(err);
    errorText.innerText = err.message;
  }
});

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") loginBtn.click();
});
