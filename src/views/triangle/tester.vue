<template>
<div>
    <el-select v-model="choice" style="width:20%">
        <el-option :value="0">
            健壮性边界分析
        </el-option>
        <el-option :value="1">
            等价类分析
        </el-option>
    </el-select>
</div>
</template>
<script setup>
import { ref } from 'vue'
import case1 from './assets/case_bdry.json'
import case2 from './assets/case_eval.json'
const test_cases = []
const choice = ref()
</script>