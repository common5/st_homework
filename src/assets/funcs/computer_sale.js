/**
 * 电脑销售系统销售员提成计算接口, 根据输入的月售量返回销售总额, 提成, 运行状态
 * @param {number} frame 主机, 价格25, 月售上限70, 下限为1
 * @param {number} screen 屏幕, 价格30, 月售上限80, 下限为1
 * @param {number} equip 外设, 价格45, 月售上限90, 下限为1
 * @return {object}
 */
const bound = [[0, 70], [0, 80], [0, 90]]
const value = [25, 30, 45]
function computerSale(frame, screen, equip) {
    let tot = 0, cms = 0
    if (frame === -1 && typeof screen === 'number' && typeof equip === "number") {
        return [0, 0, "正确"]
    }
    for (let pos in arguments) {
        if (typeof arguments[pos] !== "number") {
            return [tot, cms, "参数非法"]
        }
        if (arguments[pos] < bound[pos][0] || arguments[pos] > bound[pos][1]) {
            return [tot, cms, "参数非法"]
        }
        if (arguments[pos] % 1 !== 0) {
            return [tot, cms, "参数非法"]
        }
    }
    for (let pos in arguments) {
        if (arguments[pos] == 0) {
            return [tot, cms, "参数非法"]
        }
    }
    for (let pos in arguments) {
        tot += value[pos] * arguments[pos]
    }
    if (tot <= 1000) {
        cms = tot * 10 / 100;
    }
    else if (tot <= 1800) {
        cms = tot * 15 / 100;
    }
    else {
        cms = tot * 20 / 100;
    }
    return [tot, cms, "正确"]
}
export default computerSale