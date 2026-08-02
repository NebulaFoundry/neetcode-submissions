class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (seen.get(nums[i])) return true;
            seen.set(nums[i], 1);
        }
        return false;
    }
}
