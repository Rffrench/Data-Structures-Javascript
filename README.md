# Data-Structures-Javascript
A collection of small Javascript files of many Data Structures and their explanation.

# ¿What are they?

A data structure is a way of organizing data that is stored in a computer so that it can be used efficiently. They are different ways of storing data in computers

Data structures are the way we are able to store and retrieve data. You may already be familiar with Python lists and dictionaries, or Javascript arrays and objects. If so, you know that lists and arrays are sequential with data accessed by index while dictionaries and objects use a named key to store and retrieve information.

The data structures that exist in programming languages are pretty similar to real-world systems that we use outside of the digital sphere. Imagine that you go to the grocery store. At this particular grocery store, the frozen pizza is stored next to the bell peppers and the toothbrushes are next to the milk. The store does not have signs that indicate where different items are located. In this disorganized grocery store, you would have a pretty difficult time trying to find what you were looking for!

Fortunately, most grocery stores have a clear order to the way the store is stocked and laid out. Similarly, data structures provide us with a way to organize information (including other data structures!) in a digital space.

Data structures handle four main functions for us:

    Inputting information
    Processing information
    Maintaining information
    Retrieving information

Inputting is largely concerned with how the data is received. What kind of information can be included? Will the new data be added to the beginning, end, or somewhere in the middle of the existing data? Does an existing point of data need to be updated or destroyed?

Processing gets at the way that data is manipulated in the data structure. This can occur concurrently or as a result of other processes that data structures handle. How does existing data that has been stored need to change to accommodate new, updated, or removed data?

Maintaining is focused on how the data is organized within the structure. Which relationships need to be maintained between pieces of data? How much memory must the system reserve (allocate) to accommodate the data?

Retrieving is devoted to finding and returning the data that is stored in the structure. How can we access that information again? What steps does the data structure need to take to get the information back to us?


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

## References
- https://news.codecademy.com/why-data-structures/