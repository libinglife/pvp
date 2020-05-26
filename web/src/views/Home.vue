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
          v-for="(navName, index) in navList"
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

    <!-- nav list of end  -->
    <m-card title="新闻资讯" iconName="menu" :navList="newNavList">
        <!-- 卡片内容 -->
         <swiper>
            <swiper-slide v-for="navItem in 5" :key="navItem">
               <div class="py-2" v-for="index in 5" :key="index">
                    <span>[活动]</span>
                    <span>|</span>
                    <span>5月26日全服不停机更新公告</span>
                    <span>05/25</span>
                </div>
            </swiper-slide>
        </swiper>
    </m-card>
    <m-card title="英雄列表" iconName="Hero-copy" :navList="herosNavList">
         <!-- 卡片内容 -->
         <swiper>
            <swiper-slide v-for="navItem in herosNavList" :key="navItem">
               <div class="py-2" v-for="index in 5" :key="index">

                   <!-- 暂停在这里 -->
                   <img src="" alt="">
                   {{navItem}}
                </div>
            </swiper-slide>
        </swiper>
    </m-card>

   

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

export default {
  name: "Home",
  components: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      navList: [
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
      newNavList:[
          "热门",
          "新闻",
          "公告",
          "活动",
          "赛事",
      ],
      herosNavList:[
          "热门",
          "战士",
          "法师",
          "坦克",
          "刺客",
          "射手",
          "辅助",
      ]
    };
  },
  methods: {
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
