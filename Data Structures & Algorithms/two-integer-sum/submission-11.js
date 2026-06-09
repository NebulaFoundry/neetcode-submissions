class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let index = 0; index < nums.length; index++) {
            const number = nums[index];
            const findingNumber = target - number;

            if (hashMap.get(findingNumber) !== undefined) {
                return [hashMap.get(findingNumber), index]
            }

            hashMap.set(number, index);
        }

        return [];
    }
}
