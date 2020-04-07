# Print all substrings of a string

```
Input: abcd
Output:
a, ab, abc, abcd
b, bc, bcd
c, cd
d
```

## Idea

Idea is to pick each letter from the string one by one, which becomes prefix and then add each letter to the prefix from suffix one by one to form substring. Each time when we add letter from suffix to the prefix, we get new substring and this substring then becomes new prefix. Basically, we have all substrings that start from each letter of string. For example `abcd`. We get all substrings that either start from `a`, `b`, `c` and `d`.

## Code

```javascript
const { print } = require('./helper');

function getAllSubstrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let substring = '';
    for (let j = i; j < str.length; j++) {
      substring += str[j];
      result.push(substring);
    }
  }
  return result;
}

print(getAllSubstrings('abcd'));
```

```javascript
[ 'a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd' ]
```

## Complexity

### Time

Number of times inner loop runs is reduced by 1 after each iteration of outer loop. So we cannot obtain "how many times both the loops run" together by multiplying outer loop with inner loop. Therrefore, we do the addition and add all the inner loops together and the sum will give us the total count.

For n=4

Outer loop  | Inner loop
----------- | ----------
iteration 1 | 4 times
iteration 2 | 3 times
iteration 3 | 2 times
iteration 4 | 1 times

Generic farmula to represent the pattern is `n + n-1 + n-2 + n-3 + ... + 1`. This is an arithmetic series and the summation farmula is `n(n+1)/2`. This farmula gives us the total number of times both the loops run together and this is more or less equal to `O(n^2)`.

### Space

`n(n+1)/2 => O(n^2)` because `result` variable stores all substrings. This is the variable which grows when string's size grows.
