// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercaseVar;
var uppercaseVar;
var numericVar;
var specialCharacters;

// Listen for a click event on button
generateBtn.addEventListener("click", function () {
  passwordLength = Number(prompt("How long do you want the password to be?","must be a number between 8-128"));

  if (passwordLength >= 8 && passwordLength <= 128 && Number.isInteger) {
    lowercaseVar = prompt("Do you want lowercase letters?","enter 'Yes' or 'No'").toUpperCase();
    uppercaseVar = prompt("Do you want uppercase letters?","enter 'Yes' or 'No'").toUpperCase();
    numericVar = prompt("Do you want numeric values?","enter 'Yes' or 'No'").toUpperCase();
    specialCharacters = prompt("Do you want special characters?","enter 'Yes' or 'No'").toUpperCase();

    if (lowercaseVar === "NO" && uppercaseVar === "NO" && numericVar === "NO" && specialCharacters === "NO") {
      alert("You did not select any character types. Game over.");
    } else {
      // alert("Winner!");
    }
  } else {
    alert("You either entered a number out of range, entered a non integer, or hit cancel. Game over.");
  }
});

// Generates a password
function generatePassword() {
  
  var characterSet = "";

  if (lowercaseVar === "YES" && uppercaseVar === "NO" && numericVar === "NO" && specialCharacters === "NO") {
    characterSet = "abcdefghijklmnopqrstuvwxwy";
  } else if (lowercaseVar === "YES" && uppercaseVar === "YES" && numericVar === "NO" && specialCharacters === "NO"){
    characterSet = "abcdefghijklmnopqrstuvwxwyABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (lowercaseVar === "YES" && uppercaseVar === "YES" && numericVar ==="YES" && specialCharacters === "NO"){
    characterSet = "abcdefghijklmnopqrstuvwxwyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (lowercaseVar === "YES" && uppercaseVar === "YES" && numericVar === "YES" && specialCharacters === "YES"){
    characterSet = "abcdefghijklmnopqrstuvwxwyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "NO" && uppercaseVar === "YES" && numericVar === "NO" && specialCharacters === "NO") {
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (lowercaseVar === "NO" && uppercaseVar === "YES" && numericVar === "NO" && specialCharacters === "YES") {
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "NO" && uppercaseVar === "YES" && numericVar === "YES" && specialCharacters === "NO") {
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (lowercaseVar === "NO" && uppercaseVar === "YES" && numericVar === "YES" && specialCharacters === "YES") {
    characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "NO" && uppercaseVar === "NO" && numericVar === "YES" && specialCharacters === "NO") {
    characterSet = "0123456789";
  } else if (lowercaseVar === "YES" && uppercaseVar === "NO" && numericVar === "YES" && specialCharacters === "NO") {
    characterSet = "abcdefghijklmnopqrstuvwxwy0123456789";
  } else if (lowercaseVar === "YES" && uppercaseVar === "NO" && numericVar === "YES" && specialCharacters === "YES") {
    characterSet = "abcdefghijklmnopqrstuvwxwy0123456789~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "NO" && uppercaseVar === "NO" && numericVar === "NO" && specialCharacters === "YES") {
    characterSet = "~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "YES" && uppercaseVar === "NO" && numericVar === "NO" && specialCharacters === "YES") {
    characterSet = "abcdefghijklmnopqrstuvwxwy~!@#$%^&*()_+-=<>[]{}\/;':";
  } else if (lowercaseVar === "YES" && uppercaseVar === "Yes" && numericVar === "NO" && specialCharacters === "YES") {
    characterSet = "abcdefghijklmnopqrstuvwxwyABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=<>[]{}\/;':";
  }

  console.log(characterSet);
  // return value
  var returnValue = "";
  for (let i = 0; i < passwordLength; i++) {
    returnValue += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return returnValue;

}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
