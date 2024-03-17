---
sidebar_position: 1
tags:
  - recursion
---

# productOfArray

Write a function called <code>productOfArray</code> which takes in an array of numbers and returns the product of them all.

## Solution:

```jsx
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
```
