/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let n = s.length, m = t.length;
    if (n < m) return 0;
    let dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < m; j++) { 
            dp[i][j] = 0;
        }
    }

    if(s[0] == t[0]) {
        dp[0][0] = 1;
    } else {
        dp[0][0] = 0;
    }

    for (let i = 1; i < n; ++i) {
        if(s[i] == t[0]) {
             dp[i][0] = dp[i-1][0] + 1;
        } else {
             dp[i][0] = dp[i-1][0];
        }
           
    }

    for (let i = 1; i < n; ++i) {
        for (let j = 1; j < m; ++j) {
            //s[i] != t[j] or not use s[i];
            dp[i][j] = dp[i-1][j];
            if (s[i] == t[j]) {
                dp[i][j] += dp[i-1][j-1];
            }
        }
    }
    console.log(dp);
    return dp[n-1][m-1];
};
numDistinct("rabbbit", "rabbit");
