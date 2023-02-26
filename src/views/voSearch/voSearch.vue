<template>
    <div>
        <h1>搜索{{ params.title }},找到{{count}}部影片</h1>
        <grid :list="list"/>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';
import{ searchList} from '../../api/search'
import { useRoute } from 'vue-router';
import grid from './grid.vue'
const {query,params}=useRoute()
const count=ref('')
const list=ref({})
components: {
    grid
  }
onMounted(async() => {
    await getVideoList()
})
const getVideoList=(async()=>{
    const res= await searchList(params.title,20)
    console.log(res)
    count.value=res.data.count
    list.value=res.data.data
})
</script>

<style lang="scss" scoped>

</style>