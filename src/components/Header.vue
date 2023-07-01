<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" @click="goHome">首 页
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="3" @click="goLogin" v-if="!userStore.isLogin">登 录</el-menu-item>
      <el-sub-menu index="4" @click="geUserInfo" v-if="userStore.isLogin">
        <template #title>个 人 中 心</template>
        <el-menu-item index="4-1" @click="goUserInfo">我的信息</el-menu-item>
        <el-menu-item index="4-2">我的钱包</el-menu-item>
        <el-menu-item index="4-3" @click="goAddItem">发布闲置</el-menu-item>
        <el-menu-item index="4-4" @click="goLogout">退出登录</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1" v-if="userStore.isLogin">
        <template #title>收 藏 夹</template>
        <el-menu-item index="1-1">我的关注</el-menu-item>
        <el-menu-item index="1-2">收藏商品</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">联 系 客 服</el-menu-item>
      
    </el-menu>
  </template>
  
  <script setup>
  import { onBeforeMount, ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { useUserStroe } from '../stores/userStore';
  import { logout } from '../api/user';
  const router = useRouter();
  const userStore = useUserStroe()
  
  const activeIndex = ref('0')
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
    console.log(userStore.isLogin)
  }
  const goLogin = () =>{
    activeIndex.value = '3';
    router.push("/login")
  }
  const goHome = () =>{
    router.push("/")
  }
  const goLogout = () =>{
    logout().then(res=>{
      if(res.code == 200){
        alert("退出成功")
        userStore.setIsLogin(false)
      }else
        alert("退出失败")
    })
  }
  const goUserInfo =()=>{
    router.push("/userInfo")
  }
  const goAddItem=()=>{
    router.push("/addSellItem")
  }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  