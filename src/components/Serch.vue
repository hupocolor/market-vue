<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><el-input v-model="keywords" placeholder="请输入关键词"></el-input></el-col>
    <el-col :span="6"><el-button type="primary" :icon="Search"  size="default" @click="serchKeyword"></el-button>
    </el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
<script setup>
import {
  Search
} from '@element-plus/icons-vue'
import emitter from '../plugins/Bus.js'
import {  inject, ref } from 'vue';
const keywords = ref();
const serchKeyword = ()=>{
  emitter.emit('getKeyword',keywords)
}
</script>
