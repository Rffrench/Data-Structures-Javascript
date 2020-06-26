# Data-Structures-Javascript
A collection of small Javascript files of many Data Structures and their explanation.

# ¿What are they?

A data structure is a way of organizing data that is stored in a computer so that it can be used efficiently. They are different ways of storing data in computers


# Memory
It is a long tape of bytes. Each byte in the RAM is stored in an address. Applications will have an address for them 
Each character is stored as 4 bytes or 32 bits long. (4 x 8 bits) byte = 8 bits.  
Each integer, decimal or string will then take the same amount of Memory.


# Recursion

Recursion is a way of solving a problem by having a function call itself. 
Example: factorial function. The function calls itself recursively but once it reaches the min value 1 it goes back again the tree to return the value.

int fact(int n){
    if(n >= 1){ return n * fact(n-1); } // This function will call itself everytime 
    else { return 1; }
}

fact(4) -> 4 * fact(3)
fact(3) -> 3 * fact(2)




# Big O Notation

 Big O notation is important because that will tell how long is an algorithm going to take to complete. Always remember is about Time and complexity