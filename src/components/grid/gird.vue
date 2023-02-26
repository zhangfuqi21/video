<template>
    <div>
        <h2>{{ tag }}</h2>
          <a-row :gutter="[8,8]">
    
    <a-col class="col" v-for="item in list" :key="list.id"  :xs="20" :sm="16" :md="12" :lg="8" :xl="3"><img :src="item.cover" alt="">
        <div class="mgtop">{{ item.title }}</div>
    </a-col>
   
    
    
  </a-row>
    </div>
</template>

<script setup >
import {onMounted,onUpdated,ref} from 'vue'
import {getList} from '../../api/hot'

const props=defineProps ({
    tag:String,
    mit:Number
})
const list=ref({})
async function gettvList(type,limit) {
      const res=await getList(type,limit)
      list.value=res.data.subjects
      console.log(res.data.subjects)
    //   console.log(list.value)
    }
    onMounted( async()=>{
       await gettvList(props.tag,props.mit)
        console.log(list.value)
    })


</script>

<style lang="less" scoped>
 h2{
    color: #00a0e9;

  }
  img{
  height: 280px;
  width: 200px;
  border-radius: 5px;
}
.col{
    font-size:14px;
    text-align: center;
}
.mgtop{
    margin-top: 10px;
}
</style>