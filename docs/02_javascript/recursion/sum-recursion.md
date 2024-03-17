---
sidebar_position: 1
tags:
  - recursion
---

# Sum Recursion

Write a recursive function called sumRecursion which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

## Solution:

```jsx
function sumRecursion(num) {
  if (num == 1) {
    return 1;
  } else {
    const Sn = sumRecursion(num - 1) + num;
    return Sn;
  }
}
```
