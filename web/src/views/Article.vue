<template>
<div class="article"  v-if="model">
    
    <div class="d-flex py-3 px-2 ai-center border-bottom">
        <i @click="$router.go(-1)" class="iconfont icon-Left text-blue fs-xl"></i>
        <strong class="flex-1 text-blue fs-md px-2 text-ellipsis">{{model.title}}</strong>
        <span class="text-dark">{{model.updatedAt | timeFilter}}</span>
    </div>
    <!-- 文章内容 -->
    <div class="px-3 py-2 body" v-html="model.body"></div>
</div>
</template>

<script>
import dayjs from 'dayjs';
export default {
    props: {
        id: {
            type: String,
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
           let news = await this.$http.get(`/news/${this.id}`);
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
