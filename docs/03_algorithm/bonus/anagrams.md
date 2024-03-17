---
sidebar_position: 1
tags:
  - bonus
---

# Anagrams (Bonus)

Give two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

```
Note: You may assume the string contains only lowercase alphabets.
Time Complexity - O(n)
```

### Example 1

```
Input: input = '', ''
Output: true

```

### Example 2

```
Input: input = 'aaz', 'zza'
Output: false
```

### Example 3

```
Input: input = 'anagram', 'nagaram'
Output: true
```

### Example 4

```
Input: input = 'rat', 'car'
Output: false
```

### Example 5

```
Input: input = 'awesome', 'awesom'
Output: false
```

### Example 6

```
Input: input = 'qwerty', 'qeywrt'
Output: true
```

### Example 7

```
Input: input = 'texttwisttime', 'timetwisttext'
Output: true
```

### Solution

```jsx title="Anagrams"
/**
 * @param {string} string1
 * @param {string} string2
 * @return {}
 */
const countMap = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]);
    if (count) {
      map.set(arr[i], count + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
};

function validAnagrams(string1, string2) {
  const map1 = countMap(string1.split(""));
  const map2 = countMap(string2.split(""));
  for (const num of map1.keys()) {
    if (!map2.get(num)) {
      return false;
    }
    if (map1.get(num) !== map2.get(num)) {
      return false;
    }
  }
  return true;
}
```
