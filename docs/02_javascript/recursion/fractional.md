---
sidebar_position: 1
tags:
  - recursion
---

# fractional

Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 _ 3 _ 2 \* 1 equals 24. factorial zero (0!) is always 1.

## Solution:

```jsx
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(base) {
  if (base <= 1) return 1;
  return base * factorial(base - 1);
}
```
