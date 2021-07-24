/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    let dp = [[]];
    dp[0][0] = 0;
    for (let i = 0; i < m; ++i) dp[0][i+1] = i + 1;
    for (let i = 0; i < n; ++i) {
        dp[i + 1] = [];
        dp[i + 1][0] = i + 1;
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) { 
            if(i != 0 && j != 0) {
                dp[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (word1[i] == word2[j]) {
                dp[i + 1][j + 1] = dp[i][j];
                continue;
            }
            // insert
            dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i + 1][j]+ 1);
            // delete
            dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j + 1] + 1);
            // replace
            dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j] + 1);
        }
    }
    return dp[n][m];
};
console.log(minDistance("horse", "ros"));