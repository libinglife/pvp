<template>
  <div class="card  mt-3 bg-white  border-b">
    <m-card :title="title" :iconName="iconName" :navList="navList">
      <!-- 卡片内容 -->
      <swiper>
        <swiper-slide v-for="(navItem, index) in navList" :key="index">
          <slot name="content" :contentData="navItem"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    iconName: { type: String, required: true },
    navList: { type: Array, required: true },
    actived: { type: Number, value: 0 },
  },
};
</script>

<style lang="scss" scoped></style>
