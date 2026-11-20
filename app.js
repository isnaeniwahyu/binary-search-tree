import { Node } from "./node.js";
import { Tree } from "./tree.js";

 function buildTree(arr) {
    return arr.sort((a, b) => a - b);
 }

 console.log(buildTree([5, 2, 3, 5, 1, 7, 9]));