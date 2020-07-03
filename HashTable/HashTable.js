// Javascript Syntax 

// NOte: set the array to a small size like 3 to check the collissions and what happens


// Converting a String to int
const hashStringToInt = (s, tableSize) => {
    let hash = 17; // Here we start the hash with a random prime num

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize; // Char code will return the character ASCII value. Each char will be multiplied each time and the hash will get bigger. To avoid an extreme big hash mod with the table size was used. You can also multiply everyting like I did with 13 to add make the function perform better and avoid collissions
    }

    return hash;
}


class HashTable {

    // A table is an array
    table = new Array(3); // This syntax used to specify length
    numItems = 0; // THis will keep track of the items

    // Resize arrat
    resize = () => {
        const newTable = new Array(this.table.length * 2); // Doubling the array's length by creating a new one

        this.table.forEach(item => { // Hashes change when we resize so we need to compute the hashes again for each item!
            if (item) { // The position could be empty. Each item is an array
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length); // new hash+

                    if (newTable[idx]) { // Checking for collissions
                        newTable[idx].push([key, value]); // CHAINING to avoid collissions
                    } else {
                        newTable[idx] = [[key, value]]; // CHAINING to avoid collissions
                    }
                })
            }
        })
        this.table = newTable;
    }


    setItem = (key, value) => { // Adding an item 
        this.numItems++; // This should actually be checked for repeated items but to keep it simple will be used like this
        const loadFactor = this.numItems / this.table.length; // Load factor is used to check how full is your table. I can use it to resize my table for better performance
        if (loadFactor > .8) { // If it is around 80% we want to resize the array
            console.log("Resizing hash table!");
            this.resize();
        }
        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) { // Checking for collissions
            this.table[idx].push([key, value]); // CHAINING to avoid collissions
        } else {
            this.table[idx] = [[key, value]]; // CHAINING to avoid collissions
        }

        //this.table[idx] = value; Chaining applied above for collissions so the values will be stored as Linked Lists
    };

    getItem = (key) => { // Getting the item
        const idx = hashStringToInt(key, this.table.length); // You get the hash first to go and find the item

        if (!this.table[idx]) {
            return null;
        }

        // O(n)
        return this.table[idx].find(x => x[0] === key)[1]; // Because elements are stored as linked lists (arrays in this case) we must return the first item of each index and [1] to get the actual value
    }
}

const myTable = new HashTable();

myTable.setItem("firstName", "bob");
myTable.setItem("dob", "1/2/3");
console.log(myTable.table.length); // Length 3

myTable.setItem("firstName", "bob"); // Table resized because of load factor
myTable.setItem("abc", "qwerty");

console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("dob"));

console.log(myTable.table.length); // Length 6
