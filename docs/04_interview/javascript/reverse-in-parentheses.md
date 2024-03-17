---
sidebar_position: 1
tags:
  - javascript
---

# sort by height

/\*
Write a function that reverses characters in (possibly nested)
parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";

### Solution

```jsx
function reverseInParentheses(inputString: any) {
  const queue = [];
  let final = "";
  for (let i = 0; i < inputString.length; i++) {
    const current = inputString[i];
    if (current === "(") {
      queue.push(final);
      final = "";
    } else if (current === ")") {
      final = final.split("").reverse().join("");
      const prevStr = queue.pop();
      final = prevStr + final;
    } else {
      final += current;
    }
  }
  return final;
}
console.log(reverseInParentheses("foora(rab)"));
```
