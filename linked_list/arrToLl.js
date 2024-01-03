const arr = [1,2,3,4]

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

const arrToLL = (arr) => {
    const head = new Node(arr[0]);
    const tail = new Node(arr[arr.length -1])
    let temp = head;
    for(let i =0 ; i < arr.length - 1; i++){
        const node = new Node(arr[i+1]);
        temp.next = node;
        temp = temp.next
    }
    return {
        head,
        tail
    };
    
}

console.log(arrToLL([1,2,3,4]))


