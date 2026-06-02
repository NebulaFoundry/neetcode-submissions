class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let response: string[][] = [];

        for (let i = 0; i < strs.length; i++) {
            let found = false;
            for (let t = 0; t < response.length; t++) {
                if (this.isAnagram(strs[i], response[t][0])) {
                    response[t].push(strs[i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                response.push([strs[i]]);
            }
        }

        return response;
    }

    isAnagram(input: string, output: string): boolean {

        if (input.length !== output.length) return false;

        const checked = new Set<string>();
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (checked.has(char)) continue;
            if (input.split(char).length - 1 !== output.split(char).length - 1) {
                return false;
            }
            checked.add(char);
        }
        return true;
    }
}
