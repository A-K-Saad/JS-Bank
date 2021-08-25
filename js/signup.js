const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
document.getElementById("signup-btn").addEventListener("click", function () {
    if (userEmail.value != "" && userPassword.value != "") {
        localStorage.setItem("userEmail", userEmail.value);
        localStorage.setItem("userPassword", userPassword.value);
        window.location.href = "login.html";
        userEmail.value="";
        userPassword.value="";
    }
    else {
        alert("Please, fill in the fields!")
    }
});