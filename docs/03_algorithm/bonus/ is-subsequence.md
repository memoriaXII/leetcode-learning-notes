---
sidebar_position: 1
tags:
  - bonus
---

# isSubsequence (Bonus)

Write a function called <code>isSubsequence</code> which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

### Example 1

```
Input: nums = 'hello', 'hello world'
Output: true

```

### Example 2

```
Input: nums = 'sing', 'sting'
Output: true
```

### Example 3

```
Input: nums = 'abc', 'abracadabra'
Output: true
```

### Example 4

```
Input: nums = 'abc', 'acb'
Output: false (order matters)
```

### Solution

```jsx
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
```
