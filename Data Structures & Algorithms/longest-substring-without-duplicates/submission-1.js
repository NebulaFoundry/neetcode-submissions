class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let substring = new Set()
        let maxSize = 0;
        for (let i = 0; i < s.length; i++) {
            while (substring.has(s[i])) {
                const firstElement = substring.values().next().value;
                substring.delete(firstElement);
            }

            console.log(s[i]);
            substring.add(s[i]);

            if (substring.size > maxSize) {
                maxSize = substring.size;
            }
            console.log(substring)
        }
        console.log(substring)
        return maxSize;
    }
}
