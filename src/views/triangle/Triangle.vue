<template>
    <el-card>
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="description" name="1"><Desc /></el-tab-pane>
            <el-tab-pane label="test" name="2"></el-tab-pane>
        </el-tabs>
    </el-card>
</template>
<script setup>
import { ref } from 'vue'
import Desc from './description.vue'
import test2 from '../test2.vue'
const activeName = ref("1")
</script>

<script scoped></script>