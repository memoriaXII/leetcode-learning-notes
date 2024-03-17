---
sidebar_position: 1
tags:
  - easy
---

# plus-one

[LeetCode: plus-one ](https://leetcode.com/problems/plus-one)

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

### Example 1

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

```

### Example 2

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

```

### Example 3

```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

```

### Solution

```jsx title="plus-one"
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //  starting from the last element
  // and going backwards to the first element
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    } else if (digits[i] === 9 && i !== 0) {
      digits[i] = 0;
    }
    // we need to take care another edge case
    // is that if the first element is 9 then
    // we need to let it be [1,0] as well
    else if (digits[i] === 9 && i === 0) {
      digits[i] = 0;
      digits.unshift(1);
    }
  }
  return digits;
};
```
