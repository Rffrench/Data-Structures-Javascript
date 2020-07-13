# Bloom Filter

## What is it?
A bloom filter is a space-efficient probabilistic data structure designed to test **rapidly** whether an element is present in a set. It is designed to be extremely fast and use **minimal memory** at the cost of potential **false positives**. False positive matches are possible, but false negatives are not – in other words, a query returns either "possibly in set" or "definitely not in set".

Bloom proposed the technique for applications where the amount of source data would require an impractically large amount of memory if "conventional" error-free hashing techniques were applied.

An empty bloom filter is an empty fixed-size array of 'm' bits set to 0. There must also be some number of 'k' hash functions defined, each of which maps or hashes some set element to one of the array positions, generating a uniform random distribution. 

- There are two main operations a bloom filter can perform: **insertion** and **search**. Search may result in false positives. **Deletion** is not possible.
- Bloom filter gives you a **definite NO** or a **maybe YES.**
- A larger filter will have less false positives, and a smaller one more. 
- The hash functions used in a Bloom filter should be independent and uniformly distributed. They should also be as fast as possible (cryptographic hashes such as SHA1, though widely used therefore are not very good choices). Examples of fast, simple hashes that are independent enough3 include **murmur**, the **fnv** series of hashes, and **HashMix**. 
- The more hash functions you have, the slower your bloom filter, and the quicker it fills up. If you have too few, however, you may suffer too many false positives. 


**Insertion**

To add an element to the Bloom filter, we simply hash it a few times and set the bits in the bit vector at the index of those hashes to 1 (true). 

**Search**

During a search, the same hash functions are called and used to hash the input. We then check if the indexes received all have a value of true inside our bloom filter. If they all have a value of true, we know that the bloom filter may have had the value previously inserted.
However, it's not certain, because it's possible that other values previously inserted flipped the values to true. The values aren't necessarily true due to the item currently being searched for. Absolute certainty is impossible unless only a single item has previously been inserted.
While checking the bloom filter for the indexes returned by our hash functions, if even one of them has a value of false, we definitively know that the item was not previously inserted.


**Practical Example**
 
When inserting, each element will be hashed and the index will be switched to 1 for that value. For example the array has say 15 elements I could have a string like "abcd123" which after hashed will have the index 6 "assigned". Then if I wanted to check if the string "awesome" exists I would have to run the hash functions on it and those hash functions will give me a value to compare with the array. I will have different hash functions so one function could actually hash it as 6 but another as 9, that means that it does not exist although I had the same hash for that value with one of the functions. I need 100% certainty.

The hash functions can give you false positives, for the string "awesome" the hash functions could produce the values 6 and 4 for example (imagining that index 4 exists and is set to the binary value 1). For this case the bloom filter will be wrong but that is something that can happen with this data structure, it's not likely that it will occur though.

## Examples of Bloom Filters

A bloom filter can be used on a blogging website. If the goal is to show readers only articles that they have never seen before, a bloom filter is perfect. It can store hashed values based on the articles. After a user reads a few articles, they can be inserted into the filter. The next time the user visits the site, those articles can be filtered out of the results.

Some articles will inevitably be filtered out by mistake, but the cost is acceptable. It's ok if a user never sees a few articles as long as they have other, brand new ones to see every time they visit the site.

*Other examples:*

- Fruit flies use a modified version of Bloom filters to detect novelty of odors, with additional features including similarity of novel odor to that of previously experienced examples, and time elapsed since previous experience of the same odor.
- The servers of Akamai Technologies, a content delivery provider, use Bloom filters to prevent "one-hit-wonders" from being stored in its disk caches. One-hit-wonders are web objects requested by users just once, something that Akamai found applied to nearly three-quarters of their caching infrastructure. Using a Bloom filter to detect the second request for a web object and caching that object only on its second request prevents one-hit wonders from entering the disk cache, significantly reducing disk workload and increasing disk cache hit rates.
- Google Bigtable, Apache HBase and Apache Cassandra and PostgreSQL use Bloom filters to reduce the disk lookups for non-existent rows or columns. Avoiding costly disk lookups considerably increases the performance of a database query operation.
- The Google Chrome web browser used to use a Bloom filter to identify malicious URLs. Any URL was first checked against a local Bloom filter, and only if the Bloom filter returned a positive result was a full check of the URL performed (and the user warned, if that too returned a positive result).
- Microsoft Bing (search engine) uses multi-level hierarchical Bloom filters for its search index, BitFunnel. Bloom filters provided lower cost than the previous Bing index, which was based on inverted files..
- The Squid Web Proxy Cache uses Bloom filters for cache digests.
- Bitcoin uses Bloom filters to speed up wallet synchronization.
- The Venti archival storage system uses Bloom filters to detect previously stored data.
- The SPIN model checker uses Bloom filters to track the reachable state space for large verification problems.
- The Cascading analytics framework uses Bloom filters to speed up asymmetric joins, where one of the joined data sets is significantly larger than the other (often called Bloom join in the database literature).
- The Exim mail transfer agent (MTA) uses Bloom filters in its rate-limit feature.
- Medium uses Bloom filters to avoid recommending articles a user has previously read.
- Ethereum uses Bloom filters for quickly finding logs on the Ethereum blockchain.

## Big O

Given a Bloom filter with m bits and k hashing functions, both insertion and membership testing are **O(k)**. That is, each time you want to add an element to the set or check set membership, you just need to run the element through the k hash functions and add it to the set or check those bits. 

## References
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/bloom-filter
- https://www.youtube.com/watch?v=x2sLjRK56YU
- https://llimllib.github.io/bloomfilter-tutorial/ (Graphic bloom filter test)
- https://en.wikipedia.org/wiki/Bloom_filter#Examples