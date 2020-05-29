<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/p1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/p2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/p3.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right pr-3 pb-3"
        slot="pagination"
      ></div>
    </swiper>

    <!-- swiper of end -->

    <div class="nav-box mt-3">
      <div class="nav-icon bg-white  d-flex flex-warp pt-3">
        <div
          class="nav-item text-center mt-2 mb-3"
          v-for="(navName, index) in iconNavList"
          :key="navName"
        >
          <i class="sprite py-3" :class="getNavClas(index)"></i>
          <p>{{ navName }}</p>
        </div>
      </div>
      <div class="arrow bg-light text-center py-2">
        <i class="sprite arrow-show-hide"></i>
        <span class="fs-xm text-dark px-2">收起</span>
      </div>
    </div>

    <!-- nav-icon list of end  -->
    <m-list-card title="新闻资讯" iconName="menu" :navList="newsNavList">
      <template #content="{ contentData }">
        <div
          class="py-2 d-flex"
          v-for="(item, index) in contentData.newsList"
          :key="index"
        >
          <span class="text-dark-1">[{{ item.type }}]</span>
          <span class="pl-1">|</span>
          <span class="flex-1 text-ellipsis px-1">{{ item.title }}</span>
          <span class="fs-sm text-dark-1">{{
            item.updatedAt | timeFilter
          }}</span>
        </div>
      </template>
    </m-list-card>

    <!-- list-card -->
    <m-list-card title="新闻资讯1" iconName="Hero-copy" :navList="newsNavList">
      <template v-slot:content="{ contentData }">
        <div
          class="py-2"
          v-for="(item, index) in contentData.dataList"
          :key="index"
        >
          <span>[{{ item.type }}]</span>
          <span>|</span>
          <span>{{ item.content }}</span>
          <span>{{ item.time }}</span>
        </div>
      </template>
    </m-list-card>

    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
    <p>dsfdddddddddddddd</p>
  </div>
</template>

<script>
// @ is an alias to /src

import dayjs from "dayjs";
export default {
  name: "Home",
  components: {},
  filters: {
    timeFilter: function(value) {
      return dayjs(value).format("MM/DD");
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      iconNavList: [
        "爆料站",
        "故事站",
        "周边商城",
        "体验服",
        "新人专区",
        "荣耀.传承",
        "模拟战资料库",
        "王者营地",
        "公众号",
        "版本介绍",
        "对局环境",
        "无限王者团",
        "创意互动营",
      ],
      newsNavList: [],
      herosNavList: ["热门", "战士", "法师", "坦克", "刺客", "射手", "辅助"],
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      let news = await this.$http.get("/news");
      this.newsNavList = news.data;
      console.log(news);
    },
    getNavClas(index) {
      let className;
      switch (index) {
        case 0:
          className = "news";
          break;
        case 1:
          className = "story";
          break;
        case 2:
          className = "shopping";
          break;
        case 3:
          className = "experience";
          break;
        case 4:
          className = "new-people";
          break;
        case 5:
          className = "glory";
          break;
        case 6:
          className = "simulation";
          break;
        case 7:
          className = "king";
          break;
        case 8:
          className = "bjnewban";
          break;
        case 9:
          className = "versions";
          break;
        case 10:
          className = "game";
          break;
        case 11:
          className = "king-group";
          break;
        case 12:
          className = "creative";
          break;
      }

      return [className];
    },
  },
};
</script>

<style lang="scss">
// 轮播图序号点
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.125rem;
    background-color: #fff;

    &.swiper-pagination-bullet-active {
      background-color: #4b67af;
    }
  }
}

.nav-box {
  border-top: 1px solid rgb(212, 217, 222);
  border-bottom: 1px solid rgb(212, 217, 222);
}

.nav-box .nav-item {
  width: 25%;
  border-right: 1px solid #d4d9de;

  &:nth-child(4n) {
    border-right: none;
  }
}
</style>
