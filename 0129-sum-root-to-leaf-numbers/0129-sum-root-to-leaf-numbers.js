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
var sumNumbers = function(root) {
    if(!root) return 0;
    let paths = [];
    let total = 0;
    
    const dfs = (node, path) => {
        if(!node) return 0;
        path += node.val;
        
        if(!node.left && !node.right){
            paths.push(path);
        }
        
        return dfs(node.left, path) || dfs(node.right, path)
    }
    
    dfs(root, "")
    
    for(let num of paths){
        total += parseInt(num);
    }
    
    return total;
};