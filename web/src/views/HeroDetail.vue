<template>
<div class="hero-detail">
    <div class="topBar d-flex ai-center bg-block py-2 px-3">
        <img src="../assets/logo.png" height="30" alt="" />
        <div class="px-2 flex-1">
            <span class="text-white mr-3">王者荣耀</span>
            <span class="text-white ">攻略站</span>
        </div>

        <button type="button" class="btn bg-primary">立即下载</button>
    </div>

    <div class="d-flex ai-center" v-if="model">
        <!-- 头部信息 -->
        <div class="top" :style="{backgroundImage:`url(${model.banner})`}">
            <div class="info p-3 h-100 d-flex flex-column jc-end text-white">
                <p>hhhhh</p>
                <p>hhhhh</p>
                <p>hhhhh</p>
                <p>hhhhh</p>
                <p>hhhhh</p>
            </div>

        </div>
       
    </div>

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
    created() {
        this.fetch();
    },
    methods: {
        async fetch() {
            let news = await this.$http.get(`/hero/${this.id}`);
            console.log(news)
            this.model = news.data;

        }
    },
    filters: {
        timeFilter: function (value) {
            return dayjs(value).format('YYYY-MM-DD');
        }
    }
}
</script>

<style lang="scss">
.top{
    width: 100%;
    height: 28vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .info{
         background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    }

}
</style>
