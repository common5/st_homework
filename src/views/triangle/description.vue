<template>
<el-text tag="b" style="font-size:30px;">问题描述</el-text>
<p><scan v-html="result"></scan></p>
</template>
<script setup>
import markdownit from 'markdown-it'
import problem from './assets/problem.json'
const md = markdownit({
    breaks:true
})
const desc = problem.description
const code = problem.code
const result = md.render(desc)
</script>