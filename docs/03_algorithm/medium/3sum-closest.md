---
sidebar_position: 1
tags:
  - medium
---

# 3sum-closest

[LeetCode: 3sum-closest ](https://leetcode.com/problems/3sum-closest)

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

### Example 1

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

```

### Example 2

```
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
```

### Solution

```jsx title="3sum-closest"
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//nums = [1,2,4,5], target = 7

// So the statement is saying if the absolute value of the difference between the target
// value and the current sum is smaller than the absolute value of the difference
// between the target value and the closest sum found so far,
// it means that the current sum is closer to the target value and therefore update the closest sum found so far.

// Now the code checks the sum of every possible combination of 3 numbers in the array that starts with 1.
// The first combination is [1, 2, 4] whose sum is 7.
// The difference between the target value 7 and the current sum 7 is 0
// The difference between the target value 7 and the closest sum found so far 6 is 1
// Since the difference between the target value and the current sum is smaller than the difference between the target value and the closest sum found so far, the current sum becomes the new closest sum.

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[left] + nums[right] + nums[i];
      // 看誰的差距最小 最小的就會assign 他為新closet value

      //如果 target - currentSum 的diff越小 代表他的差距更小 那他就可以成為更close的num
      // ex: The difference between the target value 7 and the current sum 7 is 0

      // 反之如果 target-closetNum 的 diff 越大 代表他的差距越大
      // ex: The difference between the target value 7 and the closest sum found so far 6 is 1
      if (Math.abs(target - closestSum) > Math.abs(target - currentSum)) {
        // Since the difference between the target value and the current sum is smaller than the difference between the target value and the closest sum found so far, the current sum becomes the new closest sum.
        closestSum = currentSum;
      }
      if (currentSum > target) {
        right--;
      } else if (target > currentSum) {
        left++;
      } else {
        return target;
      }
    }
  }
  return closestSum;
};
```
