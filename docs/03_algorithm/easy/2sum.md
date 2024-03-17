---
sidebar_position: 1
tags:
  - easy
---

# two-sum

[LeetCode: two-sum ](https://leetcode.com/problems/two-sum)

Given an array of integers <code>nums</code> and an integer target, return indices of the two nums such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

```

### Example 2

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Solution

```jsx title="two-sum (hash map)"
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
```

```jsx title="two-sum (two-pointer)"
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    indexArr.push({ index: i, value: nums[i] });
  }
  indexArr.sort((a, b) => a.value - b.value);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = indexArr[left].value + indexArr[right].value;
    if (sum === target) {
      return [indexArr[left].index, indexArr[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}
```
