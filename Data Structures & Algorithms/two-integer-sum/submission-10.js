class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let response = [];
        for (var i = 0; i < nums.length; i++) {
            let numberToFind = target - nums[i];
            let index = nums.indexOf(numberToFind);

            if (index !== -1 && index !== i) {
                return [i, index];
            }
        }

        return response;
    }
}
