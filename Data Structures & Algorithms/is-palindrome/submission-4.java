public class Solution {
    public boolean isPalindrome(String s) {
        int i = 0, right = s.length() - 1;
        while (i < right) {
            while (i < right && !Character.isLetterOrDigit(s.charAt(i))) i++;
            while (i < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(right)))
                return false;
            i++;
            right--;
        }
        return true;
    }
}