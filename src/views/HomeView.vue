<template>
  <div class="showBox">
    <div class="serchBox">
      <Serch></Serch>
    </div>
    <div class="itemBox">
      <Paginagtion></Paginagtion>
    </div>
    <div class="serchBox">
      <Serch></Serch>
    </div>
  </div>
</template>

<script setup>
import Serch from '../components/Serch.vue';
import Paginagtion from '../components/Paginagtion.vue';
</script>

<style scoped>
.showBox{
  /* width: 800px; */
  margin: 0 auto;
}
</style>

