document.getElementById("login-btn").addEventListener("click", function () {
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
});