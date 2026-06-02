class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let r = 0; r < matrix.length; r++){
            for (let c = 0; c < matrix[r].length; c++){
                if (target === matrix[r][c]) return true;
            }
        }

        return false;
    }
}
