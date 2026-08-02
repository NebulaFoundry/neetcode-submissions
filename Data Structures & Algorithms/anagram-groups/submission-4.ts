class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const chars = new Map<string, string[]>
        for(let i = 0; i < strs.length; i++) {
            console.log(i + strs[i])
            const signature = strs[i].split('').sort().join('');

            if (!chars.has(signature)) {
                chars.set(signature, []);
            }
            chars.get(signature)!.push(strs[i]);
        }
        
        return Array.from(chars.values());
    }
}
