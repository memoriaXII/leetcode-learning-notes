---
sidebar_position: 1
tags:
  - medium
---

# 3sum

[LeetCode: 3sum ](https://leetcode.com/problems/3sum)

Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]] </code>such that <code>i != j, i != k, and j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.

Notice that the solution set must not contain duplicate triplets.

### Example 1

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

```

### Example 2

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

### Solution

```jsx title="3sum"
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sums = nums[i] + nums[start] + nums[end];
      if (sums > 0) {
        end--;
      } else if (sums < 0) {
        start++;
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) {
          start++;
        }
        while (nums[end] === nums[end - 1]) {
          end--;
        }
        start++;
        end--;
      }
    }
  }
  return result;
};
```
