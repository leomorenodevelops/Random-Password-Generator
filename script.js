// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines varibles as a string
var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumerical = "0123456789";
var charSpecial = "`~!@#$%^&*()-_=+[{]}\|;:'<.>/?"

// Function used to generate password
function generatePassword() {
  var password = "";
  var passwordChar = "";

// Creates prompt for user to select password length
  var charLength = window.prompt("How many characters would you like your password to contain? Password must be between 8-128.")
  charLength = parseInt(charLength);

// If chosen character length is less than 8 an alert is returned to user
  if (charLength < 8) {
    window.alert("Password length must be at least 8 characters.");
    return "";
  }

// If chosen character length is greater than 128 an alert is returned to user
  if (charLength > 128) {
    window.alert("Password length must not exceed more than 128 characters.");
    return "";
  }

// Creates prompt for user to confirm if lowercase character will be used in password.
  var lowercaseSelect = window.confirm("Click OK to confirm using lowercase characters.");

  if (lowercaseSelect) {
    passwordChar += charLowercase;
  }

// Creates prompt for user to confirm if uppercase character will be used in password.
  var uppercaseSelect = window.confirm("Click OK to confirm using uppercase characters.");

  if (uppercaseSelect) {
    passwordChar += charUppercase;
  }

// Creates prompt for user to confirm if numerical character will be used in password.
  var numericalSelect = window.confirm("Click OK to confirm using numerical character.");

  if (numericalSelect) {
    passwordChar += charNumerical;
  }

// Creates prompt for user to confirm if special character will be used in password.
  var specialSelect = window.confirm("Click OK to confirm using special characters.");

  if (specialSelect) {
    passwordChar += charSpecial;
  }

// Creates prompt if user did not select at least one character type.
  if (!passwordChar) {
    window.alert("Must select at least one character type.");
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

