---
sidebar_position: 1
tags:
  - recursion
---

# reverse

Write a recursive function called reverse which accepts a string and returns a new string in reverse.

## Solution:

```jsx
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (str) => {
  if (str.length <= 1) return str;
  // gb
  return reverse(str.slice(1)) + str[0];
};
```
