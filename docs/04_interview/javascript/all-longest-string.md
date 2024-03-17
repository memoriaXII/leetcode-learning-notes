---
sidebar_position: 1
tags:
  - javascript
---

# all longest string

Given an array of strings, return another array containing all of its longest strings.
Example
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

```javascript
function allLongestStrings(inputArray) {
  let max = 0;

  for (let i = 0; i < inputArray.length; i++) {
    max = Math.max(max, inputArray[i].length);
  }
  let current = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === max) {
      current.push(inputArray[i]);
    }
  }
  return current;
}
```
