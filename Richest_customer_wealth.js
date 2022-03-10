//  https://leetcode.com/problems/richest-customer-wealth/
 
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money 
// the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
//  Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.

// O(n²)
 const maximumWealth = (accounts) => {
  let maxWealthSoFar = 0

  for (let i = 0; i < accounts.length; i++) {
      let currCustomerWealth = 0;
      
      for (let j = 0; j < accounts[i].length; j++) {
          currCustomerWealth += accounts[i][j];
          if (currCustomerWealth > maxWealthSoFar) {
              maxWealthSoFar = currCustomerWealth;
          }
      }
  }
  
  return maxWealthSoFar
}

// O(n²) One-liner
const maximumWealth2 = (accounts) => {
    return Math.max(...accounts.map(account=> account.reduce((a,b)=>a+b)))
  };

let accounts = [[1,2,3],[3,2,1]]
console.log(maximumWealth(accounts));
console.log(maximumWealth2(accounts));