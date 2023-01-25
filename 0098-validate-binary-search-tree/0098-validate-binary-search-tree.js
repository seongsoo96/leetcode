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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return []
    let arr = []
    const dfs = (node) => {
        if(!node) return []
        let left = dfs(node.left)
        arr.push(node.val)
        let right = dfs(node.right)
    }
    
    dfs(root)
    console.log(arr)
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] >= arr[i+1]) {
            return false
        }
    }
    return true
};