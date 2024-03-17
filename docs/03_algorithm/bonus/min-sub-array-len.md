---
sidebar_position: 1
tags:
  - bonus
---

# Min Sub ArrayLen (Bonus)

Write a function called <code>minSubArrayLen</code> which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:

### Example 1

```
Input: [2,3,1,2,4,3],7
Output: 2 -> because [4,3] is the smallest
```

### Example 2

```
Input: nums =[2,1,6,5,4], 9
Output: 2 -> because [5,4] is the smallest
```

### Example 3

```
Input: nums = [3,1,7,11,2,9,8,21,62,33,19], 52
Output: 1 -> because [62] is greater than 52
```

### Example 4

```
Input: nums = [1,4,16,22,5,7,8,9,10],39
Output: 3
```

### Example 5

```
Input: nums = [1,4,16,22,5,7,8,9,10],55
Output: 5
```

### Solution

```jsx
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */


function minSubArrayLen(arr, target) {
  arr.sort((a, b) => a - b)
  let sum = 0
  let start = 0
  let end = 0
  // This allows the minLen variable to store the length of the smallest subarray that meets the sum condition while iterating through the array nums.
  let minLen = Infinity

  while (start < arr.length) {
    console.log({ start, end }, arr[start], arr[end])
    if (target > sum) {
      sum += arr[end]
      end++
      // ex: sum + arr[0] = 1
      // The end index is incremented by 1, so end is now 1.
      // The current subarray being considered is now [1, 2], and sum is 3.
    }

    // Once the current sum sum becomes greater than or equal to the target sum target, we start subtracting values from sum to get closer to the target sum.
    else if (sum > target) {
      // the length of this subarray is end - start, where end is the index of the last element in the subarray and start is the index of the first element in the subarray.

     // Hence, end - start represents the number of characters between the start and end pointers,
      // i.e., the length of the current substring without repeating characters.
      minLen = Math.min(minLen, end - start)
      sum -= arr[start]
      start++
    } else {
      break
    }
  }

  return minLen === Infinity ? 0 : minLen
  // target 8
  // [1,2,3,4,5,6]
}
```
