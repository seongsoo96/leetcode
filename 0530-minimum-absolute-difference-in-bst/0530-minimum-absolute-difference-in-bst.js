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
var getMinimumDifference = function(root) {
    let dfs = node => {
        if (!node) {
            return [];
        }
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        left.push(node.val);
        left.push(...right);
        return left
    }
    
    let values = dfs(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }
    
    return ans;
};