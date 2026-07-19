public class Solution {
    public bool hasDuplicate(int[] nums) {
        List<int> seen = new List<int>();
        // HashSet<int> seen = new HashSet<int>();

        for (int i = 0; i < nums.Count(); i++) {
            
            if (seen.Contains(nums[i])){
                return true;
            }
            
            seen.Add(nums[i]);
        }

        return false;
    }
}