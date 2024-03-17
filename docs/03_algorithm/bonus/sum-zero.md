---
sidebar_position: 1
tags:
  - bonus
---

# Sum Zero (Bonus)

Write a function called <code>Sum Zero</code>, which accepts sorted array of integers. This function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

### Example 1

```
Input: nums = [-3,-2,-1,0,1,2,3]
Output: [-3,-3]

```

### Example 2

```
Input: nums = [-2,0,1,3]
Output: undefined
```

### Example 3

```
Input: nums = [1,2,3]
Output: undefined
```

### Solution

```jsx title="same (naive solution)"
/**
 * @param {number[]} arr
 * @return {number[] | undefined}
 */
function sumZero(arr: number[]) {
  arr.sort((a, b) => a - b);
  const target = 0;
  let left = 0;
  let right = arr.length - 1;
  const result = [];
  //failsafe
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      // is skipping over any duplicates on the left side of the array.
      while (arr[left] === arr[left + 1]) {
        left++;
      }
      // is skipping over any duplicates on the right side of the array.
      while (arr[right] === arr[right - 1]) {
        right--;
      }
      // This moves the left pointer to the next position in the array,
      // so that the next iteration of the main while loop will consider a different pair of elements.
      left++;
      right--;
    }
    if (sum > target) {
      right--;
    } else if (target > sum) {
      left++;
    }
  }
  return result;
}
input: [-4, -3, -2, -1, 0, 1, 2, 3, 10, 4, 6, -6];
output: [
  [-6, 6],
  [-4, 4],
  [-3, 3],
  [-2, 2],
  [-1, 1],
];
```
