import { prettyPrint } from "./prettyPrint.js";

class Node {
  constructor(data = []) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {    
    // constructor
    constructor() {
        this.root = null;
    }
    
    // method build tree
    buildTree(arr, start = arr[0], end = arr.length - 1) {
        // edge cases
        if (start > end) return null;

        let mid = Math.floor(start + (end - start) / 2);
        this.root = new Node(arr[mid]);

        this.root.left = this.buildTree(arr, start, mid - 1);
        this.root.right = this.buildTree(arr, mid + 1, end);

        return this.root;   
    }
}

// arr example [1,1,2,3,4,5], [2,1,3,4,1,5]