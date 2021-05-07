function jugglingAlgoRotate(arr, n) {
  let sets = gcd(arr.length, n);
  for (let i = 0; i < sets; i++) {
    let temp = arr[i];
    let j = i;
    while (j < arr.length) {
      let d = (j + n) % arr.length;
      if (d === i) {
        arr[j] = temp;
        break;
      }
      arr[j] = arr[d];
      j = d;
    }
  }
  return input;
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(jugglingAlgoRotate(input, 4));
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
