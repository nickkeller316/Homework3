// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating an array of special characters for use in function
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// array of possible numbers to choose
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// array of upper case letters since user can choose both lower and upper case
var upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//array of lower case numbers
var lowerCaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(specialCharacters);
console.log(numberList);
console.log(upperCaseList);
console.log(lowerCaseList);

//need to make a randomize function that pics a random value in array that user wishes to use (uppercase, number, special, lowercase)
function randomNumber(array) {
  //picks a random index in the list of users choice
  var listRandom = Math.floor(Math.random() * array.length);
  //stores the value that correstponds to the index picked above in randomVar variable
  var randomVar = array[listRandom];
  //stores randomVar in global memory
  return randomVar;
}
//test
randomNumber(lowerCaseList);

function userOptions() {
  var useSC = confirm("Will you use any special characters? ");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
