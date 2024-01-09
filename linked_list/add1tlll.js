// https://www.codingninjas.com/studio/problems/add-one-to-a-number-represented-as-linked-list_920557?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// const reverseLinkedList = (head) => {
//     let prev = null;
//     let temp = head;
//     let fast = null;
//     while(temp){
//         fast = temp.next;
//         temp.next =prev;
//         prev = temp;
//         temp = fast;
//     }
//     return prev
// }


// const addOneToANumber = (head) => {
//     console.log("head", head)
//     const reversedLl = reverseLinkedList(head)
//     let carry = 1
//     let temp = reversedLl
//     while(temp){
//         let tempSum = temp.value + carry;
//         let base = tempSum % 10;
//         carry = Math.floor(tempSum/10);
//         temp.value = base;
//         if(temp.next === null && carry){
//             // create a new Node
//             const tempNode = new Node(1)
//             temp.next = tempNode;
//             break
//         }
//         temp = temp.next
//     }
//     const reverseSecond = reverseLinkedList(reversedLl)
//     return reverseSecond
    
// }

// const head = new Node(9)
// // head.next = new Node(2)
// // head.next.next = new Node(9)
// console.log(addOneToANumber(head))


// using recursion

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const baseFn = (head) => {
    if(head === null){
        return 1;
    }
    let carry = baseFn(head.next);
    let tempSum = carry + head.value;
    head.value = tempSum%10
    if(tempSum < 10){
        return 0;
    }
    else{
        return 1;
    }
}


const addOneToANumber = (head) => {
   const carry = baseFn(head)
   if(carry ===1){
       const tempNode = new Node(1)
       tempNode.next = head;
       return tempNode
   }
   return head
    
}

const head = new Node(9)
head.next = new Node(2)
head.next.next = new Node(9)
console.log(addOneToANumber(head))