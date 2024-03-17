---
sidebar_position: 1
tags:
  - medium
---

# Single Element in a Sorted Array

[LeetCode: Single Element in a Sorted Array ](https://leetcode.com/problems/single-element-in-a-sorted-array)

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

```
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

```
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

### Solution

```jsx title="Single Element in a Sorted Array" :
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i]);
    if (!count) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], count + 1);
    }
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
};
```
