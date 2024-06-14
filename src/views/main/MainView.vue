<template>
    <el-container style="height:100%">
        <el-aside style="height:100%; width:auto;">
            <AsideBar :isCollapse="isCollapse" />
        </el-aside>
        <el-container style="background-color: #71777c80;">
            <el-header
                style="justify-content: start;align-content: center;padding-left: 0px; background-color: #efefef;">
                <el-button @click="collapse" :icon="icon()" color="#71777c80" :round=false
                    class="el-button-collapse"></el-button>
                <span style="padding-left:20px; font-size:20px">软件测试作业</span>
            </el-header>
            <el-main style="margin-top:1px; background-color: #efefef">
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus } from '@element-plus/icons-vue'
import AsideBar from './AsideBar.vue';

function collapse() {
    isCollapse.value = !isCollapse.value
    console.log(isCollapse.value)
}
function icon() {
    return isCollapse.value ? "Plus" : "Minus"
}
const isCollapse = ref(false)
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}

.el-button-collapse {
    width: 60px;
    height: 100%;
    border: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

/* .el-header-test {
    
} */
</style>