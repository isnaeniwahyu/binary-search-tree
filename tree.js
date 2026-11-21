class Tree {
    // constructor
    constructor() {
        this.root = [];        
    }
    
    // build a tree
    buildTree(array) {
        let sortedArray = array.sort((a, b) => a - b);
        let removeDuplicate = [];
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] !== sortedArray[i + 1]){
                removeDuplicate.push(sortedArray[i]);
            }
        }
        return this.root = removeDuplicate;
    }
}

export {Tree};