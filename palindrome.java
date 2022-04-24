// https://leetcode.com/problems/palindrome-number/submissions/

/*
 Given an integer x, return true if x is palindrome integer.
 An integer is a palindrome when it reads the same backward as forward.
 - For example, 121 is a palindrome while 123 is not.
*/

class Solution {
    public boolean isPalindrome(int num) {
      if (num < 0) return false;

      int numCopy = num;
      int rev = 0;

      while (numCopy != 0) {
        int buffer = numCopy % 10;
        rev = rev * 10 + buffer;
        numCopy /= 10;
      }

      if (rev == num) {
        return true;
      }

      return false;
    }

    public void main(String[] args) {
      isPalindrome(121);
    }
}
