function alternatePositiveNegative(ele) {
  ele = ele.sort((a, b) => a - b);
  let positiveIndex = findStartPositionOfPositiveNo(ele);
  let negativeEleLength = positiveIndex;
  let positiveEleLength = ele.length - positiveIndex;
  if (negativeEleLength > positiveEleLength) {
    ele = ele.sort((a, b) => b - a);
    sortArray(ele, positiveEleLength);
  } else {
    console.log(ele, negativeEleLength);
    sortArray(ele, negativeEleLength);
  }
  return ele;
}

function sortArray(ele, count) {
  if (count % 2 == 1) {
    for (let i = 1; i < count; i += 2) {
      [ele[i], ele[i + count]] = [ele[i + count], ele[i]];
    }
  } else {
    for (let i = 1; i <= count; i += 2) {
      [ele[i], ele[i + count - 1]] = [ele[i + count - 1], ele[i]];
    }
  }
}

function findStartPositionOfPositiveNo(ele) {
  let index = 0;
  while (ele[index] < 0 && ele.length > index) {
    index++;
  }
  return index;
}
let ele = [1, 2, 3, -4, -1, 4];
console.log(alternatePositiveNegative(ele));
