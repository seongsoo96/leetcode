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
var maxAncestorDiff = function(root) {
    if(!root) return 0
    
    let min = root.val
    let max = root.val
    let result = 0
    
    const dfs = (node, cur_max, cur_min) => {
        if(!node.left && !node.right) {
            result = Math.max(result, max-min);
        }
        
        if(node.left) {
            max = node.left.val > cur_max ? node.left.val : cur_max
            min = node.left.val < cur_min ? node.left.val : cur_min
            dfs(node.left, max, min)
        }
        
        if(node.right) {
            max = node.right.val > cur_max ? node.right.val : cur_max
            min = node.right.val < cur_min ? node.right.val : cur_min
            dfs(node.right, max, min)
        }
        
    }
    
    dfs(root, max, min)
    
    return result;
};