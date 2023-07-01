<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userpassword">
        <el-input type="password" v-model="userpassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="links-container">
      <a href="#" @click="goForgetpass" class="forgot-password">忘记密码</a>
      <a href="#" @click="goRegister" class="register">注册</a>
    </div>
  </div>
</template>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
}

.links-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 300px;
}

.forgot-password,
.register {
  color: blue;
  text-decoration: underline;
}
</style>

<script setup>
import { ref } from 'vue';
import Hearder from '../components/Header.vue'
import { userLogin } from '../api/user';
import { useRouter } from 'vue-router';
import { useUserStroe } from '../stores/userStore';
const router = useRouter();
const username = ref('')
const isLogin = ref(false)
const userpassword = ref('')
const store = useUserStroe()
const login = () => {
  // 处理登录逻辑
  userLogin(username.value,userpassword.value).then(res=>{
    if(res.code == 200) {
    isLogin.value = true;
    store.setIsLogin(isLogin.value)
    console.log(store.isLogin)
      router.push("/")
    }
  })
};
const goRegister = ()=>{
  router.push("/register")
}
</script>
