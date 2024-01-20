// https://leetcode.com/problems/merge-two-sorted-lists/description/

// class Node {
//   constructor(value) {
//     this.val = value;
//     this.next = null;
//   }
// }
// var mergeTwoLists = function (list1, list2) {
//   let head = new Node(-1);
//   let temp = head;
//   let temp1 = list1;
//   let temp2 = list2;
//   if (!temp1 && !temp2) return null;
//   while (temp1 || temp2) {
//     if (!temp1) {
//       temp.next = temp2;
//       return head.next;
//     }
//     if (!temp2) {
//       temp.next = temp1;
//       return head.next;
//     } else {
//       if (temp1.val >= temp2.val) {
//         temp.next = new Node(temp2.val);
//         temp2 = temp2.next;
//       } else {
//         temp.next = new Node(temp1.val);
//         temp1 = temp1.next;
//       }
//     }

//     temp = temp.next;
//   }
//   return head.next;
// };
