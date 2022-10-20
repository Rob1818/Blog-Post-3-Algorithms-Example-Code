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

// SORTING AGORITHMS

// -----------------------------------------------------------

// BUBBLE SORT EXAMPLE

/*
For Loop: Quick Revision

for (initialization; condition; final expression) {
  code block to be executed
}

Initialization is run once at the start.
The condition is checked.
Then the code block is executed.
At the end of the iteration the final expression is executed.
The condition is checked -> code block is ran -> final expression executed and so on.
This process is continued until the condition is false.
*/

function bubbleSort(array) {
  let length = array.length;
  // OUTER LOOP
  for (let i = 0; i < length; i++) {
    // INNER LOOP
    for (j = 0; j < length - i - 1; j++) {
      // COMPARE & SWAP
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Can also use this code instead of preveus 3 lines
      }
    }
  }
  // RETURN THE SORTED ARRAY
  return array;
}

const bubArray = [1, 4, 2, 300, 2002, 92];

console.log(bubbleSort(bubArray));

// OUTER LOOP
/* Number of indexes is 6 because we start at 0, the number of iterations we will make is 7 */
// INNER LOOP
/* 
The largest item is always moved to the end of the array with each iteration because it will keep progressing during the comparison stage.
So we can limit the search range of j as we progress each pass by comparing it to the length - i - 1. 
length - 1 is added because we know there is nothing to compare the last item with. Using - i as well optimized the amount of operations needed to be taking because we no with each iteration 
the largests item floats to the end so there is now need to keep checking them. This is where the name bubble sort comes from, think of the largest numbers floating to the top.
 */
// COMPARE & SWAP
/* Here we compare each number to the one beside it Then we swap their position */

// RETURN THE SORTED ARRAY

// -----------------------------------------------------------

// SELECTION SORT

function selectionSort(array) {
  let length = array.length;
  // OUTER LOOP
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    // INNER LOOP
    for (let j = i + 1; j < length; j++) {
      // COMPARE
      if (array[j] < array[minIndex]) {
      }
    }
    // SWAP (using a temporary variable)
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    //  [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Can also use this code instead of previus 3 lines
  }
  // RETURN SORTED ARRAY
  return array;
}

const selArray = [69, 72, 1, 4, 2, 300, 2002, 92];

console.log(selArray(selArray));

// OUTER LOOP
/* 
We only need to iterate through the array.length -1 because the last element will be in order: n - 1 swaps.
The outer loop is the part that allows us to move along the array keeping the sorted and unsorted partitions separate.
*/

// INNER LOOP
/* 
Once we've selected the element with the outer loop, We use the inner loop to find the next minimum value. 
We start at j + 1 as the first element is the starting min index until proved otherwise. We will copare the first and second element in the next section.
*/
// COMPARE
/*
We then begin comparing the elements.
j = i + 1 (start position index 1); minIndex (= i, starting index 0).
*/

// SWAP
/* 
Swap the elements to their correct places.
*/

// RETURN SORTED ARRAY

// -----------------------------------------------------------

// ISERTION SORT

function insertionSort(array) {
  return array;
}
