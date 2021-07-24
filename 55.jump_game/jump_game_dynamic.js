/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let n = nums.length;
    let dp = [];
    dp[n - 1] = true;
    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= n - 1) {
            dp[i] = true;
            continue;
        }
        for(j = i + 1;j <= nums[i] + i; j++) {
            if(dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    
    if(dp[0]) {
        return true;
    } else {
        return false;
    }
};