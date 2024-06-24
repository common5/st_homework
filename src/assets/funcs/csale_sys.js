const bound = [[0, 70], [0, 80], [0, 90]]
const value = [25, 30, 45]
/**
 * @class 电脑销售系统
 * @member {number} frame
 * @member {number} screen
 * @member {number} equip
 */
class csale_sys {
    constructor() {
        this.params = [0, 0, 0]
    }
    calc() {

    }
    /**
     * 
     * @param {object} list 是操作序列, 只能是二维数组形式
     * @returns {object} 返回[销售总额, 提成, 信息]
     */
    exec(list) {
        if (typeof list !== 'object' || list === null) {
            return [0, 0, "操作序列非法"]
        }
        for (let op of list) {
            if (typeof op !== 'object' || op === null) {
                return [0, 0, "操作序列非法"]
            }
            if (op.length !== 3) {
                return [0, 0, "操作序列非法"]
            }
            for (let i in op) {
                if (typeof op[i] !== 'number') {
                    return [0, 0, "操作序列非法"]
                }
                if (op[i] == NaN || op[i] == Infinity) {
                    return [0, 0, "操作序列非法"]
                }
                if (op[i] < bound[i][0] || op[i] > bound[i][1]) {
                    if (i === 0 && op[i] === -1) {
                        return this.calc()
                    }
                    return [0, 0, "操作序列非法"]
                }
                params[i] += op[i]
            }
        }
    }
}
// let a = [[1, 2], [-1, 0]]
// let b = [1, 2]
// let c = 5
// console.log(typeof a[0])
// console.log(typeof b[0])
// console.log(typeof c[0])