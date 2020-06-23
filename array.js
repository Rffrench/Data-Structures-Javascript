/*  ARRAYS

They are a collection of items of usually one data type stored. Arrays have a fixed size like:
int myArray[5] = [1,2,3,4,5];  --> Java
In Javascript they are dynamic


- How much memory do they use???
int myArray[3]={5,3,20} will take 12 bytes because each value takes 4 bytes or 32 bits!

If I want a bigger array I would have to copy the previous array to a new one that has a bigger size where I can add more elements. In many programming languages arrays are dynamic which means that the process of creating and copying items to new bigger arrays is dynamic. Javascript does that, the programmer does not have to worry about resizing arrays.

 Neither the length of a JavaScript array nor the types of its elements are fixed. 

*/


// CREATING an array
let myArray = [3, 6, 9, 10];
let firstItem = myArray[0];
let lastItem = myArray[myArray.length - 1] // Length is 4 so the last item is in the position 3. It starts from 0

console.log(myArray); // [3, 6, 9, 10]
console.log(myArray.length); // 4


// ADDING an item at the end
myArray.push(99); // Added as the last item

// ADDING an item at the beginning
myArray.unshift(123);

// REMOVING last item
myArray.pop(); // Removes 99

//REMOVING first item
myArray.shift(); // Removes 3

// LOOPING an array
myArray.forEach(function (item, index, array) {
    console.log('Item value: ' + item, ' Index: ' + index);
});

// FINDING the index of an item
let position = myArray.indexOf(9);
console.log(position); // 2


console.log('-------------------------------');
// CREATING two-dimensional array
let board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))
