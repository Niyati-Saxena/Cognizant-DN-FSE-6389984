# Big O Notation :
-> Describes how the resource requirements grow as the input size increases. <br>
-> Focuses on *Upper Bound* performance ie *worst case* scenario. <br>
-> Ignores the constants and the lower-order terms. <br>
-> Describes efficiency of the algorithm, enabling comparisons. <br>

# Search Operations : 
Therea are mainly two types of search operations <br>
-> Linear Search - Which searches data linearly going on each elements one by one. <br>
-> Binary Search - Which searches data by dividing the *sorted* array into two halves iteratively. <br>

# Comparision of TC : 
| Case Type    | Linear Search | Binary Search |
|--------------|---------------|----------------|
| Best Case    | O(1)          | O(1)           |
| Average Case | O(n)          | O(log n)       |
| Worst Case   | O(n)          | O(log n)       |


# Most Suitable Algorithm 
For our E-Commerce Platform the most suitble will be a *BINARY SEARCH* :  <br>
-> Attributes like ProductID & ProductName can be sorted easily. <br>
-> Optimal TC - O(logn) faster than linear TC O(n). <br>
-> Suitable for platforms with large datasets like in our case thousands of products. <br>


