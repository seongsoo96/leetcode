/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let depth = -1
    let ans = []
    
    while(queue.length) {
        depth++
        let nextQueue = []
        let arr = []
        for(let i=0; i<queue.length; i++) {
            let node = queue[i]
            
            if(depth % 2 === 0) {
                arr.push(node.val)
            } else {
                arr.push(queue[queue.length-1-i].val)
            }
            
            
            if(node.left) {
                nextQueue.push(node.left)
            }

            if(node.right) {
                nextQueue.push(node.right)
            }
        }    
        ans.push(arr)
        queue = nextQueue
    }
    return ans
};