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

            console.log(`index: ${i} number to find: ${numberToFind} number to find Index: ${index}`)

            if (index !== -1 && index !== i) {
                return [i, index];
            }
        }

        return response;
    }
}
