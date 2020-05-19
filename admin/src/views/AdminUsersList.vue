<template>
  <div class="categoryList">
    <h2>管理员列表</h2>
    <el-table :data="model">
      <el-table-column prop="_id" label="id" width="240"></el-table-column>

      <el-table-column prop="username" label="用户名" width="220"></el-table-column>

      <el-table-column label="操作" width="260">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
          <el-button
            type="primary"
            @click="$router.push(`/admin_users/edit/${scope.row._id}`)"
            size="small"
          >编辑</el-button>
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
    };
  },

  methods: {
    // 获取列表数据
    async fetch() {
      const res = await this.$http.get("restful/adminUsers");
      this.model = res.data;
    },

    async del(item) {
      this.$confirm(`此操作将永久删除"${item.name}"管理员, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$http.delete(`restful/adminUsers/${item._id}`);
          console.log(res);
          this.$message({
            message: "恭喜你，删除成功",
            type: "success"
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
