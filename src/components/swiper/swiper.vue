<template>
    <a-carousel arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div><img src="https://t1.szrtcpa.com/2023/02/20/23a672e7a5d32.jpg" alt=""></div>
      <div><img src="https://t1.szrtcpa.com/2023/01/23/ffa57f8b92316.jpg" alt="">></div>
      <div><img src="https://t1.szrtcpa.com/2023/01/25/1f4e68bee50aa.jpg" alt=""></div>
      <div><img src="https://t1.szrtcpa.com/2023/02/19/353549718d97b.jpg" alt=""></div>
    </a-carousel>
  </template>
  <script lang="ts">
  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      LeftCircleOutlined,
      RightCircleOutlined,
    },
  });
  </script>
  <style scoped>
  /* For demo */
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 520px;
    line-height: 520px;
    background: #364d79;
    overflow: hidden;
  }
  
  .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
  }
  .ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
  }
  .ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
  }
  
  .ant-carousel :deep(.slick-slide h3) {
    color: #fff;
  }
  </style>
  