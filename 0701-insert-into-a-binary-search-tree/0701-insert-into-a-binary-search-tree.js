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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    const dfs = (node) => {
        if(!node) return new TreeNode(val)
        
        let hello
        if(node.val > val) {
            hello = dfs(node.left)
            node.left = hello
        } else {
            hello = dfs(node.right)
            node.right = hello
        }
        return node
    }
    dfs(root)
    return root
};