<template>
    <div class="grid">
        <div class="box">
            <div  @click="add(item.videoId)" v-for="item in props.list" class="box-1">
            <div class="left">
                <img :src="item.cover" alt="">
            </div>
            <div class="right">
                <span>{{ item.title }}</span>
                <span>{{ item.releaseTime }}</span>
                <span>{{item.actor}}</span>
                <span>详情</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router =useRouter()
const props=defineProps ({
    list:Object,

})
const add=((r)=>{
    console.log(r)
    router.push(`/voddetail/${r}`)
})

</script>

<style scoped lang="less">
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    
    .box-1{
        display: flex;
        width: 340px;
        height: 165px;
        border: 1px solid black;
        margin-left: 50px;
        margin-top: 10px;
        .left{
            img{
                height: 163px;
                width: 120px;
            }
        }
        .right{
            span{
                display: block;
            }
            overflow: hidden;
        }
    }
}
.grid{
    width: 100%;
    height: 100%;
}
</style>