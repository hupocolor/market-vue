<template>
    <div class="login-container">
        
        
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
      <el-form-item label="密码" prop="userpassword">
        <el-input v-model="ruleForm.userpassword" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
        />
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
    <RouterLink to="/login">返回登录</RouterLink>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { RouterLink } from 'vue-router';
  import { userRegister } from '../api/user.js'
  
  const ruleFormRef = ref<FormInstance>()
  
  const checkEmail = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('请输入邮箱'))
    }else
    callback()
  }
  const validateUsername = (rule: any, value: any, callback: any) =>{
    if(!value) {
        return callback(new Error('请输入用户名'))
    }
    else if(value.length >= 16) {
        return callback(new Error('用户名不得超过16位'))
    }else
    callback()
  }
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (ruleForm.checkPass !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请重新输入密码'))
    } else if (value !== ruleForm.userpassword) {
      callback(new Error("密码不一致!请检查"))
    } else {
      callback()
    }
  }
  
  const ruleForm = reactive({
    username: '',
    userpassword: '',
    checkPass: '',
    email: '',
    sex: ''
  })
  
  const rules = reactive<FormRules>({
    username: [{validator: validateUsername, trigger: 'blur'}],
    userpassword: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    email: [{ validator: checkEmail, trigger: 'blur' }],
  })
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    console.log(ruleForm)
    userRegister(ruleForm.username,ruleForm.userpassword,ruleForm.email,ruleForm.sex).then(res=>res.data)
    formEl.validate((valid) => {
      if (valid) {
        console.log('注册成功!')
      } else {
        console.log('注册失败!')
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
}
</style>
  