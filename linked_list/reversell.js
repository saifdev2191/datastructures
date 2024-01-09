// https://leetcode.com/problems/reverse-linked-list/
 class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
var reverseList = function(head) {
     let prev = null;
    let after = null
    
    if(!head ){
        return null
    }
    if(!head.next ){
        console.log("Hi")
        console.log("Head", head)
        return head
    }

    while(head){
        after = head.next
        head.next = prev;
        prev = head;
        head = after;
    }
    return prev
};

const head = new Node(1)
head.next  = new Node(2)
head.next.next  = new Node(3)
head.next.next.next  = new Node(4)
head.next.next.next.next  = new Node(5)

console.log(reverseList(head))