/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    let n = s.length, m = t.length;
    if (n < m) return 0;
    let dp = [];

    if(s[0] == t[0]) {
        dp[0] = 1;
    } else {
        dp[0] = 0;
    }
    for (let i = 1; i < m; ++i)  dp[i] = 0;
    for (let i = 1; i < n; ++i) {
        for (let j = m-1; j >= 1; --j) {
            if (s[i] == t[j]) {
                dp[j] += dp[j-1];
            }
        }
        if(s[i] == t[0]) {
             dp[0] = dp[0] + 1;
        }
        console.log(dp);
    }
    return dp[m-1];
};

numDistinct("rabbbit", "rabbit");
