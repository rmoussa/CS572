var isEven = function(num) {
  return num % 2 === 0;
};
Array.prototype.even = function() {
  process.nextTick(() => {
    const even = this.filter(isEven);
    console.log(even);
  });
};

var isOdd = function(num) {
  return num % 2 !== 0;
};
Array.prototype.odd = function() {
  process.nextTick(() => {
    const odd = this.filter(isOdd);
    console.log(odd);
  });
};

console.log("Start");
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log("End");
