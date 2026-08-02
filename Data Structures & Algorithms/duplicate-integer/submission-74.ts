class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const freq = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (freq.get(nums[i])) return true;
            freq.set(nums[i], 1);
        }
        return false;
    }
}
