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
    
    const checkMaxMin = (node, cur_max, cur_min) => {
        max = node.val > cur_max ? node.val : cur_max
        min = node.val < cur_min ? node.val : cur_min
    }
    
    const dfs = (node, cur_max, cur_min) => {
        if(!node.left && !node.right) {
            result = Math.max(result, max-min);
        }
        
        if(node.left) {
            checkMaxMin(node.left, cur_max, cur_min)
            dfs(node.left, max, min)
        }
        
        if(node.right) {
            checkMaxMin(node.right, cur_max, cur_min)
            dfs(node.right, max, min)
        }
        
    }
    
    dfs(root, max, min)
    
    return result;
};