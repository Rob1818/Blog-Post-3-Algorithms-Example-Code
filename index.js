// Algoritms

// Recursion Example
let count = 1;

function recursiveFunction() {
  console.log(`Recursive ${count}`);
  if (count === 10) return console.log("Stopped"); // Base Case or Stop point: Condition if true stop function
  count++; // if false, increment the count
  return recursiveFunction(); // recursive call to itself - When it stops it will return "Stopped"
}

recursiveFunction();

// Infinite Loop Recursive Example

// The example below has no base case or condition to stop the recurions resulting in an infinite loop
// This sort of function will result in the stack overflow error as the maximum stack size will be exceeded

/*
function recursiveFunction() {
  console.log("infinite loop");
  recursiveFn();
}

recursiveFn();
*/

//
