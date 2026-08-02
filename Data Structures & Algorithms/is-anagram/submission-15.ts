class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const smap = new Map();
        const tmap = new Map();
        for (let i = 0; i < s.length; i++) {
            smap.set(s[i], (smap.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
        }

        for (const [char, count] of smap) {
            if (tmap.get(char) !== count) return false;
        }
        return true;
    }
}
