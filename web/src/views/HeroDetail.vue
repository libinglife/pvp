<template>
<div class="hero-detail">
     <div class="topBar d-flex ai-center bg-block py-2 px-3">
      <img src="../assets/logo.png" height="30" alt="" />
      <div class="px-2 flex-1">
        <div class="text-white ">王者荣耀</div>
        <div class="text-grey fs-sm mt-1">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>

    <div class="d-flex py-3 px-2 ai-center border-bottom" v-if="model">
       {{model.name}}
    </div>
  
   
</div>
</template>

<script>
import dayjs from 'dayjs';
export default {
    props: {
        id: {
            type:String,
            required: true
        }
    },
    data() {
        return {
            model: ""
        }
    },
    created () {
        this.fetch();
    },
    methods: {
        async fetch() {
           let news = await this.$http.get(`/hero/${this.id}`);
           console.log(news)
           this.model= news.data;

        }
    },
    filters: {
        timeFilter: function(value) {
            return dayjs(value).format('YYYY-MM-DD');
        }
    }
}
</script>

<style lang="scss">
    .ql-align-center {
        img{
            width:100%;
        }
    }
    .body{
        img{
            width:100%;
        }
    }
</style>
