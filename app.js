/*function which display crnt date n time*/
/*
function todaysDate(){
    var crntDate=new Date();
    document.write(`Current date and time is ${crntDate}`);
}
todaysDate();
*/
////////////

/*Q to display time in 12 hour formate*/

/*
function displayCurrentDateTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var meridiem = "AM";
  
    // Convert to 12-hour format and determine AM/PM
    if (hours >= 12) {
      meridiem = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
  
    // Add leading zeros to single-digit minutes and seconds to show 8:5 this to this 08:05
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    // Format the date and time
    var formattedDateTime = currentDate.toDateString() + " " + hours + ":" + minutes + ":" + seconds + " " + meridiem;
  
    // Display in the browser
    document.write("Current Date & Time (12-hour format): " + formattedDateTime);
  }
  
  // Call the function to display the current date and time
  displayCurrentDateTime();
  */
/////////////////////////////////
  /*
  Q3.greet user
  */
 /*
 function greet(a,b){
    var fullName=a+" "+b;
    document.write(`Welcome User ${fullName}`);
 }
 var firstName=prompt("Enter your first name");
 var lastName=prompt("Enter your first name");
 greet(firstName,lastName);
*/

////////
/*Take two num from user and return sum of it*/
/*
function add(a,b){
   
    var sum=a+b; 
   return sum;
}

var x=parseInt(prompt("Enter first value"));
var y=parseInt(prompt("Enter second value"));
var result=add(x,y);
document.write(`Sum of two numbers is ${result}`);
 */ 
/*A very imp note
 when you use the return keyword within a function, it allows you to send a value back from the function to the code that called it. In your code,
  the add function does return the sum of a and b, but the issue is with how you're trying to access the result.

The sum variable is indeed accessible outside the function, but it's local to the function scope.
 In your original code, you tried to access sum directly from the global scope, which would not work.
  Instead, you should capture the returned value from the function, as demonstrated in the corrected code I provided.

When you return a value from a function, 
it's a good practice to capture that value in a variable when you call the function so that you can use it as needed in the rest of your code.


*/
////////////////////
//Q.Make a function act as caluculator
/*
function calculator(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero.";
        }
        break;
      default:
        result = "Invalid operator";
    }
  
    return result;
  }
  
  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");
  
  var result = calculator(number1, number2, operator);
  
  document.write(`Result: ${result}`);
  
*/
/////////////////////////////////////////
//Q.square the passed argument
/*
function squareNumber(number) {
   
    return number*number;
  }
  

  var inputNumber =parseInt(prompt("Give value to be squared"));
  var squared = squareNumber(inputNumber);
  console.log("The square of " + inputNumber + " is " + squared);
  */
 ////////////////////////////

 //Q.Factorial function
 /*
 function factorial(number) {
    if (number === 0 || number === 1) {
      return 1; // The factorial of 0 and 1 is 1
    } else if (number < 0) {
      return "Undefined"; // Factorial is undefined for negative numbers
    } else {
      var result = 1;
      for (var i = 2; i <= number; i++) {
        result =result* i;
      }
      return result;
    }
  }
  
 
  var inputNumber = parseInt(prompt("Enter number to calculate factorial"));
  var result = factorial(inputNumber);
  console.log("The factorial of " + inputNumber + " is " + result);
  */
//////////////////////


  /*Q.Write a function that take start and end number as inputs
& display counting in your browser. */
/*
function countNumbers(start, end) {
    if (start <= end) {
      for (var i = start; i <= end; i++) {
        document.write(i + '<br>');
      }
    } else {
      document.write("Invalid range: Start number should be less than or equal to end number.");
    }
  }
  
  // Example of how to use the function:
  var startNumber = parseInt(prompt("Enter the start number:"));
  var endNumber = parseInt(prompt("Enter the end number:"));
  
  countNumbers(startNumber, endNumber);
*/  
/////////////////////

/*
Q.Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:

i. Arguments as value
ii. Arguments 

*/

 /*SOLUTION*/
/*
// Approach 1: Pass width and height as arguments (values)
function calculateRectangleAreaByArgument(width, height) {
  return width * height;
}

// Approach 2: Pass width and height as variables
function calculateRectangleAreaByVariables() {
  var width = 10; // OR WE CAN TAKE FROM USER
  var height = 5; 
  return width * height;
}

// Example of how to use the functions:

// Approach 1: Pass width and height as arguments (values)
var width1 = 8;//OR TAKE FROM USER
var height1 = 4;
var area1 = calculateRectangleAreaByArgument(width1, height1);
//or simple var area1=calculateRectangleAreaByArgument(3,6);
console.log("Area by value: " + area1);

// Approach 2: Pass width and height as variables
var area2 = calculateRectangleAreaByVariables();
console.log("Area by variables: " + area2);




*/
//////////////////////////////
/*Q.palindrom check
*/
/*
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase();
  
    // Check if the string is a palindrome
    const length = str.length;
  
    for (let i = 0; i < length / 2; i++) {
      // Compare characters from the start and end of the string
      if (str[i] !== str[length - 1 - i]) {
        return false; // If they don't match, it's not a palindrome
      }
    }
  
    return true; // If we reach this point, it's a palindrome
  }
  
  // Example usage:
  const inputString = "A man, a plan, a canal, Panama,noon";
  if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome.");
  } else {
    console.log(inputString + " is not a palindrome.");
  }
  
*/
//SOLUTION 2
/*
function isPalindrome(str) {
    str = str.toLowerCase();
  
    const length = str.length;
  
    for (let i = 0; i < length / 2; i++) {
      if (str[i] !== str[length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  const inputString =prompt();
  if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome.");
  } else {
    console.log(inputString + " is not a palindrome.");
  }
  */
 //note for palindrom word
 /*
 In the code I provided, it uses `length / 2` to determine the number of characters that need to be compared.
  This is done because for a palindrome, you only need to compare the characters up to the middle of the word
to determine if it's a palindrome or not.

For the word "maham," the length of the string is 5. When we calculate `length / 2`, 
it equals 2.5. However, in JavaScript, when used as an index, this will be treated as 2,
 which corresponds to the third character "h." 
 So, the code will compare the first two characters ("m" and "a") with the last two characters ("a" and "m"),
  which is correct for determining if "maham" is a palindrome.

The code works correctly for words with both even and odd lengths because it focuses on comparing the 
characters up to the middle, which is the key to determining whether a word is a palindrome or not.
 */

//see also solution provide by sir...
                   //////////////////////////////////

/*Q.*/
/*
function capitalizeFirstLetterOfEachWord(inputString) {
    let result = "";
    let capitalizeNextLetter = true;
  
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
  
      if (currentChar === " ") {
        capitalizeNextLetter = true; // Next letter in the word should be capitalized
        result =result + " "; // Add the space
      } else {
        if (capitalizeNextLetter) {
          result =result+ currentChar.toUpperCase(); // Capitalize the letter
          capitalizeNextLetter = false; // The rest of the word should not be capitalized
        } else {
          result =result+ currentChar.toLowerCase(); // Keep the rest of the word in lowercase
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = prompt("Enter string to be in title case");
  const outputString = capitalizeFirstLetterOfEachWord(inputString);
  console.log(outputString);
  */
 //////////////////////////////////////

 /*Q.Find logest word in string*/
 /*
 function findLongestWord(inputString) {
    let longestWord = "";
    let currentWord = "";
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (char !== " " && char !== undefined) {
        // If the character is not a space, add it to the current word
        currentWord =currentWord + char;
      } else {
        // If the character is a space, compare the current word to the longest word
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord;
        }
        currentWord = ""; // Reset the current word
      }
    }
  
    // Compare the last word in case the string doesn't end with a space
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  
    return longestWord;
  }
  
  // Example usage:
  const inputString = prompt();
  const longestWord = findLongestWord(inputString);
  console.log(longestWord);
  
*/
/*Note:
Certainly, I'd be happy to explain the steps in the code I provided for finding the longest word in a string without using the "word of word" keyword.

Here's a step-by-step explanation:

1. Initialize two variables, `longestWord` and `currentWord`, to empty strings. These variables will be used to keep track of the longest word found so far and the word currently being built.

2. Start iterating through the characters of the `inputString` using a `for` loop. The loop will go through each character in the string one by one.

3. Inside the loop, the code checks each character (`char`) in the input string. If the character is not a space and not `undefined`, it is part of a word, so it is added to the `currentWord` by concatenating it.

4. If the character is a space, it means the current word is complete, and it's time to compare it with the `longestWord` found so far. If the length of the `currentWord` is greater than the length of the `longestWord`, the `longestWord` is updated with the `currentWord`.

5. After comparing and updating the `longestWord`, the `currentWord` is reset to an empty string to start building the next word.

6. The loop continues to the next character, and this process repeats until all characters in the input string are processed.

7. After the loop finishes, the last word in the string might not end with a space. To account for this, there's a final comparison of the `currentWord` with the `longestWord` to ensure the last word is considered.

8. Finally, the function returns the `longestWord`, which will contain the longest word found in the input string.

In your example, the input string "Web Development Tutorial" is split into words ("Web," "Development," and "Tutorial"), and the function correctly identifies "Development" as the longest word and returns it as the result.

*/
/*
Dry Run:
Certainly! Let's do a step-by-step dry run of the code with the example input string "Web Development Tutorial" to find the longest word:

1. Initialize `longestWord` and `currentWord` as empty strings: `longestWord = ''` and `currentWord = ''`.

2. Start iterating through the characters of the input string "Web Development Tutorial."

3. The first character is 'W'. It's not a space, so add it to `currentWord`, making `currentWord = 'W'`.

4. The next character is 'e'. Add it to `currentWord`, making `currentWord = 'We'`.

5. The next character is 'b'. Add it to `currentWord`, making `currentWord = 'Web'`.

6. The next character is a space (' '). It's time to compare `currentWord` to `longestWord`. Since 'Web' is longer than the empty `longestWord`, update `longestWord` to 'Web'.

7. Reset `currentWord` to an empty string: `currentWord = ''`.

8. The next character is 'D'. It's not a space, so add it to `currentWord`, making `currentWord = 'D'`.

9. The next character is 'e'. Add it to `currentWord`, making `currentWord = 'De'`.

10. The next character is 'v'. Add it to `currentWord`, making `currentWord = 'Dev'`.

11. The next character is 'e'. Add it to `currentWord`, making `currentWord = 'Deve'`.

12. The next character is 'l'. Add it to `currentWord`, making `currentWord = 'Devel'`.

13. The next character is 'o'. Add it to `currentWord`, making `currentWord = 'Develo'`.

14. The next character is 'p'. Add it to `currentWord`, making `currentWord = 'Develop'`.

15. The next character is 'm'. Add it to `currentWord`, making `currentWord = 'Developm'`.

16. The next character is 'e'. Add it to `currentWord`, making `currentWord = 'Developme'`.

17. The next character is 'n'. Add it to `currentWord`, making `currentWord = 'Developmen'`.

18. The next character is 't'. Add it to `currentWord`, making `currentWord = 'Development'`.

19. The next character is a space (' '). It's time to compare `currentWord` to `longestWord`. 'Development' is longer than 'Web', so update `longestWord` to 'Development'.

20. Reset `currentWord` to an empty string: `currentWord = ''`.

21. The next character is 'T'. It's not a space, so add it to `currentWord`, making `currentWord = 'T'`.

22. The next character is 'u'. Add it to `currentWord`, making `currentWord = 'Tu'`.

23. The next character is 't'. Add it to `currentWord`, making `currentWord = 'Tut'`.

24. The next character is 'o'. Add it to `currentWord`, making `currentWord = 'Tuto'`.

25. The next character is 'r'. Add it to `currentWord`, making `currentWord = 'Tutor'`.

26. The next character is 'i'. Add it to `currentWord`, making `currentWord = 'Tutori'`.

27. The next character is 'a'. Add it to `currentWord`, making `currentWord = 'Tutorial'`.

28. The loop finishes.

29. The code performs a final comparison of `currentWord` to `longestWord`. 'Tutorial' is longer than 'Development', so update `longestWord` to 'Tutorial'.

30. The function returns `longestWord`, which is 'Tutorial'.

So, the longest word in the input string "Web Development Tutorial" is indeed 'Development', and the function correctly identifies it.
*/
//////////////////////////////////////////////

/*Q.Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'*/
/*function countOccurrences(inputString, letter) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === letter) {
      count++;
    }
  }
  return count;
}

// Example usage:
const inputString = 'JSResourceS.com';
const letterToCount = 'o';
const result = countOccurrences(inputString, letterToCount);
console.log(`The letter '${letterToCount}' appears ${result} times in the string.`);
*/
////////////////////////////////
/*calculate crcumfrnce and area of circle */
/*
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}

function calcArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`The area is ${area}`);
}

// Example usage:
const radius = 5;
calcCircumference(radius);
calcArea(radius);
*/























  







