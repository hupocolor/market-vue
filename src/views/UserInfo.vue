<template>
    //上传头像
    <div class="uploadFiles"></div>
    <div class="changeInfo">
        <el-radio-group v-model="ruleForm.sex" class="ml-4">
      <el-radio label="0" size="large">男</el-radio>
      <el-radio label="1" size="large">女</el-radio>
    </el-radio-group>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
    
     <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
     </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >提交</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
      
    </el-form>
    <RouterLink to="/">返回首页</RouterLink>
    </div>
</template>


<script setup>
import { onBeforeMount } from 'vue';
import { getInfoText,savaUserInfo } from '../api/user';
const ruleForm = reactive({
    username: '',
    email: '',
    sex: ''
  })
 
  const submitForm = () => {
    console.log(ruleForm)
    savaUserInfo(ruleForm).then(res=>res.data)
  }
onBeforeMount(()=>{
    getInfoText().then(res=>{
        ruleForm.username = res.data.username
        ruleForm.email = res.data.email
        ruleForm.sex = res.data.sex
    })
})
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>

<style scoped>
.changeInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
}
</style>