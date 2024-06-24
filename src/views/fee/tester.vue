<template>
    <div style="height:75vh">
        <div style="display: flex; flex-direction: row; width:80vw">
            <el-select v-model="value" style="max-width:200px" @change="updateData">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <div style="margin-left:20px">
                <el-button type="success" @click="startTest">
                    开始测试<el-icon class="el-icon--right">
                        <Upload />
                    </el-icon>
                </el-button>
                <el-button type="danger" @click="reset">
                    重置
                </el-button>
            </div>
            <div style="margin-left:20px">
                <el-text>
                    测试用例数：{{ caseNum == 0 ? null : caseNum }}
                </el-text>
                <el-text style="margin-left:20px">
                    测试通过数：{{ casePassed == 0 ? null : casePassed }}
                </el-text>
            </div>
        </div>
        <el-table border :data="data" style="width: 80vw; max-height:70vh; overflow-x: auto;overflow-y: auto;">
            <el-table-column prop="no" label="用例编号" width=auto />
            <el-table-column prop="m" label="月通话分钟" width=auto />
            <el-table-column prop="c" label="年未按时缴费次数" width="auto" />
            <el-table-column prop="efee" label="期望缴费" width="auto" />
            <el-table-column prop="emsg" label="期望信息" width="auto" />
            <el-table-column prop="afee" label="实际缴费" width="auto" />
            <el-table-column prop="amsg" label="实际信息" width="auto" />
            <el-table-column prop="result" label="测试结果" width="auto" />
        </el-table>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import testCases from '@/assets/json/fee.json'
import fee from '@/assets/funcs/fee.js';
const caseName = ["健壮边界分析", "强一般等价类", "弱健壮等价类", "决策表分析"]
const value = ref("0")
const options = ref([
    { value: "0", label: "健壮边界分析" },
    { value: "1", label: "强一般等价类" },
    { value: "2", label: "弱健壮等价类" },
    { value: "3", label: "决策表分析" }
])
const caseNum = ref(0)
const casePassed = ref(0)

var data = reactive(testCases[caseName[value.value]])
function updateData() {
    reset()
    // console.log(value.value)
    data = reactive(testCases[caseName[value.value]])
}

function startTest() {
    reset()
    console.log(data)
    for (let i in data) {
        caseNum.value++
        // data[i].actual = calendar(parseInt(data[i].y), parseInt(data[i].m), parseInt(data[i].d))
        // data[i].result = (data[i].actual == data[i].expected) ? "通过" :"未通过"
        let ret = fee(data[i].m, data[i].c)
        data[i].afee = ret[0]
        data[i].amsg = ret[1]
        data[i].result = (data[i].afee == data[i].efee && data[i].amsg == data[i].emsg) ? "通过" : "不通过"
        if (data[i].result == "通过") {
            casePassed.value++;
        }
    }
}

function reset() {
    caseNum.value = 0
    casePassed.value = 0
    for (let i in data) {
        data[i].afee = ""
        data[i].amsg = ""
        data[i].result = ""
    }
}

</script>
<style>
.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>