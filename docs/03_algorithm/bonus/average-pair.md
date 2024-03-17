---
sidebar_position: 1
tags:
  - bonus
---

# Same Frequency (Bonus)

Write a function called <code>averagePair.</code> Given a sorted array of integers and a target average, determine if there is a pair of values ​​in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

### Example 1

```
Input: nums = [], target average= 4
Output: false
```

### Example 2

```
Input: nums = [- 1 , 0 , 3 , 4 , 5 , 6 ], target average= 4.1
Output: false
```

### Example 2

```
Input: nums = [ 1 , 3 , 3 , 5 , 6 , 7 , 10 , 12 , 19 ], target average= 8
Output: true
```

### Example 3

```
Input: nums = [ 1 , 2 , 3 ], target average= 2.5
Output: true
```

### Solution

```jsx
/**
 * @param {number} num1
 * @param {number} targetAverage
 * @return {boolean}
 */

const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const sum = (arr[left] + arr[right]) / 2;
    if (target === sum) {
      left++;
      right--;
      return true;
    }
    if (target > sum) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return false;
};
```

<!-- averagePair ([ 1 , 2 , 3 ], 2.5 ) // true
averagePair ([ 1 , 3 , 3 , 5 , 6 , 7 , 10 , 12 , 19 ], 8 ) // true
averagePair ([- 1 , 0 , 3 , 4 , 5 , 6 ], 4.1 ) // false
averagePair ([], 4 ) // false  -->
