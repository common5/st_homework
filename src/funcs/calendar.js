/**
 * 万年历，输入年(1900-2200)月日，以'yyyy-mm-dd'的形式返回下一天日期
 * @param {number} y
 * @param {number} m
 * @param {number} d
 * @return {string}
 */
const max_day = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function calendar(y, m, d) {
    for (let i = 0; i < 3; i++) {
        if (typeof arguments[i] !== 'number') {
            return "参数非法"
        }
    }
    let func = (y) => {
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)
    }
    if (y < 1800 || y > 2200 || m < 1 || m > 12 || d < 1 || d > max_day[m] + func(y)) {
        return "参数超出范围"
    }
    d++
    if (d > max_day[m] + func(y)) {
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