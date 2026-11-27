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
    buildTreeRecursive(arr, start = 0, end = arr.length - 1) {         
      // base case
      if (start > end) return null;

      let mid = Math.floor((start + end) / 2);
      let root = new Node(arr[mid]);

      root.left = this.buildTreeRecursive(arr, start, mid - 1);
      root.right = this.buildTreeRecursive(arr, mid + 1, end);

      return root;
    }
    
    // return the recursive bst
    buildTree(arr){
      let newArr = this.sortedArray(arr);
      this.root = this.buildTreeRecursive(newArr, 0, newArr.length -1);

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

    // inserting a new val
    insert(val) {
      let currentRoot = this.root;

      // if it's empty bst
      if(!currentRoot) {
        return this.root = new Node(val);        
      }

      // looping through bst
      while (true) {
        // base case if it same value
        if (currentRoot.data === val) return;

        // check left & right
        if (currentRoot.data > val) {
          if (currentRoot.left) {
           currentRoot = currentRoot.left;
          } else {
            return currentRoot.left = new Node (val);
          }
        } else if (currentRoot.data < val) {
            if (currentRoot.right) {
              currentRoot = currentRoot.right;
            } else {
              return currentRoot.right = new Node (val);
            }           
        }
      } 
    }
}

const bst = new Tree();

// build
bst.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// prettyPrint(bst.root);
bst.insert(2);
bst.insert(2);
bst.insert(11);

// logs
prettyPrint(bst.root);
console.log(bst.includes(2));
console.log(bst.includes(1));