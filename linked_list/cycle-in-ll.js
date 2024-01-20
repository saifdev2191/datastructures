// Brute force approch: Create a new datatype to store the node as keys. If that node value is enounetred again, this means that loop is present


// var hasCycle = function(head) {
//     let temp = head
//     const keyRef = new WeakMap()
//     while(temp){
//         if(keyRef.has(temp)){
//             return true
//         }
//         keyRef.set(temp, temp.value)
//         temp = temp.next 
//     }
//     return false  
// };


// slow an fast pointer approach
// var hasCycle = function(head) {
//     let slow = head;
//     let fast = head?.next;
//     while(fast && fast.next){
//         if(fast === slow) {
//             console.log(fast)
//             return true
//         }
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return false
// };




