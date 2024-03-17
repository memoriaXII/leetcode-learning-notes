---
sidebar_position: 1
tags:
  - bonus
---

# Count Unique Values (Bonus)

Write a function called <code>countUniqueValues</code>, which accepts a sorted arrray, and counts the unique values in the array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

### Example 1

```
Input: nums = [1,1,1,1,1,2]
Output: 2

```

### Example 2

```
Input: nums = [1,2,3,4,4,4,7,7,12,12,13]
Output: 7
```

### Example 3

```
Input: nums = []
Output: 0
```

### Example 4

```
Input: nums = [-2,-1,-1,0,1]
Output: 4
```

### Solution

```jsx title="sliding window"
/**
 * @param {number[]} arr
 * @return {number[] }
 */
function countUniqueValues(arr) {
  let uniqueCount = 1;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueCount++;
    }
  }
  return uniqueCount;
}
```

```jsx title="hash map"
/**
 * @param {number[]} arr
 * @return {number}
 */
function countUniqueValues(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]);
    if (count) {
      // always only settle once
      map.set(arr[i], count);
    } else {
      // record count
      map.set(arr[i], 1);
    }
  }
  return map.size;
}
```

```jsx title="two pointer"
function countUniqueValues(arr: number[]) {
  let left = 0; // 1
  let right = 1; // 3
  const end = arr.length - 1;
  while (right !== end + 1) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      console.log(arr[left], arr[right]);
      arr[left] = arr[right];
    }
  }
}
```

```jsx title="two pointer"
function countUniqueValues(arr: number[]) {
  if (arr.length === 0) return 0;
  let count = 0;
  for (let j = 1; j < arr.length; j++) {
    // check if the are equal, if they are, then is duplicate
    if (arr[count] !== arr[j]) {
      // if different then replace it the right side value
      count++;
      arr[count] = arr[j];
    }
  }
  // When the initial value of count is set to 1, the first value in the input array is not counted as a unique value. This is because count is only incremented inside the loop when a unique value is encountered,
  // and the first value in the array is not compared to any other value in the loop.
  return count + 1;
}
```
