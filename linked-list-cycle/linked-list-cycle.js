/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Approach 1: Hash Table
var hasCycle = function(head) {
    const set = new Set();
    while(head != null) {
        if(set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

//Approach 2: Floyd's Cycle Finding Algorithm
var hasCycle = function(head) {
    if (head == null) {
        return false;
    }

    let slow = head;
    let fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}