/**
 * 万年历，输入年(1900-2300)月日，以'yyyy-mm-dd'的形式返回下一天日期
 * @param {number} y 年(1900-2300)
 * @param {number} m 月(1-12)
 * @param {number} d 日(1-31)
 * @return {string} 'yyyy-mm-dd'
 */
const max_day = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function calendar(y, m, d) {
    for (let i = 0; i < 3; i++) {
        if (typeof arguments[i] !== 'number') {
            return "参数非法"
        }
        if (arguments[i] % 1 !== 0) {
            return "参数非法"
        }
    }
    let func = (y, m) => {
        return (m === 2) && ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0))
    }
    if (y < 1900 || y > 2300 || m < 1 || m > 12 || d < 1 || d > max_day[m] + func(y, m)) {
        return "参数非法"
    }
    d++
    if (d > max_day[m] + func(y, m)) {
        d = 1
        m++
    }
    if (m > 12) {
        m = 1
        y++
    }
    return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`
}
export default calendar