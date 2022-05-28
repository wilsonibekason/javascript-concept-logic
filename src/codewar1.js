function getCount(str) {
  let vowelsCount = 0;
  let vowels = "a" || "e" || "i" || "o" || "u";
  let vowelse = "a" && "e";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(vowels)) {
      console.log(vowels.length);
      console.log(str);
      console.log("eooo");
    }
  }
  return vowelsCount;
}
getCount("ae");

// second method
function getCounted(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

var str = "Some very long string";
if (str.length > 10) str = str.substring(0, 10);
console.log(str);
console.log("djefheiheihiefieef");
function getCounts(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(getCounts("adbhwaji3joie4odfe"));
