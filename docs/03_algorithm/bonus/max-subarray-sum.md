---
sidebar_position: 1
tags:
  - bonus
---

# Max Subarray Sum (Bonus)

Write a function called <code>maxSubarraySum</code>, which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

### Example 1

```
Input: nums = [1,2,5,2,8,,1,5], 2
Output: 10

```

### Example 2

```
Input: nums = [1,2,5,2,8,1,5],4
Output: 17
```

### Example 3

```
Input: nums = [4,2,1,6],1
Output: 6
```

### Example 4

```
Input: nums = [4,2,1,6,2],4
Output: 13

```

### Example 5

```
Input: nums = [],4
Output: null

```

### Solution

```jsx title="naive solution"
/**
 * @param {number[]} arr
 * @param {number} num
 * @return {number}
 */
function maxSubarraySum(arr, num) {
  if (!arr.length) return null;
  // take care also the negative numbers
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}
```

```jsx title="sliding window"
/**
 * @param {number[]} arr
 * @param {number} num
 * @return {number}
 */
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    // add the inital maximum sum
    maxSum = arr[i] + maxSum;
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // minus the firstement and add the next element
    tempSum = tempSum - arr[i - num] + arr[i];
    // The line "maxSum = Math.max(maxSum, tempSum)" is used to compare the current sum of the subarray to the previously calculated maximum sum
    // and to update the maximum sum to be the maximum of the two.
    // This way, at the end of the algorithm, "maxSum" holds the maximum sum of all subarrays of length "num".
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
