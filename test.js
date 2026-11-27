import Tree from "./app.js";
import {prettyPrint}  from "./prettyPrint.js";

const tree = new Tree();

tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

prettyPrint(tree.root);
tree.insert(2);
prettyPrint(tree.root);
tree.insert(24);
prettyPrint(tree.root);

tree.deleteItem(4);
prettyPrint(tree.root);