// js/login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { t } from "./i18n.js"; // optional if you want dynamic error messages

window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("error");

    if(!email || !password){
        errorEl.textContent = "Please enter email and password."; // could also use t("enterEmailPassword")
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        window.location.href = "dashboard.html"; // redirect after login
    })
    .catch((error) => {
        console.log(error);
        errorEl.textContent = error.message; // firebase error message
    });
}
