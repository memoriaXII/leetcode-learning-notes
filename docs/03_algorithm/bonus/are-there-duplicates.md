---
sidebar_position: 1
tags:
  - bonus
---

# Are there duplicates (Bonus)

implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

### Example 1

```
Input: nums = 1,2,3
Output: false

```

### Example 2

```
Input: nums = 1,2,2
Output: true
```

### Example 2

```
Input: nums = 'a' , 'b' , 'c' , 'a'
Output: true
```

### Solution

```jsx title="areThereDuplicates (hashmap)"
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @return {boolean}
 */

function areThereDuplicates(num1, num2, num3, num4) {
  // good luck. (supply any arguments you deem necessary.)
  const arr = [num1, num2, num3, num4];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]);
    if (count) {
      map.set(arr[i], count + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  for (const num of map.keys()) {
    if (map.get(num) > 1) {
      return true;
    }
  }
  return false;
}
```

```jsx title="areThereDuplicates (Multiple Pointers)"
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
```

```jsx title="areThereDuplicates (javascript set)"
function areThereDuplicates(arg) {
  return new Set(arg).size !== arg.length;
}
```
