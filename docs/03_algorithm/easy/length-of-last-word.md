---
sidebar_position: 1
tags:
  - easy
---

# length-of-last-word

[LeetCode: length-of-last-word ](https://leetcode.com/problems/length-of-last-word)

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

### Example 1

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

```

### Example 2

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

```

### Example 3

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

```

### Solution

```jsx title="length-of-last-word"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 排除尾巴的空白
  let endIndex = s.length - 1;
  while (s[endIndex] === " ") {
    endIndex--;
  }
  let len = 0;
  while (endIndex >= 0 && s[endIndex] !== " ") {
    len++;
    endIndex--;
  }
  return len;
};
```

```jsx title="length-of-last-word"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};
```
