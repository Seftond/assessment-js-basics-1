
console.log("Welcome to the password validator tool!")
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password:", function (password) {
  if(password.length < 10){
      console.log("Attempt failed! Password must be more than 10 characters long!")
  } else {
      console.log("Attempt successful!")
  }
  reader.close();
});