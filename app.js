import { Node } from "./node.js";
import { Tree } from "./tree.js";
import { prettyPrint } from "./prettyPrint.js";

// create node var
const node = new Node([3, 4, 4, 3, 9, 1, 1, 9, 5, 5, 2, 2, 8, 6, 8, 6, 7, 7,]);
// create tree var
const tree = new Tree();
console.log(tree.removeDuplicate(node.data));