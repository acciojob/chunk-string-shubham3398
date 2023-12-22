function stringChop(str, size) {
  // your code here
  if (size >= str.length) return [str];

  let i = 0;
  let ans = [];
  while (i < str.length) {
    let lastIndex = Math.min(i + size, str.length); // Use Math.min to avoid going beyond the string length
    ans.push(str.substring(i, lastIndex));
    i += size;
  }
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
