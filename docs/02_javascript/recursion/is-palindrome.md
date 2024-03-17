---
sidebar_position: 1
tags:
  - recursion
---

# isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

## Solution:

```jsx
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  const reverse = (str) => {
    if (str.length <= 1) return str;
    // gb
    return reverse(str.slice(1)) + str[0];
  };
  return reverse(str) === str;
}
```
