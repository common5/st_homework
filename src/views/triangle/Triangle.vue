<template>
    <el-card>
        <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="description" name="1">User</el-tab-pane>
        </el-tabs>
    </el-card>
</template>
<script setup>
import { ref } from 'vue'
import test2 from '../test2.vue'
const activeName = ref("1")
</script>

<script scoped></script>