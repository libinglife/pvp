<template>
  <div class="card  bg-white p-3 border-b">
    <!-- 卡片标题 -->
    <div class="card-header pt-1 pb-3 d-flex ai-center">
      <i class="iconfont fs-xxl" :class="`icon-${iconName}`"></i>
      <span class="fs-xl flex-1 fs-xl px-2">{{ title }}</span>
      <i class="iconfont icon-more fs-xxl"></i>
    </div>
    <div class="card-body">
      <!-- 卡片导航 -->
      <div class="nav py-3 px-1 ai-center jc-between">
        <div
          class="nav-item pb-1"
          :class="{ 'nav-active': actived == index }"
          v-for="(navItme, index) in navList"
          :key="index"
          @click="navChange(index)"
        >
          <span>{{ navItme.name }}</span>
        </div>
      </div>

      <!-- 卡片内容 -->
      <slot></slot>
    </div>
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
  data() {
    return {
      //   actived: 0,
    };
  },
  methods: {
    navChange(index) {
      //  向父级发送事件
      this.$emit("navChange", index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
