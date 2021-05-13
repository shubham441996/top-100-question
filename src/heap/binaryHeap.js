class MaxBinaryHeap {
  // n Will be the index in array
  // Position for left child will be left child=>2n+1
  // Position for right child will be left child=>2n+2
  /**
   * How to fin parent from child
   * parent index => Math.floor((n-1)/2)
   */
  constructor() {
    this.values = [];
  }
  insert(ele) {
    this.values.push(ele);
    let index = this.values.length - 1;
    if (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      while (
        this.values[parentIndex] < this.values[index] &&
        parentIndex >= 0 &&
        index >= 0
      ) {
        let ele = this.values[parentIndex];
        this.values[parentIndex] = this.values[index];
        this.values[index] = ele;
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
    return this.values;
  }
  extractMax() {
    let self = this;
    function swap(leftIndex, rightIndex) {
      let temp = self.values[rightIndex];
      self.values[rightIndex] = self.values[leftIndex];
      self.values[leftIndex] = temp;
    }
    if (this.values.length > 1) {
      let ele = this.values[0];
      let lastIndex = this.values.length - 1;
      this.values[0] = this.values[lastIndex];
      this.values.pop();
      let adjustedEleIndex = 0;
      while (true) {
        let leftIndex = 2 * adjustedEleIndex + 1;
        let rightIndex = leftIndex + 1;
        let leftChild = this.values[leftIndex];
        let rightChild = this.values[rightIndex];
        let adjustedEle = this.values[adjustedEleIndex];
        if (rightChild > leftChild && rightChild > adjustedEle) {
          swap(adjustedEleIndex, rightIndex);
          adjustedEleIndex = rightIndex;
        } else if (leftChild > rightChild && leftChild > adjustedEle) {
          swap(adjustedEleIndex, leftIndex);
          adjustedEleIndex = leftIndex;
        } else {
          return ele;
        }
      }
    } else {
      return this.values[0];
    }
  }
}
let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);
