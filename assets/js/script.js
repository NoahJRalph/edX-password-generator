// Assignment code here
var validAlphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
var validNumerics = Array.from("1234567890");
var validSpecials = Array.from("\"' !#$%&()*+,-.\\/:;<=>?@[\]^_`{|}~");

var generatedPassword = [];
var passLength = 0;
var passOptions = "";

function generatePassword() {
  generatedPassword = [];
  passLength = 0;
  passOptions = "";

  // Length
  passLength = window.prompt("How long do you want your password to be? \n(In numerics: Between 8 - 128 characters long required)");
  // If chosen password length doesn't match criteria
  if (passLength === null) {
    console.log("User Cancel");
    return;
  }
  console.log(passLength);
  if ((passLength < 8 ) || (passLength > 128)){
    console.log("Invalid Length Reset");
    generatePassword();
    return;
  }
  // Specials/Conditionals
  passOptions = window.prompt("Would you like to use lowercase(L) characters, uppercase(U), numeric(N), and/or special(S) characters? \n(Enter any combination using the letters: L, U, N, S)");
  // If chosen password parameters do not match criteria
  if (passOptions === null) {
    console.log("User Cancel");
    return;
  }
  passOptions = passOptions.toUpperCase();
  console.log(passOptions);
  if (!passOptions.includes("L") && !passOptions.includes("U") && !passOptions.includes("N") && !passOptions.includes("S")) {
    console.log("Invalid Option Reset");
    generatePassword();
    return;
  }

  // MAKING THE PASSWORD
  // Lowercase Pass (if necessary)
  if (passOptions.includes("L")) {
    for (var i = 0; i <= passLength - 1; ++i) {
      generatedPassword[i] = validAlphabet[Math.floor(Math.random() * validAlphabet.length)];
    }
  }

  // Uppercase Pass (if necessary)
  if (passOptions.includes("U")) {
    // Check if they wanted L as well
    if (passOptions.includes("L")) {
      for (var i = 0; i <= passLength - 1; ++i) {
        var coin = Math.floor(Math.random() * 4);
        if (coin === 1) {
          // Uppercasing randomly
          generatedPassword[i] = generatedPassword[i].toUpperCase();
        }
      }
    }
    // ALL UPPERCASE
    else {
      for (var i = 0; i <= passLength - 1; ++i) {
        generatedPassword[i] = validAlphabet[Math.floor(Math.random() * validAlphabet.length)].toUpperCase();
      }
    }
  }

  // Numeric Pass (if necessary)
  if (passOptions.includes("N")) {
    // Check if they wanted L or U as well
    if (passOptions.includes("L" || "U")) {
      for (var i = 0; i <= passLength - 1; ++i) {
        var coin = Math.floor(Math.random() * 4);
        if (coin === 1) {
          // Insert numbers randomly
          generatedPassword[i] = validNumerics[Math.floor(Math.random() * validNumerics.length)];
        }
      }
    }
    // ALL NUMBERS
    else {
      for (var i = 0; i <= passLength - 1; ++i) {
        generatedPassword[i] = validNumerics[Math.floor(Math.random() * validNumerics.length)];
      }
    }
  }

  // Special Pass (if necessary)
  if (passOptions.includes("S")) {
    // Check if they wanted L or U or N as well
    if (passOptions.includes("L" || "U" || "N")) {
      for (var i = 0; i <= passLength - 1; ++i) {
        var coin = Math.floor(Math.random() * 4);
        if (coin === 1) {
          // Insert numbers randomly
          generatedPassword[i] = validSpecials[Math.floor(Math.random() * validSpecials.length)];
        }
      }
    }
    // ALL SPECIALS
    else {
      for (var i = 0; i <= passLength - 1; ++i) {
        generatedPassword[i] = validSpecials[Math.floor(Math.random() * validSpecials.length)];
      }
    }
  }
}

// The code below came with the project template, Noah(Me) didn't write it
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Noah(Me) did add line 119 tho
  generatePassword();
  var password =generatedPassword.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);