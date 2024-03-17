---
sidebar_position: 1
tags:
  - javascript
---

# Almost Increasing Sequence (Bonus)

### Example 1

```
Input: nums = [1,2,4,5,-1]
Output: false

```

### Solution

```jsx
// It counts the number of times the sequence violates the increasing property,
// and returns false if the count is greater than 1.
// It checks if each number in the sequence violates the increasing property,
// and returns false if a number violates the property and cannot be removed to make the sequence increasing.

function solution(arr: any) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // check if the next nubmer is larger than previous
    if (arr[i] <= arr[i - 1]) {
      count++;
      //
      if (count > 1) {
        return false;
      }
      // compare with previous and after
      if (arr[i] <= arr[i - 2] && arr[i - 1] <= arr[i + 1]) {
        return false;
      }
    }
  }

  return true;
}
```
