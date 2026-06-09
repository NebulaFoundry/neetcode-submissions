class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        console.log(n);
        const res = new Array(n).fill(1);
        console.log(res)

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
            console.log(res[i])
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
            console.log(res[i])
            console.log(postfix)
        }
        console.log(res)
        return res;
    }
}