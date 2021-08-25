/* document.getElementById("login-btn").addEventListener("click", function () {
    //Getting user's email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    //Getting user's password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if (
        userPassword == "123445" ||
        userPassword == "655444" ||
        userPassword == "644323" ||
        userPassword == "435667" ||
        userPassword == "127945" ||
        userPassword == "346898" ||
        userPassword == "435787" ||
        userPassword == "234466" ||
        userPassword == "565676" ||
        userPassword == "346677" ||
        userPassword == "345789" ||
        userPassword == "345779" ||
        userPassword == "234568"
    ) {
        window.location.href = "bank.html";
    }
    else if (userEmail == "" || userPassword == "") {
        alert("Please, fill all the fields.")
    }
    else {
        alert("Invalid password")
    }
}); */
const signedUserEmail = localStorage.getItem("userEmail");
const signedUserPassword = localStorage.getItem("userPassword");
const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");

document.getElementById("login-btn").addEventListener("click", function () {
    if (userEmail.value == signedUserEmail && userPassword.value == signedUserPassword) {
        window.location.href = "bank.html";
        userEmail.value = "";
        userPassword.value = "";
    }
    else if (userEmail.value = "" || userPassword.value == "") {
        alert("Please, fill in the fields!");
        userEmail.value = "";
        userPassword.value = "";
    }
    /* else if (signedUserEmail == "" || signedUserPassword == "") {
        alert("User Not Found! Please Sign Up to continue!");
        userEmail.value = "";
        userPassword.value = "";
    } */
    else {
        alert("Invalid Email and Password!");
        userEmail.value = "";
        userPassword.value = "";
    }
});

function forgotPassword() {
    if (signedUserPassword != "") {
        alert(`Your Password is (-- ${signedUserPassword} --)`);
    }
}