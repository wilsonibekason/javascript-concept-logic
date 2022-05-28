let fruits = ["banana", "rice", "beans"];
console.log(fruits);
let i = "banana";

let answer = fruits.splice(i, 1);
console.log("answer: " + fruits);
console.log("kmeewefieiwII3DIQW");

const arr1 = ["a", "g", "c", 100, 40, "20", 3, 4];
const total = arr1.concat("d");
console.log(total);

console.log(total.slice(1, 2));
console.log(arr1.sort());
console.log(arr1.reverse());
console.log((arr1.sort = (a, b) => b - a));
console.log(
  arr1.sort(function (a, b) {
    return a - b;
  })
);
// THE fisher yates Methods for Array sorting
const arr2 = ["a", "g", "c", 100, 50, 80, 68, 40, "20", 3, 4];
for (let a = arr2.length - 1; a > 0; a--) {
  let j = Math.floor(Math.random() * a);
  let k = arr2[a];
  arr2[a] = arr2[j];
  arr2[j] = k;
}
console.log(arr2);
