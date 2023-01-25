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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let small = -Infinity, big = Infinity
    const dfs = (node) => {
        if(!node) return 0
        if(node.val > target) {
            big = node.val
            dfs(node.left)
        } else {
            small = node.val
            dfs(node.right)
        }
    }
    dfs(root)
    return target-small < big-target ? small : big
};