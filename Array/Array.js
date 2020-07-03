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
