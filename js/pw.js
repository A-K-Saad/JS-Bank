function generate() {
    var passwords = [
        "123445",
        "655444",
        "644323",
        "435667",
        "127945",
        "346898",
        "435787",
        "234466",
        "565676",
        "346677",
        "345789",
        "345779",
        "234568"
    ];
    var passwordField = document.querySelector(".pw-field");
    passwordField.innerHTML = passwords[Math.floor(Math.random() * passwords.length)];
}