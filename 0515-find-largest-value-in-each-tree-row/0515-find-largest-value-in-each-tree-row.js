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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return []
    
    let queue = [root]
    let answer = []
    while(queue.length) {
        let currentLevel = queue.length
        let nextQueue = []
        let max = -Infinity;
        
        for(let i=0; i<currentLevel; i++) {
            let node = queue[i]
            max = Math.max(max, node.val)
            
            if(node.left) {
                nextQueue.push(node.left)
            }
            
            if(node.right) {
                nextQueue.push(node.right)
            }
        }
        
        answer.push(max)
        queue = nextQueue
    }
    
    return answer
};