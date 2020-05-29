<template>
  <div class="card  mt-3 bg-white  border-b">
    <m-card
      :title="title"
      :iconName="iconName"
      :navList="navList"
      :actived="actived"
      @navChange="onNavChange"
    >
      <!-- 卡片内容 -->
      <swiper ref="mySwiper" @slide-change="onSlideChange">
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
    // actived: { type: Number, value: 0 },
  },
  data() {
    return {
      actived: 0,
    };
  },
  computed: {
    swiper() {
      // 获取轮播图组件
      return this.$refs.mySwiper.$swiper;
    },
  },

  methods: {
    // 轮播滑动
    onSlideChange() {
      this.actived = this.swiper.realIndex;
    },
    // 导航改变
    onNavChange(navIndex) {
      //   console.log("接受子级组件参数");
      this.actived = navIndex;
      this.swiper.slideTo(navIndex);
    },
  },
};
</script>

<style lang="scss" scoped></style>
