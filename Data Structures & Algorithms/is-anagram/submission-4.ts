class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const checked = new Set<string>();
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (checked.has(char)) continue;
            if (s.split(char).length - 1 !== t.split(char).length - 1) {
                return false;
            }
            checked.add(char);
        }
        return true;
    }
}
