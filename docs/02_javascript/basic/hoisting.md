---

sidebar_position: 1
tags:

- hoisting

---


# Hoisting

今天又要來介紹新的基礎觀念啦，在認識Hoisting之前，只單純知道宣告變數的方式，也沒有在乎它放在程式哪個段落會不會有影響。
在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。雖然單純看來是被移動到程式的區塊頂端，但要注意的是，變數和函數的宣告會在編譯階段就被放入記憶體，這樣做的優點，可以在程式碼宣告該函式之前使用它。

在 var x=1之前寫上console，x印出來會是什麼？ 會印出undefined
完全同等var x=undefined; console.log(x); x=1;
如果直接宣告console.log(y)會出現referenceError:y is not defined(因為從來都沒有直接用var 去宣告過y)

### let 跟 const 與 hoisting

```jsx
console.log(x);// ReferenceError: x is not defined
    let x
```

以為這樣let就沒有提升嗎？直到看到Huli老師文章範例

```jsx
var a = 10
function test(){
  console.log(a)
  let a;   //這裡也用let宣告a
}
test()
```

Huli：
如果 let 真的沒有 hoisting 的話，答案應該會輸出10，因為 log 那一行會存取到外面的var a = 10的這個變數
答案卻是：ReferenceError: a is not defined。
意思就是，它的確提升了，只是提升後的行為跟 var 比較不一樣。

與 var 的差別在於提升之後，var 宣告的變數會被初始化為 undefined，而 let 與 const 的宣告不會被初始化為 undefined。
在「提升之後」以及「賦值之前」這段「期間」，如果你存取它就會拋出錯誤，而這段期間就稱做是 TDZ(Temporal Dead Zone)，它是一個為了解釋 let 與 const 的 hoisting 行為所提出的一個名詞

### 推薦閱讀

[Day 18] JS <https://ithelp.ithome.com.tw/articles/10266627>
