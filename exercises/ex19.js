/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(myEmotion, myFunc) {
  return `I am ${myEmotion}, ${myFunc}`;
}

const result = emotions("happy", function(num) {
  let laughter = "";
  
  for (let i = 0; i < num; i++) {
    laughter += "ha";
  }

  return `${laughter}!`;
}(2));

console.log(result);
