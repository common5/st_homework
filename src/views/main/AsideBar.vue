<template>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" router background-color="#343c44" text-color="#ffffff"
        active-text-color="#ffd700" :default-openeds="openeds">
        <el-sub-menu index="1">
            <template v-slot:title>
                <span style="padding-left:20px">课程练习</span>
            </template>
            <el-menu-item-group style="flex-grow:1">
                <el-menu-item index="/triangle" style="justify-content:start">
                    1.判断三角形类型
                </el-menu-item>
                <el-menu-item index="/calendar" style="justify-content:start">
                    2.万年历问题
                </el-menu-item>
                <el-menu-item index="/test" style="justify-content:start">
                    0.测试代码编辑器1
                </el-menu-item>
                <el-menu-item index="/test2" style="justify-content:start">
                    0.测试代码编辑器2
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'


const props = defineProps({
    isCollapse: Boolean
})
const openeds = ref(['1'])

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    border-right: 0px;
    width: 200px;
    height: 100%;
}

.el-menu-vertical-demo.el-menu--collapse {
    border-right: 0px;
    min-height: 100%;
}
</style>