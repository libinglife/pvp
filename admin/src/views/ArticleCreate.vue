<template>
<div>
    <h2>新建文章</h2>
    <el-form label-width="120px" @submit.native.prevent="create">
        <el-form-item label="所属分类">
            <el-select v-model="model.categories" placeholder="请选择">
                <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="文章标题">
            <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
            <el-input v-model="model.body"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" native-type="submit">提交</el-button>
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
                // parent:''
            },
            parents:[]
        }
    },
    created () {
        this.getParents();
    },
    methods: {
        async create() {
            console.log("创建：",this.model)
            const result = await this.$http.post('restful/articles/', this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
            });
            this.$router.push('/article/list')
        },

        // 获取父类列表
        async getParents(){
            const result = await this.$http.get('restful/categories/')
            console.log(result);
            this.parents = result.data
        }
    },
};
</script>
