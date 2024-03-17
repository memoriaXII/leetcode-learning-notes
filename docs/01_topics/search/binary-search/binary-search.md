---
sidebar_position: 1
tags:
  - binary-search
---

# Binary Search

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https: //www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

## Solution:

```jsx
binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
  ],
  10
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
  ],
  100
); // -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  // 2, 5, 6, 9, 13, 15, 28, 30 elem: 103
  // if nothing find, then maybe start and end will get together

  //In other words, using start <= end condition ensures that the algorithm will search the entire range of the array even if the element is at the last position in the array, whereas using start < end would stop the search before considering the last index.
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      //28>9
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
```
