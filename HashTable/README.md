# HASH TABLE


## WHAT ARE THEY? 

It is a key value lookup, given a key like "Bob" you associate a value with it like new Person(id=123, age=25); A string is often used as the key but it can be anything. We store the values in an array. For a hash table we have a hash function that converts a String with some computation into an integer that remaps that integer into an index of an array, so we map from the key to the hashcode to the index.


## HASH COLLISIONS 

There are HASH COLLISIONS, i.e 2 strings have the same hash codes or different hashcodes but same index. There are different ways of solving a collision, one of the most popular is Chaining which basically stores the collisions in a Linked List. So, rather than being an array of objects of the same type it is going to be an array of Linked Lists. The Linked List stores not only the objects but the original keys as well.
A hash function should try to minimize the collisions

Hash tables are really useful and common in interview questions. Have them at the top of your mind to solve problems!



## Reference:
- https://www.youtube.com/watch?v=shs0KM3wKv8&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=13
- https://www.youtube.com/watch?v=UOxTMOCTEZk&t=1288s
