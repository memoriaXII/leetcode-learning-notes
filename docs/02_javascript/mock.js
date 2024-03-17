function numberCompare(a, b) {
  return a - b;
}

[6, 4, 5, 10].sort(numberCompare);
console.log([6, 4, 5, 10].sort(numberCompare)); // [4, 5, 6, 10]
