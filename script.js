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
//action password function, using userOptions(userChoice)
function generatePassword() {
  //changing userOptions to variable userChoice for use in this function
  var userChoice = userOptions();
  //creating empty array to add final password to
  var passChoice = [];
  //array which we will add all the possible characters the user has to choose from
  var possChar = [];
  //array that includes the characters the user wants to use, then a random value of this array will be pushed to the final array(password)
  var usedChar = [];
  //if the user wants to use special characters, we will add the list of special characters to the possible characters array
  //we will push one of these random special characters to usedChar
  if (userChoice.useSC === true) {
    possChar = possChar.concat(specialCharacters);
    usedChar.push(randomNumber(specialCharacters));
  }
  //if the user wants to use numbers, we will add the list of numbers to the possible characters array
  //we will push one of these random numbers to usedChar
  if (userChoice.useNum === true) {
    possChar = possChar.concat(numberList);
    usedChar.push(randomNumber(numberList));
  }
  //the previous comment logic applies to the next two if statements, but with upper and lower case letters
  if (userChoice.useUpp === true) {
    possChar = possChar.concat(upperCaseList);
    usedChar.push(randomNumber(upperCaseList));
  }
  if (userChoice.useLow === true) {
    possChar = possChar.concat(lowerCaseList);
    usedChar.push(randomNumber(lowerCaseList));
  }
  //our function randomnumber pics random characters that the user said he/she wants to use
  //these variables are then pushed to the final password
  for (let i = 0; i < userChoice.passLength; i++) {
    var possChar = randomNumber(usedChar);
    passChoice.push(possChar);
  }
  //for all the characters the user wants to use, we then pick a random array of these characters. Length=what the user inputted
  for (let j = 0; j < usedChar.length; j++) {
    passChoice[j] = randomNumber(usedChar);
  }
  //the final array is created and stored to global memory
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
