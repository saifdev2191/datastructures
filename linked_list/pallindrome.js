// https://leetcode.com/problems/palindrome-linked-list/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const reverse = head => {
    let temp = head;
    let prev = null;
    let after = null;
    let count = 0;
    while (temp) {
      after = temp.next;
      temp.next = prev;
      prev = temp;
      temp = after;
      count++;
    }
    return prev;
  };
  
  const isPallindrome = head => {
    let slow = head;
    let fast = head;
  
    // find the middle node
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let reversedSecondHalf = null;
    // even length ll
    if (!fast) {
      reversedSecondHalf = reverse(slow);
    } else {
      // odd length ll
      reversedSecondHalf = reverse(slow.next);
    }
  
    let secondHalf = reversedSecondHalf;
    let firstHalf = head;
  
    while (secondHalf) {
      if (firstHalf.value !== secondHalf.value) return false;
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    return true;
  };
  
  const head = new Node(1);
  head.next = new Node(2);
  // head.next.next = new Node(1)
  // head.next.next.next = new Node(3)
  // head.next.next.next.next = new Node(2)
  // head.next.next.next.next.next = new Node(1)
  // head.next.next.next.next.next.next = new Node(1)
  
  console.log(isPallindrome(head));
  