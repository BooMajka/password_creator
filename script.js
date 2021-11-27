// Assignment code here
function generatePassword() {

  var number = prompt("How long should be your password?");
  var passLength = null;

  function generateLength(num) {
    if (num > 8 && num < 128) {
      num = parseInt(num);
      passLength = num;
    } else {
      alert("The password must include between 8 to 128 characters")
      passLength = prompt("How long should be your password?");
    }
  }
  generateLength(number);
  console.log(passLength);

  var specChar = confirm("Do you want to include special characters?");
  console.log("special characters:" + specChar);
  var lowLetters = confirm("Do you want to include lowercase letters?");
  console.log("lowercase letters:" + lowLetters);
  var uppLetters = confirm("Do you want to include uppercase letters?");
  console.log("uppercase letters:" + uppLetters);
  var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":"];
  var alphabetLowercase = Array(26).fill(0).map((el, i) => String.fromCharCode(97 + i));
//   var alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log("Lowercase:" + alphabetLowercase);
  var alphabetUppercase = [];

  var alphabetUpp = function (array) {
    for (let i = 0; i < array.length; i++) {
      var lower = array[i].toUpperCase();
      alphabetUppercase.push(lower);
    }

  }
  alphabetUpp(alphabetLowercase);

  var passwordArray = Array(10).fill(0).map((el, i) => i);

  
  function passwordInfo(char, low, upp) {

      if (char === true) {
        specialCharacters.forEach(el => {
            passwordArray.push(el);
        });
      }
      if (low === true) {
        alphabetLowercase.forEach(el => {
            passwordArray.push(el);
        });
      }
      if (upp === true) {
        alphabetUppercase.forEach(el => {
            passwordArray.push(el);
        });
      }
      return passwordArray;


  }
  passwordInfo(specChar, lowLetters, uppLetters);
  console.log("Password Array:" + passwordArray);


  let id = [];
  function mixArray(arr) {
    for (let i = 0; i < arr.length + 1; i++) {
      let random = Math.floor(Math.random() * (arr.length - 1 + 1) + 1);
      id.push(arr[random]);
  }
  console.log("Mixed array:" + id);
  }
  mixArray(passwordArray);


  return id.slice(0, passLength).join('');

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
