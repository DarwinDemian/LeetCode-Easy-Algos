// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// O(n²) but still too slow
const maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  
  let pricesCopy = [...prices];
  let maxSum = 0;
  let x = 0;

  for (x; x < prices.length - 1; x++) {
      let sum = Math.max(...pricesCopy) - prices[x];
      if (sum > maxSum) maxSum = sum;
      
      pricesCopy.shift();
  }

  return maxSum;
}


// O(n) Kadane's algorithm
const maxProfit2 = function(prices) {
  const n = prices.length;
  if (n < 2) return 0

  let maxSum = 0;
  let maxVal = Math.max(prices[n - 1], prices[n - 2]);

  for (let i = n - 2; i > -1; i--) {
      let sum = maxVal - prices[i];
      
      if (prices[i] > maxVal) maxVal = prices[i]

      if (sum > maxSum) maxSum = sum
  }

  return maxSum;
}

let profit = 
    [55, 31, 63, 18, 29, 18, 71, 18, 39, 40, 
    62, 91, 43, 28, 79, 1, 27, 37, 12, 49, 18, 
    37, 100];

console.log(maxProfit(profit));
console.log(maxProfit2(profit));