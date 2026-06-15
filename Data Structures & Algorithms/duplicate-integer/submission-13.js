class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var seen = [];
        var response = false;
        for (var i = 0; i < nums.length; i++){
            if (seen.includes(nums[i])) return true;

            seen.push(nums[i]);
        }

        return response;
    }
}
