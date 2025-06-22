# Recursion
-> when a function calls itself to solve smaller instances of the problem. <br>
-> contain a base case which avoids infinite loops. <br>
-> usefull when a big problem can be broken down into smaller sub-problems. <br>
-> eg. Fibonacci Series <br>
 
# Time Complexity For Recursive Approach
-> O(n)  <br>
-> Performs one call per year. <br>
-> Each call performs a single multiplication and then recurse once. <br>

# Space Complexity For Recursive Approach
-> O(n) <br>
-> It will maintain a call stack for n calls. <br>

# Optimisation - Iterative Method 
Using Iterative method over recursive method has the following advantages : <br>
-> TC - O(n)  <br>
    -- Performs a single loop form 0 to n. <br>
    -- Each year's value is calculated using starighforward multiplication. <br>
-> SC - O(1) <br>
    -- requires only few varialbes. <br>
    -- no need to maintain stack like recursive appraoch. <br>
-> No risk of stack overflow. <br>
-> Can handle lasrge values (eg. 10,000 years). <br>
-> can be extended whenever needed as per the requirement.
    
