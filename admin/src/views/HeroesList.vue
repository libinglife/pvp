<template>
  <div class="categoryList">
    <h2>英雄列表</h2>
    <el-table :data="model.result">
      <el-table-column prop="_id" label="id" width="240"> </el-table-column>
      <el-table-column prop="name" label="英雄名称" width="220">
      </el-table-column>
      <el-table-column prop="title" label="称号" width="220"> </el-table-column>
      <el-table-column prop="avatar" label="英雄头像" width="220">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height:3em" alt="" />
        </template>
      </el-table-column>

      <el-table-column label="操作" width="260">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="danger" size="small"
            >删除</el-button
          >
          <el-button
            type="primary"
            @click="$router.push(`/heroes/edit/${scope.row._id}`)"
            size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-row style="margin-top:2rem">
      <el-col :offset="6" :span="16">
        <el-pagination
        @current-change="changePage"
        @prev-click ="prevClick"
         background layout="prev, pager, next" :total="model.count">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      model: {},
      currentPage:1
    };
  },

  methods: {
    // 获取列表数据
    async fetch() {
      const res = await this.$http.get("restful/heroes",{
        params:{
          page:this.currentPage,
          limit:10
        }
      });
      this.model = res.data;
    },

    // 分页改变
    changePage(page){
    
      this.currentPage = page;
      this.fetch()
    },
    // 上一页暂时用不到
    prevClick(e){
      console.log(e);
      console.log("上一页")
    },

    async del(item) {
      this.$confirm(`此操作将永久删除"${item.name}"英雄, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await this.$http.delete(`restful/heroes/${item._id}`);
          console.log(res);
          this.$message({
            message: "恭喜你，删除成功",
            type: "success",
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fetch();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
