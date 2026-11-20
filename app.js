import { Node } from "./node.js";

class Tree {
  // constructor
  constructor(arr) {
    this.arr = arr;
    this.root = (0 + [arr.length - 1]) / 2;
  }
}

const data = new Node([5, 4, 10, 22, 1, 7, 3, 4, 1]);
const bst = new Tree(data);

console.log(bst.root);
