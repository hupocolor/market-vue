<template>
    <el-menu mode="horizontal" :default-active="activeIndex">
        <el-menu-item index="1" @click="detailView">商品详情</el-menu-item>
        <el-menu-item index="2" @click="commentsView">商品评论</el-menu-item>
    </el-menu>
    <!-- <NotFound></NotFound> -->
    <ItemInfoText v-show="isDetailView"></ItemInfoText>
    <NotFound v-show="!isDetailView"></NotFound>
</template>

<script setup>
import ItemInfoText from './ItemInfoText.vue'
import Comments from './Commens.vue'
import NotFound from './NotFound.vue'
import { defineProps } from 'vue';
const activeIndex = ref('1')
const isDetailView = ref(true)
const detailView = ()=>{
  isDetailView.value = true
}
const commentsView = ()=>{
  isDetailView.value = false
}
</script>