// https://www.codingninjas.com/studio/problems/-intersection-of-two-linked-lists_630457?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf/**
 * Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/**
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode}
*/

const compareLL =  (head1, head2) => {
    let temp1 = head1;
    let temp2 = head2;

    while(temp1 && temp2){
        if(temp1.value !== temp2.value){
            return false
        }
       temp1 = temp1.next;
       temp2 = temp2.next
    }

    if(temp1 !==null || temp2 !== null){
        return false
    }
    return true
}


var getIntersectionNode = function(headA, headB) {
   let temp1 = headA;
   let temp2 = headB;
   let obj = {}
   for(let i = 0 ; temp1 ; i++){
       obj[temp1] = temp1;
       temp1 = temp1.next;
   }

   console.log("obj",obj)

   for(let i = 0 ; temp2 ; i++){
       const isNodeExist = obj[temp2]
       console.log("isNodeExist", isNodeExist)
       if(isNodeExist){
           return temp2
       }
       temp2 = temp2.next
   }
   return null


   // const map = new WeakMap();

   // while (headA || headB) {
      
       
   //     if (headA) {
   //         console.log("head1", headA)
   //         if (map.has(headA)) {
               
              
   //             return headA;
   //         }

   //         map.set(headA, true);
   //         // console.log("headA", map.get(headA))
   //         headA = headA.next;
   //     }
       
   //     if (headB) {
   //         console.log("headB", headB)
   //         console.log(map.has(headB))
   //         if (map.has(headB)) {


   //             return headB;
   //         }

   //         map.set(headB, true);
   //         // console.log("headB", map.get(headB))
   //         headB = headB.next;
   //     }
   // }

   // return null;


   // let l1 = headA
   // let l2 = headB

   // while(l1 != l2){  
   //     if(l1) l1 = l1.next 
   //     else l1 = headA // if null we reached the end of l1, start again from head
   //     if(l2) l2 = l2.next 
   //     else l2 = headB
   // }   

   // return l1

   //  let a = headA, b = headB
   // while (a !== b) {
   //     a = !a ? headB : a.next
   //     b = !b ? headA : b.next
   // }
   // return a
};
