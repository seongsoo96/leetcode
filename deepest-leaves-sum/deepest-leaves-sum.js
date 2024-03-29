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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root) return 0
    let queue = [root]
    
    let sum
    while(queue.length) {
        sum = 0
        let currentLevel = queue.length
        let nextQueue = []
        
        for(let i=0; i<currentLevel; i++) {
            let node = queue[i]
            sum += node.val
            
            if(node.left) {
                nextQueue.push(node.left)
            }
            
            if(node.right) {
                nextQueue.push(node.right)
            }
        }
        
        queue = nextQueue
    }
    
    return sum   
};