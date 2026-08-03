class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);
        }

        const sortedByFreq = Array.from(seen.entries())
            .sort((a, b) => b[1] - a[1]);

        return sortedByFreq.slice(0, k).map(entry => entry[0]);
    }
}
