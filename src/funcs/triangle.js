/**
 * 判断三角形类型
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @return {string}
 */
function triangle(a, b, c) {
    for (let i = 0; i < 3; i++) {
        if (typeof arguments[i] !== 'number') {
            return "参数非法"
        }
    }
    for (let i = 0; i < 3; i++) {
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;
        if (arguments[i] + arguments[j] <= arguments[k]) {
            return "非三角形"
        }
    }
    if (a === b && b === c) {
        return "等边三角形"
    }
    if (a === b || b === c || c === a) {
        return "等腰三角形"
    }
    return "一般三角形"
}
export default triangle