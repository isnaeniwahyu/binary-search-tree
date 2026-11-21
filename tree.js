class Tree {
    // constructor
    constructor() {
        this.root = [];        
    }
    
    sorted(array) {
        return array.sort((a, b) => a - b);
    }

    removeDuplicate(array){
        let sortedArr = this.sorted(array);
        let removeDuplicate = [];
        for (let i = 0; i < sortedArr.length; i++) {
            if (sortedArr[i] !== sortedArr[i+1]){
                removeDuplicate.push(sortedArr[i]);
            }
        }
        return removeDuplicate;
    }    
}

export {Tree};