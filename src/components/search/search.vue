<template>
    <div>
        <div class="search-box">
            <a-input-search
        style="width: 35%"
      v-model:value="value"
      placeholder="搜索电影、电视剧、综艺、动漫"
      size="large"
      @search="onSearch"
    >
      <template #enterButton>
        <a-button><IconFont type="icon-sousuo" /></a-button>
      </template>
    </a-input-search>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import {ref} from 'vue'
const router=useRouter()
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3910319_df5f9z2tjtl.js"
});
const value =ref('')
const onSearch=(()=>{
    console.log(value.value)
    router.push(`/voSearch/${value.value}`)
})
components: {
    IconFont
  }
</script>

<style scoped lang="less">
.search-box{
    margin-top: 10px;
    margin-left: 20px;
    
}
</style>