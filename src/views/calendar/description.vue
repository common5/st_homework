<template>
<div style="display:flex; flex-direction: row;">
    <div class="desc-container"><scan v-html="result"></scan></div>
    <test2 :code="code" style="height:100%; width:50%; padding-left:20px; padding-top:20px;border-width:1px;" />
</div>
</template>
<script setup>
import markdownit from 'markdown-it'
import test2 from '../test2.vue'
import { ref } from 'vue'
import code_str from '@/assets/funcs/calendar.js?raw'
import desc_str from '@/assets/funcs/calendar.md?raw'
const md = markdownit({
    breaks:true
})
const code = ref(code_str)
const desc = ref(desc_str)
console.log(code.value)
console.log(desc.value)
// const code = ref(problem.code)
const result = md.render(desc.value)
</script>
<style scoped>
.desc-container {
  word-wrap: normal;
  max-width: calc(50% - 10px);
  padding:5px;
  padding-right:20px;
  min-height: calc(100vh - 202px);
  height: 75vh;
  border-right: 1px solid #efefef; /* 添加边框样式 */
  overflow-y:auto
}
</style>