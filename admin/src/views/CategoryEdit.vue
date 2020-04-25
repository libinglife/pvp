<template>
<div>
    <h2>新建分类</h2>
    <el-form label-width="120px" @submit.native.prevent="create">
        <el-form-item label="分类名称">
            <el-input v-model="category.name"></el-input>
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
            category: {
                name: ''
            }
        }
    },
    methods: {
        async create() {
            const result = await this.$http.post('http://localhost:3002/admin/api/category', this.category)
            console.log(result);
            this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
            });
        }
    },
};
</script>
