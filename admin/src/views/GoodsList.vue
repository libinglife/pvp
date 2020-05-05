<template>
<div class="categoryList">
    <h2>物品列表</h2>
    <el-table :data="model">
        <el-table-column prop="_id" label="id" width="240">
        </el-table-column>
        <el-table-column prop="name" label="物品名称" width="220">
        </el-table-column>
        <el-table-column prop="icon" label="物品图片" width="220">
            <template slot-scope="scope">
                <img :src="scope.row.icon" style="height:3em" alt="" >
            </template>
        </el-table-column>

        <el-table-column label="操作" width="260">
            <template slot-scope="scope">
                <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
                <el-button type="primary" @click="$router.push(`/goods/edit/${scope.row._id}`)" size="small">编辑</el-button>
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
            model: []
        }
    },

    methods: {
        // 获取列表数据
        async fetch() {
            const res = await this.$http.get('restful/goods');
            this.model = res.data
        },

        async del(item) {

            this.$confirm(`此操作将永久删除"${item.name}"物品, 是否继续?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {

                let res = await this.$http.delete(`restful/goods/${item._id}`)
                console.log(res)
                this.$message({
                    message: '恭喜你，删除成功',
                    type: 'success'
                })
                this.fetch()

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

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
