<template>
  <div class="about">
    <h1 id="te">This is an about page</h1>
    <hr />
    {{ data }}
    <br>
    {{ watchedStr }}
    <input type="text" v-model="changeDataReal">
    <br>
    <input type="" v-model="watchedStr">
    <br>
    <input type="" v-model="x">
    <router-link to="/">跳转</router-link>
    <a href="www.baidu.com" style="color: pink;"></a>
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { onBeforeMount, onMounted, ref, watch, watchEffect } from 'vue';
import {useRouter,useRoute} from 'vue-router';

onBeforeMount(()=>{
  // console.log(document.getElementById("te"))
})

onMounted(()=>{
  console.log(document.getElementById("te"))
})


let watchedStr = ref("str")
let x = ref(3);
let data = ref('这是数据')
//路由  
let router = useRouter();
//watch 监听,可以监听一个数据也可以监听多个
watch( x , (newVal,oldVal)=>{
  console.log( newVal,oldVal)
},{
  immediate:true //true为初始化,false为不初始化
})
let changeDataReal = computed({
  get(){
    return data.value
  },
  set(val){
    data.value = val
  }
})
watchEffect(()=>{
  console.log(watchedStr.value)
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
