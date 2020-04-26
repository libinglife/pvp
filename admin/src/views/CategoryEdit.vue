<template>
<div>
    <h2>编辑分类</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="分类名称">
            <el-input v-model="category.name"></el-input>
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
            category: {
                name: ''
            }
        }
    },
    props:{
        id:String
    },
    methods: {
        async save() {
            const result = await this.$http.put(`category/${this.id}`, this.category)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            this.$router.push('/category/list')
        },

        async getDetailCategory(){
            const result = await this.$http.get(`category/detail/${this.id}`)
            console.log(result);
            this.category.name=result.data.name
        }
    },
    created () {
        this.getDetailCategory()
    },
};
</script>
