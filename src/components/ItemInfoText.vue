<template>
    <div class="mdBox">
    <v-md-preview :text="description"></v-md-preview>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import emitter from '../plugins/Bus';
const description = ref('')
onBeforeMount(()=>{
    emitter.on("itemInfo",e=>{
        description.value = e
    })
})

</script>

<style scoped>
.mdBox{
    min-height: 400px;
}
</style>