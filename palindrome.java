// https://leetcode.com/problems/palindrome-number/submissions/

/*
 Given an integer x, return true if x is palindrome integer.
 An integer is a palindrome when it reads the same backward as forward.
 - For example, 121 is a palindrome while 123 is not.
*/

// O(n)
class Solution {
    public static boolean isPalindrome(int num) {
      if (num < 0) return false;

      int numCopy = num;
      int rev = 0;

      while (numCopy != 0) {
        int buffer = numCopy % 10;
        rev = rev * 10 + buffer;
        numCopy /= 10;
      }

      return rev == num ? true : false;
    }

    public static void main(String[] args) {
      System.out.println(isPalindrome(121));
      System.out.println(isPalindrome(123));
    }
}
