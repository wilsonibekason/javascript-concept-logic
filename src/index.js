import "./styles.css";
function checkIfArrayIsUnique(arr) {
  var map = {},
    i,
    size;
  for (i = 0, size = arr.length; i < size; i++) {
    if (map[arr[i]]) {
      if (arr[i]) {
        arr.splice(i, 1);
        i--;
        console.log(arr);
      }
    }
    map[arr[i]] = true;
  }
  return true;
}
console.log(checkIfArrayIsUnique([1, 2, 3, 3]));
