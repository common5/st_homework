const bound = [[0, Number.MAX_VALUE], [0, 366], [0, 100]]
/**
 * 销售系统计算
 * 
 * @param {number} sale 销售额 [0, Number.MAX_VALUE]
 * @param {number} day 请假天数 [0, 366], Integer
 * @param {number} rate 到账率 [0, 100]
 * @return {Array} [number, string] 返回佣金与信息
 */
function saleSys(sale, day, rate) {
    if (sale < 0 || sale > Number.MAX_VALUE || day < 0 || day > 366 || day % 1 != 0 || rate < 0 || rate > 100) {
        return [0, "参数非法"]
    }
    // const args = arguments
    // for (let i in args) {
    //     if (typeof args[i] !== 'number') {
    //         return [0, "参数非法"]
    //     }
    //     if (args[i] < bound[i][0] || args[i] > bound[i][1]) {
    //         return [0, "参数非法"]
    //     }
    //     if (args[i] == NaN || args[i] == Infinity) {
    //         return [0, "参数非法"]
    //     }
    // }
    sale.toFixed(2)
    if (sale > 2e6 && day <= 10) {
        if (rate < 60) {
            return [0, "正确"]
        }
        else {
            return [(sale / 7).toFixed(2), "正确"]
        }
    }
    else {
        if (rate <= 85) {
            return [(sale / 6).toFixed(2), "正确"]
        }
        else {
            return [(sale / 5).toFixed(2), "正确"]
        }
    }
    // 不会执行到这里
}
export default saleSys