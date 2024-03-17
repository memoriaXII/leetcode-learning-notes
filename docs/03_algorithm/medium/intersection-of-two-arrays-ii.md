---
sidebar_position: 1
tags:
  - medium
---

# Intersection of Two Arrays II

[LeetCode: Intersection of Two Arrays II ](https://leetcode.com/problems/intersection-of-two-arrays-ii)

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

#### Follow up:

- What if the given array is already sorted? How would you optimize your algorithm?
- What if nums1's size is small compared to nums2's size? Which algorithm is better?
- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

### Solution

```jsx title="Intersection of Two Arrays II" :
function countMap(nums: number[]) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }
  return map;
}
/** x
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersectArr = (nums1: number[], nums2: number[]) => {
  const map1 = countMap(nums1);
  const map2 = countMap(nums2);
  const res = [];
  for (const num of map1.keys()) {
    const count1 = map1.get(num);
    const count2 = map2.get(num);
    if (count2) {
      const pushCount = Math.min(count1, count2);
      for (let i = 0; i < pushCount; i++) {
        res.push(num);
      }
    }
  }

  return res;
};

intersectArr([1, 5, 5, 1], [5, 5, 5]);
//Runtime 101 ms Beats 28.89% Memory 43.9 MB
```

```jsx title="Intersection of Two Arrays II"
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const shortArray = nums2.length > nums1.length ? nums1 : nums2;
  const longArray = nums2.length > nums1.length ? nums2 : nums1;
  //使用短陣列做 filter 可以減少進入 loop 的次數
  return shortArray.filter((item, idx) => {
    if (longArray.indexOf(item) > -1) {
      //可以修改陣列的內容為 null 避免重複配對，[1], [1,1] 回傳的結果應該要是 [1]
      longArray[longArray.indexOf(item)] = null;
      return true;
    } else {
      return false;
    }
  });
};
console.log(intersect([1], [1, 1]));
//Runtime 67 ms Beats 82.10% Memory 42.5 MB Beats 74.31%
```
