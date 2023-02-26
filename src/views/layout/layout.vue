<template>
    <a-layout has-sider>
      <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
      >
        <div class="logo" />
        <a-menu  v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item @click="add(0)" :key="0" >
            <user-outlined />
            <span class="nav-text">首页</span>
          </a-menu-item>
          <a-menu-item @click="add(index+1)"  v-for="(item,index) in tags" :key="index+1">
            <user-outlined />
            <span class="nav-text" >{{ item }}</span>
          </a-menu-item>
         
        </a-menu>
      </a-layout-sider>
      
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" >
            <search></search>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
          <router-view></router-view>
         <!-- <Swiper/> -->
         <!-- <NPlayer
      :options="{ src: 'https://vip.lz-cdn2.com/20220402/1938_b629ffbe/index.m3u8' }"
      :set="setPlayer"
    /> -->
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
           ©2023 Created by 蓝草
          
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script  setup lang="ts">
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
TagsFilled,
  } from '@ant-design/icons-vue';
  import Search from '../../components/search/search.vue'
  // import Swiper from '../../components/swiper/swiper.vue'
  import { defineComponent, ref ,onMounted,onUpdated } from 'vue';
  import {getTagList,getList} from '../../api/hot'
  import { useRouter } from 'vue-router';
import { nextTick } from 'process';
import { Store } from '../../pinia';
const router=useRouter()
  const myStore=Store()
  const selectedKeys=ref([0])
  const tags=ref([null])
  const data=ref({piece:''})
  // let player = null;
  // const setPlayer= (p) => (player = p)
    components: {
      UserOutlined
      VideoCameraOutlined
      UploadOutlined
      BarChartOutlined
      CloudOutlined
      AppstoreOutlined
      TeamOutlined
      ShopOutlined
      Search
      // Swiper
    }
    
    onMounted(async() => {
      console.log('mounted!')
     await getnewList()
      // load()
      
      // gettvList('国产剧',8)
      // console.log(player)
     
    })
    // onUpdated(()=>{
    //   console.log(2)
    // })
   async function getnewList(){
    const res=await getTagList()
    tags.value=res.data.tags
    myStore.reviseTag(res.data.tags)
    
    }
    function add(res){
      console.log(res)
      if(res===0){
        router.push('/home')
      }else if(res===1){
        router.push('/hot')
      }else if(res===2){
        router.push('/domestic')
      }else if(res===3){
        router.push('/variety')
      }else if(res===4){
        router.push('/American')
      }else if(res===5){
        router.push('/Japanese')
      }else if(res===6){
        router.push('/Drama')
      }else if(res===7){
        router.push('/anime')
      }else if(res===8){
        router.push('/documentary')
      }
    }
    async function gettvList(type,limit) {
      const res=await getList(type,limit)
    }
    // function load(){
    //   console.log()
    //   if(tags.value){
    //     console.log(tags.value.length)
    //     data.value.piece=tags.value.length.toString()
    //     tags.value.forEach(element => {
    //       console.log(element)
    //     });
    //   }
    // }
      
        
       
     
   
 
  </script>
  <style>
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>
  