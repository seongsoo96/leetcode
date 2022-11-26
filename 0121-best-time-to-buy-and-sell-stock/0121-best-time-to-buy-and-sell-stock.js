/**
 * @param {number[]} prices
 * @return {number}
 */
//첫번째 풀이
var maxProfit = function(prices) {
  let left = 0;
  let right = 0;
  let max_profit = 0;
  while(right < prices.length) {
    if(prices[left] < prices[right]) {
      let current_profit = prices[right] - prices[left];
      max_profit = max_profit > current_profit ? max_profit : current_profit;
    } else {
      left = right;
    }
    right++;
  }
  return max_profit; 
};

//두번째 풀이
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for(const price of prices){
        min = Math.min(min, price)
        maxProfit = Math.max(maxProfit, price - min)
    }
    return maxProfit
};