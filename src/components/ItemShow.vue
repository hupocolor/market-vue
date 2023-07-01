<template>
    
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            :src="item.image"
            class="image"
          />
          <div style="padding: 14px">
            <el-splce wrap><span>{{ item.name }}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
              <el-text class="mx-1" type="warning" size="large">{{ item.price }}¥</el-text>
            </el-splce>
            <div class="bottom">
              <time class="time">{{ item.seller }}</time>
              <el-button text class="button" @click="goDetail(item.id)">详情页</el-button>
            </div>
          </div>
        </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
import router from '../router';

  const props = defineProps({
    item:{
      type:Object,
      default: null
    }
  })
  const goDetail = (id:number)=>{
    router.push({path:"/itemDetail",query:{id}})
  }
  </script>
  
  <style>
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    min-width: 200px;
    min-height: 200px;
    width: 200px;
    height: 200px;
    display: block;
  }
  </style>
  