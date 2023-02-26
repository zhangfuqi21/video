<template>
    <div>
        <div class="playbox">
            <vue3VideoPlay 
      width="800px"
      title="1"
      :src="options.src"
      :type="options.type"
      :autoPlay="false"
       />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref ,onMounted ,reactive} from 'vue';

import { Store } from '../../pinia';
const myStore=Store()
const options=reactive({
    src:myStore.m3u8,
    type:'m3u8'
})

onMounted(async() => {
 
})



</script>

<style lang="less" scoped>
.playbox{
    width: 70%;
    height: 700px;
}
</style>