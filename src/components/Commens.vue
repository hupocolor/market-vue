<template>
    <div>
        <h1>B组件</h1>
        {{ s }}
    </div>
</template>
<script setup>
import { onBeforeMount } from 'vue';
import emitter from '../plugins/Bus.js'
let s = ref('');
onBeforeMount(()=>{
    emitter.on('function',e=>{
        s.value = e.value;
    })
})
</script>