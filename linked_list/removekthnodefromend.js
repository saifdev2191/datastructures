
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

var removeNthFromEnd = function(head, n) {
    let temp = head;
    let slowTemp = head;
    // edge case: length of ll is 1
    if(!head.next){
        return null
    }
    // move fast pointer k step ahead
    while(n){
        temp = temp.next;
        n--
    }
    let fastTemp = temp;
    // edge case
    if(!fastTemp){
        // remove the first element
        let firstNode = head;
        head = head.next;
        firstNode.next = null;
        return head
    }
    
    while(fastTemp && fastTemp.next){
        slowTemp = slowTemp.next;
        fastTemp = fastTemp.next;
    }
    
    let nodetoBeRemoved = slowTemp.next;
    slowTemp.next = nodetoBeRemoved.next;
    return head
};

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)

console.log(removeNthFromEnd(head, 3))


