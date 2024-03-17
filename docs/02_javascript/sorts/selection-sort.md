---
sidebar_position: 1
tags:
  - selection-sort
---

## Selection Sort

similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

```javascript
function selectionSort(arr: any) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      // looking for lowest
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    //temporarily store the value at position i in the array before it gets overwritten with the value at position lowest during the swap.
    const temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}
```
