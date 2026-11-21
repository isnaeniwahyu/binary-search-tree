import { Node } from "./node.js";
import { Tree } from "./tree.js";

 function buildTree(arr) {
   let sorted = arr.sort((a, b) => a - b);
   let removeDuplicate = [];
   for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] !==  sorted[i + 1]) {
         removeDuplicate.push(sorted[i]);
      }
   }
   return removeDuplicate;
 }

 console.log(buildTree([9, 9, 1, 1, 3, 3,5, 5, 3, 3, 6, 6, 7, 7, 8, 8, 2, 2, 4, 4]));