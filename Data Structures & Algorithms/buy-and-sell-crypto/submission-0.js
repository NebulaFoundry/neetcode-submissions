class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let bestI = 0;
        let bestJ = 0;
        // loop through the list
        for(let i = 0; i < prices.length; i++){
            let j = i + 1;
            //using two pointers we can tell if i pointer is a larger number then the j pointer we should move both forward.
            if (prices[i] > prices[j]){
                continue;
            };

            while (j < prices.length) {
                if ((prices[j] - prices[i]) > maxProfit)
                    {
                        bestI = i;
                        bestJ = j;
                        maxProfit = (prices[j] - prices[i]);
                    };
                    j++;
            }

        }
        console.log(`I: ${bestI}, J; ${bestJ},`)
        return maxProfit;
    }
}
