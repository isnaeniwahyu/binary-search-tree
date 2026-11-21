import { Node } from "./node.js";
import { Tree } from "./tree.js";

// create node var
const node = new Node([3, 3, 4, 4, 9, 9, 1, 1, 5, 5, 2, 2, 6, 6, 8, 8, 7, 7,]);
// create tree var
const tree = new Tree();
tree.buildTree(node.data);