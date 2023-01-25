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
var closestValue = function(root, target, min=null) {
    if (root===null){
        return min;
    }

    if (min === null || Math.abs(target - root.val) < Math.abs(target - min)) {
        min = root.val;
    }

    if (target < root.val){
        return closestValue(root.left, target, min);
    }
    else{
        return closestValue(root.right, target, min);
    }
};