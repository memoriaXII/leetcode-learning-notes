---
sidebar_position: 1
tags:
  - bonus
---

# Find Longest Substring (Bonus)

Write a function called <code>findLongestSubstring</code>, which accepts a string and returns the length of the longest substring with all distinct characters.
Examples:

### Example 1

```
Input:'rithmschool'
Output: 7
```

### Example 2

```
Input: 'thisisawesome'
Output: 6
```


### Example 3

```
Input: 'abcdefga'
Output: 7
```


### Solution

```jsx
/**
 * @param {string} string
 * @return {number}
 */

function findLongestSubstring(s: any) {
  const n = s.length
  const map = new Map()
  let maxLength = 0
  let start = 0
  let end = 0
  while (start < n && end < n) {
    if (!map.has(s[end])) {
      // Hence, end - start represents the number of characters between the start and end pointers,
      // i.e., the length of the current substring without repeating characters.
      map.set(s[end], 1)
      end++
      maxLength = Math.max(maxLength, end - start)
    } else {
      map.delete(s[start])
      start++
    }
  }
  return maxLength
}
```
