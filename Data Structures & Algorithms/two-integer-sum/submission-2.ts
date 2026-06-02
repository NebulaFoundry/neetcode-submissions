class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
             for (let t = i + 1; t < nums.length; t++) {
                if (nums[i] + nums[t] === target){
                    return [i,t];
                }
            } 
        }
        return [];
    }
}
