/**
 * 
 * @param {number} n 
 * @returns {number}
 */
var climbFloors = function (n) {
    const dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}