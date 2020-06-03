<template>
<div>
    <h2>编辑英雄</h2>
    <el-form label-width="120px" @submit.native.prevent="save">

        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="基本信息" name="base">
                <el-form-item label="英雄名称">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>

                <el-form-item label="英雄称号">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>
                <el-form-item label="英雄种类">
                    <el-select v-model="model.categories" multiple placeholder="请选择种类">
                        <el-option v-for="item in herosCategory" :key="item._id" :label="item.name" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="难度">
                    <el-rate style="margin-top:0.6rem" show-score :max="10" v-model="model.scores.difficult">
                    </el-rate>
                </el-form-item>
                <el-form-item label="技能">
                    <el-rate style="margin-top:0.6rem" show-score :max="10" v-model="model.scores.skills">
                    </el-rate>
                </el-form-item>
                <el-form-item label="攻击">
                    <el-rate style="margin-top:0.6rem" show-score :max="10" v-model="model.scores.attack">
                    </el-rate>
                </el-form-item>
                <el-form-item label="生存">
                    <el-rate style="margin-top:0.6rem" show-score :max="10" v-model="model.scores.survive">
                    </el-rate>
                </el-form-item>

                <el-form-item label="英雄图片">
                    <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeader()" :show-file-list="false" :on-success="res=>$set(model,'avatar',res.url)" :before-upload="beforeUpload">
                        <img v-if="model.avatar" :src="model.avatar" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="英雄banner图">
                    <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeader()" :show-file-list="false" :on-success="res=>$set(model,'banner',res.url)" :before-upload="beforeUpload">
                        <img v-if="model.banner" :src="model.banner" class="heroBanner" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="顺风出装">
                    <el-select v-model="model.goods1" multiple placeholder="请选择出装">
                        <el-option v-for="item in goods" :key="item._id" :label="item.name" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="逆风出装">
                    <el-select v-model="model.goods2" multiple placeholder="请选择出装">
                        <el-option v-for="item in goods" :key="item._id" :label="item.name" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="使用技巧">
                    <el-input v-model="model.useTips" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="对抗技巧">
                    <el-input v-model="model.battleTips" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="团战技巧">
                    <el-input v-model="model.teamTips" type="textarea"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="添加技能" name="skills">
                <el-button size="small" type="primary" @click="model.skills.push({})"> <i class="el-icon-plus"></i> 添加技能</el-button>

                <el-row type="flex" style="flex-wrap:wrap">
                    <el-col :md="12" v-for="(item,index) in model.skills" :key="index">

                        <el-form-item label="技能名称">
                            <el-input v-model="item.name"></el-input>
                        </el-form-item>
                        <el-form-item label="技能图标">
                            <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeader()" :onSuccess="res=>$set(item,'icon',res.url)" :show-file-list="false">
                                <img v-if="item.icon" :src="item.icon" class="avatar" />
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="冷却值">
                            <el-input type="text" v-model="item.dealy"></el-input>
                        </el-form-item>

                        <el-form-item label="消耗">
                            <el-input type="text" v-model="item.expend"></el-input>

                        </el-form-item>
                        <el-form-item label="技能描述">
                            <el-input type="textarea" v-model="item.description"></el-input>
                        </el-form-item>

                        <el-form-item label="技能提示">
                            <el-input type="textarea" v-model="item.tips"></el-input>
                        </el-form-item>
                        <el-form-item label="">

                            <el-button size="small" type="danger" @click="model.skills.splice(index,1)">删除</el-button>
                        </el-form-item>

                    </el-col>

                </el-row>

            </el-tab-pane>

            <el-tab-pane label="英雄关系" name="heroRelation">

                <div>
                    <el-button size="small" type="primary" @click="model.partners.push({})"> <i class="el-icon-plus"></i> 添加最佳搭档英雄</el-button>

                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :md="12" v-for="(item,index) in model.partners" :key="index">

                            <el-form-item label="最佳搭档" class="mt-2">
                                <el-select v-model="item.hero" filterable placeholder="请选择英雄">
                                    <el-option v-for="hero in allHero" :key="hero._id" :label="hero.name" :value="hero._id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="关系描述">
                                <el-input type="textarea" v-model="item.description"></el-input>
                            </el-form-item>

                            <el-form-item label="">
                                <el-button size="small" type="danger" @click="model.partners.splice(index,1)">删除</el-button>
                            </el-form-item>

                        </el-col>

                    </el-row>
                </div>

                <div>
                    <el-button size="small" type="primary" @click="model.holdback.push({})"> <i class="el-icon-plus"></i>添加被克制英雄</el-button>

                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :md="12" v-for="(item,index) in model.holdback" :key="index">

                            <el-form-item label="被谁克制" class="mt-2">
                                <el-select v-model="item.hero" filterable placeholder="请选择英雄">
                                    <el-option v-for="hero in allHero" :key="hero._id" :label="hero.name" :value="hero._id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="关系描述">
                                <el-input type="textarea" v-model="item.description"></el-input>
                            </el-form-item>

                            <el-form-item label="">
                                <el-button size="small" type="danger" @click="model.holdback.splice(index,1)">删除</el-button>
                            </el-form-item>

                        </el-col>

                    </el-row>
                </div>

                <div>
                    <el-button size="small" type="primary" @click="model.overcome.push({})"> <i class="el-icon-plus"></i>添加克制英雄</el-button>

                    <el-row type="flex" style="flex-wrap:wrap">
                        <el-col :md="12" v-for="(item,index) in model.overcome" :key="index">

                            <el-form-item label="克制谁" class="mt-2">
                                <el-select v-model="item.hero" filterable placeholder="请选择英雄">
                                    <el-option v-for="hero in allHero" :key="hero._id" :label="hero.name" :value="hero._id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="关系描述">
                                <el-input type="textarea" v-model="item.description"></el-input>
                            </el-form-item>

                            <el-form-item label="">
                                <el-button size="small" type="danger" @click="model.overcome.splice(index,1)">删除</el-button>
                            </el-form-item>

                        </el-col>

                    </el-row>
                </div>
            </el-tab-pane>
        </el-tabs>

        <el-form-item style="margin-top:1rem">
            <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<style>

</style>

<script>
export default {
    data() {
        return {
            activeName: 'base',
            model: {
                name: '',
                avatar: '',
                categories: [],
                scores: {},
                skills: [],
                partners: [], //搭档谁
                holdback: [], //被谁克制
                overcome: [], //克制谁

            },

            herosCategory: [], //分类
            goods: [], //装备 
            allHero: [],
        }
    },
    props: {
        id: String
    },
    methods: {
        async save() {
            console.log("编辑：", this.model)
            const result = await this.$http.put(`restful/heroes/${this.id}`, this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            // this.$router.push('/heroes/list')
        },

        // 获取英雄数据详情
        async fetch() {
            const result = await this.$http.get(`restful/heroes/detail/${this.id}`)

            Object.assign(this.model, result.data);
            console.log(this.model)
        },
        onSuccess(res) {
            // console.log(res)
            // this.$set(this.model,'icon',res.url)
            this.model.avatar = res.url;
        },

        beforeUpload(res) {
            console.log("上传之前", res)
        },
        // 获取英雄分类
        async fetchHerosCategory() {
            let result = await this.$http.get('restful/categories');
            // console.log(result)
            this.herosCategory = result.data
        },
        // 获取技能分类
        async fetchGoods() {
            let result = await this.$http.get('restful/goods');
            // console.log(result)
            this.goods = result.data
        },
        // 获取全部英雄
        async fetchAllHero() {
            let allHero = await this.$http.get('restful/hero');
            this.allHero = allHero.data;

            // console.log(allHero)
        }
    },
    created() {
        this.fetch();
        this.fetchGoods();
        this.fetchHerosCategory();
        this.fetchAllHero()
    },
};
</script>
