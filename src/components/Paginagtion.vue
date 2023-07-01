<template>
    <div class="demonstration">
        <ItemList :msg="itemList"></ItemList>
    <el-row :gutter="20">
        <el-col :span="5" :offset="0"></el-col>
        <el-col :span="12" :offset="0">
        <el-pagination
      v-model:current-page="queryParams.pageNum"
      v-model:page-size="queryParams.pageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /></el-col>
    </el-row>
    
    <el-row :gutter="20">
    </el-row>
    <el-row :gutter="20">
    </el-row>
  </div>
</template>

<script setup>
import ItemList from './ItemList.vue';
import { getItemList } from '../api/item';
import emitter from '../plugins/Bus';
import { onBeforeMount } from 'vue';
const queryParams = reactive({
    pageNum: 1,
    pageSize: 10,
    keyword: ''
})
//商品列表
const itemList = ref([]);
const total = ref(1000)
const handleCurrentChange = (val)=>{
    queryParams.pageNum = val
    console.log(queryParams)
    console.log(itemList.value)
    getItemList(queryParams).then(res=>{itemList.value = res.data.records;})
}
const handleSizeChange = (val)=>{
    queryParams.pageSize = val
    console.log(queryParams.pageSize)
}
//将Serch部件的keywords与传输给后端的keyword进行绑定
onBeforeMount(()=>{
    getItemList(queryParams).then(res=>{
        itemList.value = res.data.records;
        total.value = res.data.total
    })
    emitter.on('getKeyword',e=>{
        queryParams.keyword = e.value;
        getItemList(queryParams).then(res=>{itemList.value = res.data.records;total.value = res.data.total})
    })
})
</script>