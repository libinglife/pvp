<template>
<div>
    <h2>新建物品</h2>
    <el-form label-width="120px" @submit.native.prevent="create">

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
            <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<script>
export default {
    data() {
        return {
            model: {
                name: ''
            }
        }
    },
    created() {

    },
    methods: {
        async create() {

            const result = await this.$http.post('restful/goods/', this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
            });
            this.$router.push('/goods/list')
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
};
</script>
