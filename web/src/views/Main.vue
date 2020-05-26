<template>
  <!-- 这是主页面的框架 -->
  <div class="main">
    <div class="topBar d-flex ai-center bg-block py-2 px-3">
      <img src="../assets/logo.png" height="30" alt="" />
      <div class="px-2 flex-1">
        <div class="text-white ">王者荣耀</div>
        <div class="text-grey fs-sm mt-1">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>

    <div class="nav nav-inverse bg-primary py-3 pb-2 ai-center jc-around">
      <div class="nav-item pb-1 nav-active ">
        <router-link class="text-white" to="/">首页</router-link>
      </div>
      <div class="nav-item pb-1">
        <router-link class="text-white" to="/">攻略中心</router-link>
      </div>
      <div class="nav-item pb-1">
        <router-link class="text-white" to="/">赛事中心</router-link>
      </div>
    </div>

    <!-- 路由展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {},
};
</script>
