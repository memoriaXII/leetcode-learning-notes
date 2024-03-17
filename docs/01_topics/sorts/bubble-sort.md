---
sidebar_position: 1
tags:
  - bubble-sort
---

## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

ps:
The Bubble Sort algorithm requires nested loops to compare adjacent elements and swap them if they are in the wrong order. However, there are other sorting algorithms that do not require nested loops and are generally more efficient than Bubble Sort.

Here is an example of how Bubble Sort works:

```jsx title="Bubble (not optimized)"
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
```

```jsx title="bubble (noswap optimized)"
function bubbleSort(arr: any) {
  // descending order, -1 because because the last element (which has index i) is already sorted
  // The purpose of the outer loop is to control the number of iterations needed to sort the array. The outer loop runs arr.length - 1 times, which is the number of passes needed to sort the array.
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      // start compare first and second, swap if needed
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```

```javascript
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
```
