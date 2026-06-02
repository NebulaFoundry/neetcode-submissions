class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        var cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        var end = cleaned.length - 1;
        for( var i = 0; i <= end; i++){
            if(cleaned[i] != cleaned[end]) return false
            end--;
        }
        return true
    }
}
