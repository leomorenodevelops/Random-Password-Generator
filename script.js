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

  // Creates confirmation for lowercase selection
  var lowercaseSelect = confirm("Click OK to confirm using lowercase characters.");

  if (lowercaseSelect) {
    passwordChar += lowercaseSelect;
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

