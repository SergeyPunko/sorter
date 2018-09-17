class Sorter {
  constructor(arr) {
    this.arr = [];
    this.compareFunction = (a, b) =>  a - b ;
  }
  add(element) {
    this.arr.push(element);
  }
  at(index) {
    return this.arr[index];
  }
  get length() {
    return this.arr.length;
  }
  toArray() {
    return this.arr;
  }
  sort(indices) {
    let sortedArr = [];
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = 0; j < indices.length - 1 - i; j++) {
        if (indices[j] > indices[j+1]) {
          var perem = indices[j];
          indices[j] = indices[j+1];
          indices[j+1] = perem;
        }
      }
    }
    for (var i = 0; i < indices.length; i++) {
      sortedArr.push(this.arr[indices[i]]);
    }
    sortedArr.sort(this.compareFunction);
    for (var i = 0; i < indices.length; i++) {
      this.arr[indices[i]]=sortedArr[i];
    }
    return this.arr;
  }
  setComparator(compareFunction) {
    return ((compareFunction == undefined) ? null : (this.compareFunction = compareFunction));
  }
}

module.exports = Sorter;