/**
 * 电信收费系统总费用计算接口, 根据输入的通话时长, 年度不按时缴费次数, 
 * 返回月度应缴电话费和运行信息
 * 
 * @param {number} minute 通话时长(分钟) [0, 44640]
 * @param {number} count 年度不按时缴费次数 [0, 11], 显然次数需要为整数
 * @return {Array}
 */
const bound = [[0, 44640], [0, 11]]
const mp = [[60, 1, 1], [120, 2, 1.5], [180, 3, 2], [300, 3, 2.5], [44640, 6, 3]]
function fee(minute, count) {
    const args = arguments
    let ex = 0
    // count需要为整数
    if (count % 1 !== 0) {
        return [0, "参数非法"]
    }
    for (let i in args) {
        if (typeof args[i] !== "number") {
            return [0, "参数非法"]
        }
        // 31 * 24 * 60 = 44640
        if (args[i] < bound[i][0] || args[i] > bound[i][1]) {
            return [0, "参数非法"]
        }
        if (args[i] == NaN || args[i] == Infinity) {
            return [0, "参数非法"]
        }
    }
    ex = minute * 0.15
    for (let lvl in mp) {
        if (minute <= mp[lvl][0]) {
            if (count <= mp[lvl][1]) {
                return [(25 + ex * (100 - mp[lvl][2]) / 100).toFixed(2), "正确"]
            }
            else {
                return [(25 + ex).toFixed(2), "正确"]
            }
        }
    }
    // 实际上是死代码
    return [0, "未知错误"]
}
console.log(fee(90, 1))
export default fee