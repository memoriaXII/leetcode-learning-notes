---
sidebar_position: 1
tags:
  - javascript
---

# palindrome rearranging

/\_
Given a string, find out if its characters can be rearranged to form a palindrome.
Example
For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.
We can rearrange "aabb" to make "abba", which is a palindrome.

palindrome = all even integers except 1 odd '' = just even integers
if more than one odd then not palindrome

### Example

a,a,b,c, = not
a,a,b,b,c,c = yes
a,a,b,b,c,c,d,d = yes
a,b,c,a,b,c,a,b,c = not
\_/

### Solution

```jsx
function palindromeRearranging(inputString: any) {
  const arr = inputString.split(",").join("");
  const test = new Map();
  for (let i = 0; i < arr.length; i++) {
    let count = test.get(arr[i]);
    if (test.get(arr[i])) {
      test.set(arr[i], count + 1);
    } else {
      test.set(arr[i], 1);
    }
  }
  for (let [key, value] of test.entries()) {
    if (value % 2 !== 0) {
      return false;
    }
  }
  return true;
}
```
