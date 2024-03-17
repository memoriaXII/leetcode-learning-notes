---
sidebar_position: 1
tags:
  - javascript
---

# sort by height

/_
Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending
order without moving the trees. People can be very tall!
Example
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
_/

### Solution

```jsx
function sortByHeight(arr: number[]): number[] {
  // Extract the heights of the people
  const filtered = arr.filter((x) => x !== -1);
  // Sort the filtered in non-descending order
  filtered.sort((a, b) => a - b);

  // Place the sorted filtered back into the original array
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      arr[j] = filtered[i];
      i++;
    }
  }

  return arr;
}
```
