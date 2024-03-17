---
sidebar_position: 1
tags:
  - javascript
---

# is lucky number

/_
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first
half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.
Example
For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
_/

### Solution

```jsx
function isLucky(n: any) {
  const arr = n.toString().split("");

  //   So the differences are:

  // Math.floor always rounds down to the nearest integer.
  // Math.round rounds to the nearest integer, with ties rounded to the nearest even integer.
  // Math.ceil always rounds up to the nearest intege

  const firstHalfSum = arr
    .slice(0, Math.round(arr.length / 2))
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  console.log(
    arr.length / 2,
    Math.floor(arr.length / 2),
    Math.ceil(arr.length / 2)
  );
  // start and end. If you only provide one parameter, like in the expression arr.slice(arr.length / 2), then it is treated as the start parameter and the method returns a new array containing all elements from the start index up to the end of the array.
  const secondHalfSum = arr
    .slice(Math.round(arr.length / 2))
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return firstHalfSum === secondHalfSum;
}
```
