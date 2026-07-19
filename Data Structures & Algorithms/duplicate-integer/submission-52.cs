public class Solution {
    public bool hasDuplicate(int[] nums) {
            var duplicates = nums.GroupBy(x => x)
                     .Where(g => g.Count() > 1)
                     .Select(g => g.Key)
                     .ToList();
            return duplicates.Count > 0;
    }
}