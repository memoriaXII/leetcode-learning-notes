---
sidebar_position: 1
tags:
  - quick-sort
---

## Example

```jsx
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotValue = arr[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    const value = arr[i];

    if (value <= pivotValue) {
      less.push(value);
    } else {
      greater.push(value);
    }
  }

  return [...quicksort(less), pivotValue, ...quicksort(greater)];
}
```
