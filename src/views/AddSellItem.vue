<template>
    <el-row :gutter="20">
        <el-col :span="2" :offset="0"></el-col>

        <el-col :span="6" :offset="0" style="display: flex;">商品名</el-col>
        <el-col :span="12" :offset="0"><el-input v-model="name"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="2" :offset="0"></el-col>
        <el-col :span="6" :offset="0" style="display: flex;">分类</el-col>
        <el-col :span="12" :offset="0"><el-input v-model="category"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="2" :offset="0"></el-col>
        <el-col :span="6" :offset="0" style="display: flex;">价格</el-col>
        <el-col :span="12" :offset="0"><el-input-number v-model="price"></el-input-number></el-col>
    </el-row><el-row :gutter="20">
        <el-col :span="2" :offset="0"></el-col>
        <el-col :span="6" :offset="0" style="display: flex;">成色</el-col>
        <el-col :span="12" :offset="0"><el-input-number v-model="level"></el-input-number>成新</el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="2" :offset="0"></el-col>
        <el-col :span="6" :offset="0" style="display: flex;">交易方式</el-col>
        <el-col :span="12" :offset="0"><el-input v-model="trade"></el-input></el-col>
    </el-row>
    在下方输入详细描述
    <v-md-editor v-model="description" height="600px"></v-md-editor>
    <div class="yseBox">
        <el-button type="success" size="default" @click="addBtn">确定</el-button>
        <el-button type="warning" size="default" @click="cancelBtn">取消</el-button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { addSellItem } from '../api/item.js'
const router = useRouter()
const description = ref('')
const name = ref('')
const category = ref('')
const image = ref('https://tse4-mm.cn.bing.net/th/id/OIP-C.pVUQRcWNwUj6j56Fa81LygAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7')
const price = ref()
const trade = ref('')
const level = ref()
const addBtn = ()=>{
    addSellItem(name.value,category.value,description.value,image.value,price.value,trade.value,level.value).then(
        res=>{
            if(res.code == 200) {alert("操作成功");router.back()}
            else alert("操作失败")
        }
    )
}
const cancelBtn = ()=>{
    router.back()
}
</script>

<style scoped>
.yseBox{
    display: flex;
    justify-content: center;
    margin: 2%;
}
</style>