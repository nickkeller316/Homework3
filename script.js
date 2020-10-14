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
//this function will include the confirms and prompts for password criteria
function userOptions() {
  //special characters T/F (boolean) stored in useSC variable
  var useSC = confirm("Will you use any special characters? ");
  //numbers T/F (boolean) stored in useNUM variable
  var useNum = confirm("Will you use numbers? ");
  //upper case T/F (boolean) stored in useUpp variable
  var useUpp = confirm("Will you use any upper case letters? ");
  //lower case T/F (boolean) stored in useLow variable
  var useLow = confirm("Will you use any lower case numbers? ");
  //passLength (number between 8-128) stored in passLength variable
  var passLength = prompt(
    "How long would you like your password to be (8-128 characters)? "
  );
  // all the above variables are stored in an object called userInput for use in password generator function
  var userInput = {
    useSC: useSC,
    useNum: useNum,
    useUpp: useUpp,
    useLow: useLow,
    passLength: passLength,
  };
  //stores user choices in global memory
  return userInput;
}
//action password function, using userOptions
function generatePassword() {
  var userChoice = userOptions();
  var passChoice = [];
  var possChar = [];
  var usedChar = [];

  if (userOptions.useSC === true) {
    possChar = possChar.concat(specialCharacters);
    usedChar.push(randomNumber(specialCharacters));
  }
  if (userOptions.useNum === true) {
    possChar = possChar.concat(numberList);
    usedChar.push(randomNumber(numberList));
  }
  if (userOptions.useUpp === true) {
    possChar = possChar.concat(upperCaseList);
    usedChar.push(randomNumber(upperCaseList));
  }
  if (userOptions.useLow === true) {
    possChar = possChar.concat(lowerCaseList);
    usedChar.push(randomNumber(lowerCaseList));
  }
  for (let i = 0; i < userOptions.passLength; i++) {
    var possChar = randomNumber(usedChar);
    passChoice.push(possChar);
  }
  for (let j = 0; j < usedChar.length; j++) {
    passChoice[j] = randomNumber(usedChar);
  }
  return passChoice.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
