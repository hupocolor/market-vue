<template>
    <el-row :gutter="20">
    </el-row>
    <el-row :gutter="20">
    </el-row>
    <el-row :gutter="20">
    </el-row>
    
    <div class="wrapper">
      <div class="wrapper-content" v-for="(item,index) in props.msg"
        :key="'item'+index"
        :span="20"
        :offset="0">
    <ItemShow :item="item" ></ItemShow>
      </div>
    </div>
        

    <el-row :gutter="20">
    </el-row>
    <el-row :gutter="20">
    </el-row>
    <el-row :gutter="20">
    </el-row>
</template>

<script setup>
import ItemShow from './ItemShow.vue';
import {defineProps} from 'vue'
const props = defineProps({
    msg: {
        type: Array,
        default: null
    }
})
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: auto;
  display: inline-flex;
  /* justify-content: space-between; */
  flex-direction: row;
  flex-wrap: wrap;
}
.wrapper-content{
  margin: 2%;
}
</style>
