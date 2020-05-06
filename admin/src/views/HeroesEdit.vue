<template>
<div>
    <h2>编辑英雄</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="英雄名称">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="英雄称号">
            <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="英雄种类">
            <el-select v-model="model.categories" placeholder="请选择种类">
                <!-- <el-option v-for="item of herosCategory" :key="item._id" 
                :label="item.name" :value="item._id"></el-option> -->

                <el-option v-for="item in herosCategory" :key="item._id" :label="item.name" :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="英雄图片">
            <el-upload class="avatar-uploader" 
            :action="$http.defaults.baseURL+'upload'" 
            :show-file-list="false" 
            :on-success="onSuccess" 
            :before-upload="beforeUpload">
                <img v-if="model.avatar" :src="model.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
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
            model: {
                name: '',
                avatar:'',
                categories:''

            },

            herosCategory:[],
        }
    },
    props:{
        id:String
    },
    methods: {
        async save() {
            console.log("编辑：",this.model)
            const result = await this.$http.put(`restful/heroes/${this.id}`, this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            this.$router.push('/heroes/list')
        },

         // 获取英雄数据详情
        async fetch(){
            const result = await this.$http.get(`restful/heroes/detail/${this.id}`)
            console.log(result);
            // this.category.name=result.data.name
            this.model=result.data
        },
         onSuccess(res){
            console.log(res)
            // this.$set(this.model,'icon',res.url)
            this.model.avatar = res.url;
        },

        beforeUpload(res){
            console.log("上传之前",res)
        },
        // 获取英雄分类
        async fetchHerosCategory(){
            let result= await this.$http.get('restful/categories');
            console.log(result)
            this.herosCategory= result.data
        }
    },
    created () {
        this.fetch();
        this.fetchHerosCategory()
    },
};
</script>
