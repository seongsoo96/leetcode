/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
//     const answer = [];
//     let i = 0;
//     let j = 0;
//     while(j < temp.length) {
//         j++;
//         let ii = temp[i];
//         let jj = temp[j];
//         if(temp[i] < temp[j]) {
//             answer.push(j-i);
//             i++;
//             j = i;
//         }
//         if(j >= temp.length-1 && i < temp.length) {
//             answer.push(0);
//             i++;
//             j = i;
//         }
//     }

//     return answer;
    
    
   let stack = [];
   let result = new Array(T.length).fill(0);
    for(let i=0; i < T.length; i++){
        while(stack.length && T[i] > T[stack[stack.length-1]]){
            let temp = stack.pop();
            result[temp] = i-temp;
        }
        stack.push(i)
    }
    return result;
    
};