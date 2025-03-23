document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const captchaText = document.getElementById("captcha");
    const captchaInput = document.getElementById("captchaInput");
    
    let captchaAnswer = generateCaptcha();
    
    function generateCaptcha() {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        captchaText.innerText = `${num1} + ${num2} = ?`;
        return num1 + num2;
    }
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;
        
        if (nameInput.value.length < 5) {
            document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
            isValid = false;
        } else {
            document.getElementById("nameError").innerText = "";
        }
        
        if (!emailInput.value.includes("@")) {
            document.getElementById("emailError").innerText = "Enter a valid email.";
            isValid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }
        
        if (phoneInput.value.length !== 10 || phoneInput.value === "123456789") {
            document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            document.getElementById("phoneError").innerText = "";
        }
        
        if (passwordInput.value.length < 8 || passwordInput.value.toLowerCase() === "password" || passwordInput.value.toLowerCase() === nameInput.value.toLowerCase()) {
            document.getElementById("passwordError").innerText = "Password must be at least 8 characters and not 'password' or your name.";
            isValid = false;
        } else {
            document.getElementById("passwordError").innerText = "";
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
            isValid = false;
        } else {
            document.getElementById("confirmPasswordError").innerText = "";
        }
        
        if (parseInt(captchaInput.value) !== captchaAnswer) {
            document.getElementById("captchaError").innerText = "Incorrect CAPTCHA answer.";
            isValid = false;
        } else {
            document.getElementById("captchaError").innerText = "";
        }
        
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
            captchaAnswer = generateCaptcha();
        }
    });
});