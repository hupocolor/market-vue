<template>
    <div class="infoBox">
        <el-row :gutter="20">
            {{ info.name }}
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="0">价格:</el-col>
            <el-col :span="6" :offset="0">{{ info.price }}</el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="0">运送方式</el-col>
            <el-col :span="6" :offset="0">{{ info.trade }}</el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="6" :offset="0">成色</el-col>
            <el-col :span="6" :offset="0">{{ info.level }}成新</el-col>
        </el-row>

        <el-row :gutter="20">
            <el-button type="danger" size="" @click="buyNow">购买</el-button>
            <el-button type="warning" size="" @click="collect">收藏</el-button>
        </el-row>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import {defineProps} from 'vue'

const info = reactive({
    name: '加载中',
    category: '加载中',
    image: '',
    price: 0,
    trade: '加载中',
    level: 0
})

const props = defineProps({
    msg:{
        type:Object
    }
})
watch(
  () => props.msg,
  () => {
    console.log(props.msg)
    //监听父组件传入的值,赋值给当前页的属性
    info.name = props.msg.name
    info.image = props.msg.image
    info.category = props.msg.category
    info.price = props.msg.price
    info.level = props.msg.level
    info.trade = props.msg.trade
  },
  { deep: true }
)

</script>
