<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <ItemShopHeader :msg="headerData" ></ItemShopHeader>
      </el-header>
      
      <el-container>
        <el-aside width="50%"></el-aside>
        <el-main>
          <ItemInfoBox :msg="infoData"></ItemInfoBox>
        </el-main>
      </el-container>
      <ItemShopFooter :msg="infoData"></ItemShopFooter>
    </el-container>
  </div>
</template>

<script setup>
import ItemShopHeader from '../components/ItemShopHeader.vue';
import ItemInfoBox from '../components/ItemInfoBox.vue';
import ItemShopFooter from '../components/ItemShopFooter.vue';
import NotFound from '../components/NotFound.vue';
import { getItemInfo } from '../api/item';
import { onBeforeMount, reactive } from 'vue';
import { useRoute } from 'vue-router';
import emitter from '../plugins/Bus.js'
const infoData = ref()
const headerData = reactive()
const route = useRoute()
onBeforeMount(() => {
  getItemInfo(route.query.id).then(res => {
    if (res.code == 200) {
      infoData.value = res.data
      emitter.emit("itemInfo",infoData.value.description)
      console.log(infoData.value.description)
    }
  })
})

</script>