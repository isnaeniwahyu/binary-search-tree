import { prettyPrint } from "./prettyPrint.js";

class Node {
  constructor(data) {
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

    sortedArray(arr) {      
      let newArr = [...new Set(arr)].sort((a,b) => a - b);
      return newArr;      
    }
    
    // method build tree recursively
    buidTreeRecursive(arr, start = 0, end = arr.length - 1) {         
      // base case
      if (start > end) return null;

      let mid = Math.floor((start + end) / 2);
      let root = new Node(arr[mid]);

      root.left = this.buidTreeRecursive(arr, start, mid - 1);
      root.right = this.buidTreeRecursive(arr, mid + 1, end);

      return root;
    }
    
    // return the recursive bst
    buildTree(arr){
      let newArr = this.sortedArray(arr);
      this.root = this.buidTreeRecursive(newArr, 0, newArr.length -1);

      return this.root;
    }

    // helper function    
    // includes method
    includes(value) {
      // looping through array and checks the value
      // base case 
      let node = this.root
      if (node === null) return false;
      
      while(node) {
        // base case
        if(node.data === value) return true;
        
        // check if value bigger than the current node
        if(node.data > value) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      // if none match
      return false;
    }  

    // insert
    insert(value) {
      let newRoot = this.root;

      while(newRoot) {
        // return if it's same
        if (newRoot.data === null) {
          newRoot.data = new Node(value);
        };

        if(newRoot.data > value) {
          newRoot = newRoot.left;
        } else {
          newRoot = newRoot.right;
        }
        return;
      }
    }
}

const bst = new Tree();

// build
bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
bst.insert(2);

// logs
prettyPrint(bst.root);
console.log(bst.includes(2));