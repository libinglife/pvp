<template>
<div class="categoryList">
    <h2>分类列表</h2>
    <el-table :data="categoryList">
        <el-table-column prop="_id" label="id" width="240">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="220">
        </el-table-column>

        <el-table-column  label="操作" width="260">
            <template slot-scope="scope">
                <el-button @click="del(scope.row._id)" type="danger" size="small">删除</el-button>
                <el-button type="primary" @click="$router.push(`/category/edit/${scope.row._id}`)" size="small">编辑</el-button>
            </template>
        </el-table-column>

    </el-table>
</div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            categoryList: []
        }
    },

    methods: {
      // 获取列表数据
        async fetch() {
            const res = await this.$http.get('category');
            this.categoryList = res.data
        },

        del(id){
          console.log(id)
        }
    },
    created() {
        this.fetch()
    },
    mounted() {}
}
</script>

<style lang="scss" scoped>

</style>
