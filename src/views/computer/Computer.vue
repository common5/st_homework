<template>
    <el-card style="min-height:calc(100vh - 202px)">
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="description" name="1"  style="min-height:calc(100vh-202px)">
                <Desc style="min-height:calc(100vh-202px); " />
            </el-tab-pane>
            <el-tab-pane label="test" name="2">
                <tester />
            </el-tab-pane>

        </el-tabs>
    </el-card>
</template>
<script setup>
import { ref } from 'vue'
import Desc from './description.vue'
// import test2 from '../test2.vue'
import tester from './tester.vue'
const activeName = ref("1")
</script>

<style scoped>
</style>