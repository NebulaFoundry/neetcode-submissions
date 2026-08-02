class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const counts = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            counts.set(s[i], (counts.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            counts.set(t[i], (counts.get(t[i]) || 0) - 1);
        }

        for (const count of counts.values()) {
            if (count !== 0) return false;
        }
        return true;
    }
}