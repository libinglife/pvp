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
        <div class="top" :style="{backgroundImage:`url(${model.banner?model.banner:'https://ossweb-img.qq.com/upload/adw/image/20200606/da376c21fc05d14e833d941f5d6ca225.jpeg'})`}">
            <div class="info p-3 h-100 d-flex flex-column jc-end text-white">
                <p class="mb-2">{{model.title}}</p>
                <h2 class="mb-2">{{model.name}}</h2>
                <div class="fs-xm">{{model.categories.map(v=>v.name).join("/")}}</div>
                <div class="d-flex fs-sm ai-center">
                    <p class="mr-2 d-flex  ai-center"><span>难度</span><span class="score score1 mr-1">{{model.scores.difficult}}</span> </p>
                    <p class="mr-2 d-flex  ai-center"><span>技能</span><span class="score score2 mr-1">{{model.scores.skills}}</span> </p>
                    <p class="mr-2 d-flex  ai-center"><span>攻击</span><span class="score score3 mr-1">{{model.scores.attack}}</span> </p>
                    <p class="mr-2 d-flex  ai-center"><span>生存</span><span class="score score4 mr-1">{{model.scores.survive}}</span> </p>

                </div>

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
            model: {
                scores: {
                    difficult: 0, //难度
                    skills: 0, //技能
                    attack: 0, //攻击
                    survive: 0 //生存
                },
                categories:[]

            }
        }
    },
    created() {
        this.fetch();
    },
    methods: {
        async fetch() {
            let hero = await this.$http.get(`/hero/${this.id}`);
            console.log(hero)
            Object.assign(this.model,hero.data)
            // this.model = hero.data;

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
.top {
    width: 100%;
    height: 28vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .info {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

}

.score {
    display: inline-block;
    font-size: 14px;
    width: 18px;
    height: 18px;
    line-height: 20px;
    border-radius: 50%;
    text-align: center;
    background: #805402;
    transform: scale(.66);
    border: 1px solid #fff;

    &.score1 {
        background: #805402;
    }

    &.score2 {
        background: #243c96;
    }

    &.score3 {
        background: #842421;
    }

    &.score4 {
        background: #33332c;
    }
}
</style>
