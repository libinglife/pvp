<template>
<div>
    <h2>编辑分类</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="父级分类">
            <el-select v-model="category.parent" placeholder="请选择">
                <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
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
                name: '',
                parent:''
            },
            parents:[]
        }
    },
    props:{
        id:String
    },
    methods: {
        async save() {
            console.log("编辑：",this.category)
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
            // this.category.name=result.data.name
            this.category=result.data
        },
         // 获取父类列表
        async getParents(){
            const result = await this.$http.get('category')
            console.log(result);
            this.parents = result.data

        }
    },
    created () {
        this.getDetailCategory()
        this.getParents()
    },
};
</script>
