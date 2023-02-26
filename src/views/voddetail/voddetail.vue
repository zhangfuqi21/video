<template>
    <div class="vodetail">
        <div class="top">
            <div class="top-left">
                <h1>{{ list.data.title}}</h1>
                <span class="block">2023</span>
                <p>{{ list.data.descs }}</p>
<hr/>
<div><span>导演:{{ list.data.director }}</span>
<span>{{ list.data.actor }}</span>
<span>更新:{{ list.data.updateTime }}</span>
<span>集数:{{ list.count }}</span>
</div>
<hr class="mg-top"  >
<div>
    <a-button type="primary" shape="round"  size="large" >立即播放</a-button>
</div>
</div>
            
            <div class="top-right"><img :src="list.data.cover" alt=""></div>
        </div>
        <div class="mid">
            <h1>选集播放</h1>
            <div class="flex">
                <div class="mg" v-for="item in list.data.chapterList">
                    <a-button  @click="go(item)"   shape="round"  size="small" >{{ item.title }}</a-button>
                </div>
                
               
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted,ref } from 'vue';
import { useRoute ,useRouter} from 'vue-router';
import {detailList} from '../../api/search'
import { Store } from '../../pinia';

const {query,params}=useRoute()
const myStore=Store()
const router=useRouter()
const list=ref({data:''})

onMounted(async() => {
   await getDetaill()
   console.log(1)
})
const  getDetaill=(async()=>{
    
    if(params.void){
        const res=await detailList(params.void)
       
        list.value=res.data
        console.log(list.value)
    }
    
})
const go=((res)=>{
    myStore.getm3u8(res.chapterPath)
    console.log(res.chapterPath)
    router.push('/vodplay')
})

// onMounted(() => {
//     console.log(1)
// }),
</script>

<style scoped lang="less">
 .block{
            background-color: #32323c;
            border-radius: 5px;
            padding: 0 12px;
            color: #fff;
            display: inline;
            margin: 0 5px;
        }
        
.mg-top{
    margin-top: 30px;
}
        .top{
    height: 100%;
    width: 100%;
    display: flex;
    
    .top-left{
        margin-left:6px;
        width: 80%;
        span{
            display: block;
        }
       
        .block{
            background-color: #32323c;
            border-radius: 5px;
            padding: 0 12px;
            color: #fff;
            display: inline;
        }
        
    }
    hr{
        // border: 1px solid black;
        height: 1px;
        
    }
    .top-right{
        width: 200px;
        img{
            height: 300px;
            width: 200px;
            border-radius: 10px;
        }
    }
}
.mid{
    margin-top: 30px;
}
.mg{
    margin: 5px 5px;
}
.flex{
    display: flex;
    flex-wrap: wrap;
    width: 95%
}

</style>