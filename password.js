

//Welcome user to password validator
console.log("Welcome to the password validator")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter a password. At least 10 characters, 2 numbers, 2 special characters, 2 uppercase letters: ', userPassword => {
    console.log(`Requested Password: ${userPassword}`);
    let passedConditions = true;
    if (userPassword.length < 10) {
        console.log("Your password is too short.");
        passedConditions = false;
    }
    let numberCount = 0;
    for (let nums of userPassword) {
        if (nums >= "0" && nums <= "9") {
            numberCount++;

        }
    }
    if (numberCount < 2) {
        console.log("Not enough numbers.");
        passedConditions = false;
    }
    const specialChars = "!@#$%^&*()"
    let specialCharCount = 0;
    for (let i = 0; i < userPassword.length; i++) {
        if (!specialChars.includes(userPassword[i])) {
            continue;
        };
        specialCharCount++;
    }
    if (specialCharCount < 2) {
        console.log("Not enough special characters.");
        passedConditions = false;
    }
    let upperCaseCount = 0;
    for (let i = 0; i < userPassword.length; i++) {
        if (userPassword[i] === userPassword[i].toUpperCase()) {
            upperCaseCount++;
        }
    }
    if (upperCaseCount < 2) {
        console.log("Not enough uppercase characters.");
        passedConditions = false;
    }
    if (passedConditions === true) {
        console.log("Success! You've selected a secure password.")
    }
    readline.close();
})