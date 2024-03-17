---
sidebar_position: 1
tags:
  - operators
---

# Spread Operator… / Rest Parameter…

***the rest parameter** is a feature that allows a function to accept an indefinite number of arguments*

```jsx
// Rest parameter
var argumentsLength = function(...args) {
 // 也可以把 array like args 轉 array 使用 [...args]
 return args.length
};

argumentsLength(1,2,3) // 3
```

***The spread operator** is used to unpack elements from an array or an iterable object (like a string or a set) into individual elements.*

```jsx

// Spread Operator
let arr = [3];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,2,8,9,15

// copy array
let arr = [1, 2, 3];
let arrCopy = [...arr]; 

```

# 推薦閱讀

英文: Rest parameters and spread syntax (<https://javascript.info/rest-parameters-spread>)

延伸考題 array-like object 跟 array 有什麼不同 ?

像 function 裡的 arguments 是 array like object ，他可以使用 length、for…of、arguments[0] 等但卻不能使用 array 原生方法例如 push、forEach …等。若想要使用 array 原生方法必須使用 […arguments] 或Array.from() 轉成真正 array 才能使用
