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
var rightSideView = function(root) {
    if(!root) return []
    
    let queue = [root];
    let answer = []
    
    while(queue.length) {
        let level = queue.length;
        let nextQueue = [];
        
        for(let i=0; i<level; i++) {
            let node = queue[i];
            if(i === level-1) {
                answer.push(node.val);
            }
            
            if (node.left) {
                nextQueue.push(node.left);
            }

            if (node.right) {
                nextQueue.push(node.right);
            }
        }
        
        queue = nextQueue;
    }
    
    return answer;
};