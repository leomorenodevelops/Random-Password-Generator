// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumerical = "0123456789";
var charSpecial = "`~!@#$%^&*()-_=+[{]}\|;:'<.>/?"

function generatePassword() {
  var password = "";
  var passwordChar = "";
// Creates prompt to select password length
  var charLength = prompt("How many characters would you like your password to contain? Password must be between 8-128.")
  charLength = parseInt(charLength);

  if (charLength < 8) {
    alert("Password length must be at least 8 characters.");
    return "";
  }

  if (charLength > 128) {
    alert("Password length must not exceed more than 128 characters.");
    return "";
  }

// Creates confirmation for lowercase character
  var lowercaseSelect = confirm("Click OK to confirm using lowercase characters.");

  if (lowercaseSelect) {
    passwordChar += lowercaseSelect;
  }

// Creates confirmation for uppercase character
  var uppercaseSelect = confirm("Click OK to confirm using uppercase characters.");

  if (uppercaseSelect) {
    passwordChar += uppercaseSelect;
  }

// Creates confirmation for numerical character
  var numericalSelect = confirm("Click OK to confirm using numerical character.");

  if (numericalSelect) {
    passwordChar += numericalSelect;
  }

// Creates confirmation for special character
  var specialSelect = confirm("Click OK to confirm using special characters.");

  if (specialSelect) {
    passwordChar += specialSelect;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

