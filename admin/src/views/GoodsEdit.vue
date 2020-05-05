<template>
<div>
    <h2>编辑物品</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="物品名称">
            <el-input v-model="model.name"></el-input>
        </el-form-item>
         <el-form-item label="物品图片">
            <el-upload class="avatar-uploader" 
            :action="$http.defaults.baseURL+'upload'" 
            :show-file-list="false" 
            :on-success="onSuccess" 
            :before-upload="beforeUpload">
                <img v-if="model.icon" :src="model.icon" class="avatar">
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
            },
        }
    },
    props:{
        id:String
    },
    methods: {
        async save() {
            console.log("编辑：",this.model)
            const result = await this.$http.put(`restful/goods/${this.id}`, this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            this.$router.push('/goods/list')
        },

         // 获取物品数据详情
        async fetch(){
            const result = await this.$http.get(`restful/goods/detail/${this.id}`)
            console.log(result);
            // this.category.name=result.data.name
            this.model=result.data
        },
         onSuccess(res){
            console.log(res)
            this.$set(this.model,'icon',res.url)
            // this.model.icon = res.url;
        },

        beforeUpload(res){
            console.log("上传之前",res)
        }
    },
    created () {
        this.fetch()
    },
};
</script>
