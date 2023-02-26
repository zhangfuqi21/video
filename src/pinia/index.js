import { defineStore } from "pinia";
export const Store=defineStore('main',{
    state:()=>{
        return{
            tag:{},
            m3u8:''
        }
    },
    getters:{
        
    },
    actions:{
        reviseTag(res){
            this.tag=res
        },
        getm3u8(res){
            this.m3u8=res
        }
    }
})