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
  var charLength = window.prompt("How many characters would you like your password to contain? Password must be between 8-128.")
  charLength = parseInt(charLength);

  if (charLength < 8) {
    window.alert("Password length must be at least 8 characters.");
    return "";
  }

  if (charLength > 128) {
    window.alert("Password length must not exceed more than 128 characters.");
    return "";
  }

// Creates confirmation for lowercase character
  var lowercaseSelect = window.confirm("Click OK to confirm using lowercase characters.");

  if (lowercaseSelect) {
    passwordChar += charLowercase;
  }

// Creates confirmation for uppercase character
  var uppercaseSelect = window.confirm("Click OK to confirm using uppercase characters.");

  if (uppercaseSelect) {
    passwordChar += charUppercase;
  }

// Creates confirmation for numerical character
  var numericalSelect = window.confirm("Click OK to confirm using numerical character.");

  if (numericalSelect) {
    passwordChar += charNumerical;
  }

// Creates confirmation for special character
  var specialSelect = window.confirm("Click OK to confirm using special characters.");

  if (specialSelect) {
    passwordChar += charSpecial;
  }

  if (!passwordChar) {
    alert("Must select at least one character type.");
    return "";
  }

  for (var index = 0; index < charLength; index++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

