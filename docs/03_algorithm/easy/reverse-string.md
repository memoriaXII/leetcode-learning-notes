---
sidebar_position: 1
tags:
  - easy
---

# reverse-string

[LeetCode: reverse-string ](https://leetcode.com/problems/reverse-string)

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

### Example 1

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

```

### Example 2

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Solution

```jsx title="reverse-string"
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.reverse().join();
};
reverseString(["h", "e", "l", "l", "o"]);
```
