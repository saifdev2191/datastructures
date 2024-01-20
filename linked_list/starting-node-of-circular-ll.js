// https://takeuforward.org/data-structure/starting-point-of-loop-in-a-linked-list/
// https://leetcode.com/problems/linked-list-cycle-ii/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = head;
    let fast = head ? head.next: null;
    let isLoop = false
    while(fast && fast.next){
        if(fast === slow){
            isLoop = true
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    if(!isLoop) return null
    slow = head;
    fast = fast.next
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next
    }
    return slow
};