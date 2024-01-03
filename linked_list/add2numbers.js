// https://leetcode.com/problems/add-two-numbers/

const arr = [1, 2, 3, 4];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const test = (ll1, ll2) => {
  let head = {
    value: 0,
    next: null,
  };
  let temp;

  const len = ll1.length > ll2.length ? ll1.length : ll2.length;
  let carry = 0;
  let temp1 = ll1.head;
  let temp2 = ll2.head;
  for (let i = 0; i < len; i++) {
    const tempSum =
      carry + (temp1 ? temp1.value : 0) + (temp2 ? temp2.value : 0);
    temp1 = temp1 ? temp1.next : null;
    temp2 = temp2 ? temp2.next : null;
    carry = Math.floor(tempSum / 10);
    const nodeVal = tempSum % 10;
    const newNode = new Node(nodeVal);
    if (i === 0) {
      head = newNode;
      temp = newNode;
    } else {
      temp.next = newNode;
      temp = temp.next;
    }
    if (i === len - 1 && carry) {
      const newNode = new Node(carry);
      temp.next = newNode;
      temp = temp.next;
    }
  }
  return head;
};

const ll1 = new LinkedList();
const ll2 = new LinkedList();
ll1.push(9);
ll1.push(9);
ll1.push(9);
ll1.push(9);
ll1.push(9);
ll1.push(9);
ll1.push(9);

ll2.push(9);
ll2.push(9);
ll2.push(9);
ll2.push(9);

console.log(test(ll1, ll2));
