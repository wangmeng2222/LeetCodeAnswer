/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let n = nums.length;
    let minn = n - 1; //最後まで行ける最小のindex

    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= minn) {
            minn = i;
        }
    }
    
    if(!minn) {
        return true;
    } else {
        return false;
    }
};