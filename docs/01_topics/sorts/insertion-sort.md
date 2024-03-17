---
sidebar_position: 1
tags:
  - insertion-sort
---

## Insertion sort

Insertion Sort is another simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted sub-list. Here are the steps for performing Insertion Sort on a list of elements:

Starting with the second element (index 1) of the list, compare it with the first element (index 0). If the second element is smaller, swap the two elements to put them in sorted order.
Move to the next element (index 2) and compare it with the elements before it (elements at indices 0 and 1). Insert the element into its correct position in the sorted sub-list of the previous elements, by swapping it with the elements before it until it is in its correct position.
Continue this process for each remaining element of the list, each time comparing the current element with the sorted sub-list before it, and inserting it into the correct position by swapping with the elements before it.

Here is an example of how Insertion sort works:

```jsx
// The basic idea behind this algorithm is to iteratively place each element
// in its correct position within the sorted portion of the array.
function insertionSort(arr) {
  let currentVal;
  // This is a loop that iterates over each element in the array starting at the second element (i.e., index 1). This is because the first element (i.e., index 0) is already considered sorted.
  for (var i = 1; i < arr.length; i++) {
    // currentVal = arr[i] : This line sets the value of currentVal to the value of the current element being sorted.
    currentVal = arr[i];
    // The loop will continue to execute as long as j is greater than or equal to 0,
    // The loop will continue to execute as long as the value of the element at index j in the sorted subarray is greater than currentVal,
    // which means that we haven't found the correct position for currentVal yet.
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(j, i, arr, currentVal, "inner");
    }
    console.log(j, i, arr, currentVal, "outter val");
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([15, 13, 16]), "result");

// // Unsorted array
// [3, 7, 1, 5, 2]

// // First iteration (i = 1)
// currentVal = 7
// j = 0
// [3, 7, 1, 5, 2] -> [3, 7, 1, 5, 2]
// [3, 7, 1, 5, 2] -> [3, 7, 7, 5, 2]
// [3, 7, 1, 5, 2] -> [3, 3, 7, 5, 2]
// [3, 7, 1, 5, 2] -> [1, 3, 7, 5, 2]
// [1, 3, 7, 5, 2] -> [1, 3, 7, 5, 2]

// // Second iteration (i = 2)
// currentVal = 1
// j = 1
// [1, 3, 7, 5, 2] -> [1, 3, 7, 5, 2]
// [1, 3, 7, 5, 2] -> [1, 3, 7, 5, 2]
// [1, 3, 7, 5, 2] -> [1, 3, 7, 5, 2]
// [1, 3, 7, 5, 2] -> [1, 3, 7, 7, 2]
// [1, 3, 7, 5, 2] -> [1, 3, 3, 7, 2]
// [1, 3, 7, 5, 2] -> [1, 1, 3, 7, 2]
// [1, 3, 7, 5, 2] -> [1, 1, 3, 7, 7]
// [1, 1, 3, 7, 7] -> [1, 1, 3, 7, 7]
// [1, 1, 3, 7, 7] -> [1, 1, 3, 5, 7]
// [1, 1, 3, 5, 7] -> [1, 1, 3, 5, 7]

// // Third iteration (i = 3)
// currentVal = 5
// j = 2
// [1, 1, 3, 5, 7] -> [1, 1, 3, 5, 7]
// [1, 1, 3, 5, 7] -> [1, 1, 3, 5, 7]
// [1, 1, 3, 5, 7] -> [1, 1, 3, 5, 7]
// [1, 1, 3, 5, 7] -> [1, 1, 3, 7, 7]
// [1, 1, 3, 7, 7] -> [1, 1, 3, 7, 7]
// [1, 1, 3, 7, 7] -> [1, 1, 3, 5, 7]
// [1, 1, 3, 5, 7] ->

insertionSort([2, 1, 9, 76, 4]);
```
