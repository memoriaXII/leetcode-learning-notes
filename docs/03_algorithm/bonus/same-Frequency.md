---
sidebar_position: 1
tags:
  - bonus
---

# Same Frequency (Bonus)

Write a function called <code>sameFrequency</code>. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

### Example 1

```
Input: nums = 182 , 281
Output: true

```

### Example 2

```
Input: nums = 34 , 14
Output: false
```

### Example 2

```
Input: nums = 3589578 , 5879385
Output: true
```

### Example 3

```
Input: nums = 22 , 222
Output: false
```

### Solution

```jsx
/**
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */
const calcSum = (num) => {
  let maxSum = 0;
  const arr1 = String(num).split("");
  for (let i = 0; i < arr1.length; i++) {
    maxSum += +arr1[i];
  }
  return maxSum;
};

function sameFrequency(num1, num2) {
  const maxSum1 = calcSum(num1);
  const maxSum2 = calcSum(num2);
  if (maxSum1 !== maxSum2) {
    return false;
  }
  return true;
}
```

```jsx
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
```

```jsx title="sameFrequency(hashmap)"
const countMap = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]);
    if (count) {
      map.set(arr[i], count + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
};

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString().split("");
  const strNum2 = num2.toString().split("");
  if (strNum1.length !== strNum2.length) return false;

  const countNum1 = countMap(strNum1);
  const countNum2 = countMap(strNum2);

  for (const num of countNum1.keys()) {
    if (!countNum2.has(num)) {
      return false;
    }
  }
  return true;
}
```
