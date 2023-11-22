// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


function generatePassword() {
    //Alert prompts
    let characters = prompt('How many characters should your password include?');
    if (characters < 8 || characters > 128) {
      confirm('Character limit is between 8 and 128. Please try again.');
      let characters = prompt('How many characters should your password include?');
    }
    console.log(characters);

    let lowerCase = confirm("Do you want lowercase letters included?");
    console.log(lowerCase);

    let upperCase = confirm("Do you want upperCase letters included?");
    console.log(upperCase);

    let numbers = confirm("Do you want numbers included?");
    console.log(numbers);

    let specialCharacters = confirm("Do you want special characters included? (<>!!@#$!%)");
    console.log(specialCharacters);

    //Logic to create the password
    for (i=0; i < characters; i++) {
      
    }
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create alerts onClick = Complete

/** Prompts:
 * How many characters should your password include?
 * Do you want lowercase letters included?
 * Do you want UPPERCASE letters included?
 * Do you want numbers?
 * Do you want special characters? (<>?!@#$)?
 */

//Take various inputs = Complete

//Create logic based on inputs

//Generate password when logic has been confirmed