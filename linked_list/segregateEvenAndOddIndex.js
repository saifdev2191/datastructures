// https://leetcode.com/problems/odd-even-linked-list/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const segregateEvenAndOddIndexes = head => {
    if(!head || !head.next){
        return head
    }
    let oddPointer = head;
    let evenPointer = head.next;
    let connectingPointer = head.next;
    while (evenPointer && evenPointer.next) {
      oddPointer.next = oddPointer.next.next;
      evenPointer.next = evenPointer.next.next;
      oddPointer = oddPointer.next;
      evenPointer = evenPointer.next;
    }
    oddPointer.next = connectingPointer;
    return head;
  };
  
  const ll = new Node(1);
  ll.next = new Node(2);
  ll.next.next = new Node(3);
  ll.next.next.next = new Node(4);
  ll.next.next.next.next = new Node(5);
  
  console.log(segregateEvenAndOddIndexes(ll));
  