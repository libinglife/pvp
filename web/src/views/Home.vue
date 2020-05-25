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
        <img class="w-100" src="../assets/images/p2.jpeg" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right pr-3 pb-3"
        slot="pagination"
      ></div>
    </swiper>
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
    };
  },
};
</script>

<style lang="scss">
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
</style>
