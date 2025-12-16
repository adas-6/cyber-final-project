"use strict";

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("checkBtn")
        .addEventListener("click", checkPassword);

    document.getElementById("tipBtn")
        .addEventListener("click", showTip);
});

function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (password.length < 8) {
        result.textContent = "Weak: Password should be at least 8 characters.";
        result.style.color = "red";
        return;
    }

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    if (hasUpper && hasLower && hasNumber && hasSymbol) {
        result.textContent = "Strong password ✔";
        result.style.color = "lightgreen";
    } else {
        result.textContent =
            "Moderate: Add uppercase letters, numbers, and symbols.";
        result.style.color = "orange";
    }
}

function showTip() {
    document.getElementById("tip").textContent =
        "Never click suspicious links or provide personal information via email. Legitimate companies will never ask for your password.";
}

