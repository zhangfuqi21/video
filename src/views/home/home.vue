<template>
    <div>
        <Swiper/>
        
        <Grid :tag="item " :mit="8" class="Grid" v-for="(item,index) in myStore.tag" :key="index"/>
        
    </div>
</template>

<script setup lang="ts">
 import Swiper from '../../components/swiper/swiper.vue'
 import { Store } from '../../pinia';
 import Grid from '../../components/grid/gird.vue'
 const myStore=Store()
 components: {
    Swiper
    Grid
 }
</script>
W
<style scoped lang="less">
#components-grid-demo-playground :deep(.ant-col) {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground :deep(.ant-col) > div {
  background: #00a0e9;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
}
#components-grid-demo-playground pre {
  background: #f9f9f9;
  border-radius: 6px;
  font-size: 13px;
  padding: 8px 16px;
}
[data-theme='dark'] #components-grid-demo-playground pre {
  background: #2f2f2f;
}

.Grid{
  margin-top: 20px;
  h2{
    color: #00a0e9;

  }
  img{
  height: 280px;
  width: 200px;
  border-radius: 5px;
}
}
</style>