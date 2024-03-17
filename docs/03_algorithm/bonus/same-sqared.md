---
sidebar_position: 1
tags:
  - bonus
---

# Same Sqared (Bonus)

Write a function called <code>same</code>, which accepts two arrays. This should return true if every value in the array has it's corresponding value sqared in the second array. The frequency of values must be the same.

### Example 1

```
Input: nums = [1,2,3], [4,1,9]
Output: true

```

### Example 2

```
Input: nums = [1,2,3], [1,9]
Output: false
```

### Solution

```jsx title="same (naive solution)"
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const findIndex = arr2.indexOf(arr1[i] ** 2);
    if (findIndex === -1) {
      return false;
    }
    // This would ensure that each element in arr1 is only matched once with a corresponding value in arr2, and produce the correct result.
    arr2.splice(findIndex, 1);
  }
  return true;
}
```

```jsx title="same (refactor solution)"
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

```jsx title="same (hashmap solution)"
const countMap = (arr: number[]) => {
  const map = new Map();
  for (const val of arr) {
    const count = map.get(val);
    if (!count) {
      map.set(val, 1);
    } else {
      map.set(val, count + 1);
    }
  }
  return map;
};

function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const map1: number[] = countMap(arr1);
  const map2: number[] = countMap(arr2);

  for (const key of map1.keys()) {
    if (!map2.has(key ** 2)) {
      return false;
    }
    if (map2.get(key ** 2) !== map1.get(key)) {
      return false;
    }
  }
  return true;
}
```
