// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


function generatePassword() {
    //Characters to include within the password
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[^_`{|}~';

    //Alert prompts
    let numberOfCharacters = prompt('How many characters should your password include?');
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      confirm('Character limit is between 8 and 128. Please try again.');
      return "Uh oh... Please try again.";
    }
    console.log(numberOfCharacters);

    let lowerCase = confirm("Do you want lowercase letters included?");
    if (lowerCase === false) {
      let pattern = new RegExp("[a-z]",'g');
      characters = characters.replace(pattern, "");
    }

    console.log(characters)
    console.log(lowerCase);

    let upperCase = confirm("Do you want upperCase letters included?");
    if (upperCase === false) {
      let pattern = new RegExp("[A-Z]",'g');
      characters = characters.replace(pattern, "");
    }
    console.log(characters)
    console.log(upperCase);

    let numbers = confirm("Do you want numbers included?");
    if (numbers === false) {
      let pattern = new RegExp("[0-9]",'g');
      characters = characters.replace(pattern, "");
    }

    console.log(characters);
    console.log(numbers);

    //Need to fix special characters deleting the entire string
    let specialCharacters = confirm("Do you want special characters included? (<>!!@#$!%)");
    if (specialCharacters === false) {
      let pattern = new RegExp("[!-~]",'g');
      characters = characters.replace(pattern, "");
    }

    console.log(characters);
    console.log(specialCharacters);


    //Logic to create the password
    //Loop through the set character length and only filter out what was set to false
    let result = '';
    for (i=0; i < numberOfCharacters; i++) {
      let char = Math.floor(Math.random() * characters.length + 1);

      result += characters.charAt(char);
    };
    
    return result;
    
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
  //Need a for loop to randomize each character of the password.
  //Specify the parameters for each character's randomization.

//Generate password when logic has been confirmed = COMPLETE


//Learned RegExp from GeeksForGeeks:
// https://www.geeksforgeeks.org/remove-uppercase-lowercase-special-numeric-and-non-numeric-characters-from-a-string/