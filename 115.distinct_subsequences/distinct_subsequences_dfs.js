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
            dp[i][j] = -1;
        }
    }
    return dfs(n-1, m-1, s, t, dp);
};

var dfs = function(i, j, s, t, dp) {
    if (j < 0) return 1;
    if (i < 0) return 0;
    if (dp[i][j] >= 0) return dp[i][j];
    //s[i] != t[j] or s[i] == t[j] but not use s[i];
    let res = dfs(i-1, j, s, t, dp);
    if (s[i] == t[j]) res += dfs(i-1, j-1, s, t, dp);
    return dp[i][j]=res;
}