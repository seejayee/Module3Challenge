// Assignment code here
// declarations
var confirmedCharacters = ""
var generatedPassword = ""
var passwordLength = ""

// object for the character types
var types = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!$%?@"
}
// object for true or false values pertaining to each character type
var isType = {
  isLowercase: "",
  isUppercase: "",
  isNumeric: "",
  isSpecial: ""
}

var generatePassword = function () {
  // prompting user for password length
  passwordLength = window.prompt("Please choose desired password length (must be at least 8 characters and no more than 128 characters): ")
  parseInt(passwordLength)

  // confirming password length is within length asked
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Error. Please pick a password length that is at least 8 characters and no more than 128 characters.")
    generatePassword()
  } else {
    window.alert("Password length will be: " + passwordLength)
  }

  // confirming with user if they would like different character types in their password
  function type() {
    isType.isLowercase = window.confirm("Would you like to include lowercase characters in your password?")

    isType.isUppercase = window.confirm("Would you like to include uppercase characters in your password?")

    isType.isNumeric = window.confirm("Would you like to include numeric characters in your password?")

    isType.isSpecial = window.confirm("Would you like to include special characters in your password?")

    if (!isType.isLowercase && !isType.isUppercase && !isType.isNumeric && !isType.isSpecial) {
      // returns to prompts if no character type is selected
      window.alert("Error. Please choose at least one character type to proceed.")
      type()
    }
  }

  // combining all confirmed characters to create password
  function create() {
    if (isType.isLowercase) {                              // if lowercase is selected, add lowercase characters
      confirmedCharacters += types.lowercase
    }
    if (isType.isUppercase) {                              // if uppercase is selected, add uppercase characters
      confirmedCharacters += types.uppercase
    }
    if (isType.isNumeric) {                                // if numeric is selected, add numeric characters
      confirmedCharacters += types.numeric
    }
    if (isType.isSpecial) {                                // if special is selected, add special characters
      confirmedCharacters += types.special
    }

    // picking random characters through all the confirmed, combined characters until the password length is met
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword += confirmedCharacters.charAt(Math.floor(Math.random() * confirmedCharacters.length))
    }
  }

  type()                                                  // calls type() function
  create()                                                // calls create() function
  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
