import { prettyPrint } from "./prettyPrint.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }        
}

class Tree {
    constructor() {
        this.root = null;
    }

    // build tree method
    buildTree(arr, start = 0, end = arr.length - 1) {
        // edge case
        if (start > end) return null;

        let mid = Math.floor(start + (end - start) / 2);
        this.root = new Node(arr[mid]);

        this.root.left = this.buildTree(arr, start, mid - 1);
        this.root.right = this.buildTree(arr, mid + 1, end);

        return this.root;
    }   

    // helper function

    // logs
    logs(){
        console.log(this.root.data);
        console.log(this.root.left);
        console.log(this.root.right);
    }

    // sorted array and remove duplicates
    sorting(data) {
        data.sort((a,b) => a - b);

        let removeDuplicate = [];
        for (let i = 0; i < data.length; i++){
            if (data[i] !== data[i + 1]) {
                removeDuplicate.push(data[i]);
            }
        }
    }        
}

const bst = new Tree();
bst.buildTree([2, 2, 1, 3, 4, 7, 8]);
bst.logs();