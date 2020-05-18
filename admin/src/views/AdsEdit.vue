<template>
<div>
    <h2>编辑广告</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
       
        <el-form-item label="广告标题">
            <el-input v-model="model.name"></el-input>
        </el-form-item>

          <el-form-item label="">
              <el-button size="small" type="primary" @click="model.items.push({})"> <i class="el-icon-plus"></i> 添加广告图片</el-button>
        </el-form-item>
      

        <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,index) in model.items" :key="index">

                <el-form-item label="广告链接">
                    <el-input v-model="item.url"></el-input>
                </el-form-item>
                <el-form-item label="广告图标">
                    <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'upload'" :onSuccess="res=>$set(item,'image',res.url)" :show-file-list="false">
                        <img v-if="item.image" :src="item.image" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
               
                <el-form-item label="">

                    <el-button size="small" type="danger" @click="model.items.splice(index,1)">删除</el-button>
                </el-form-item>

            </el-col>

        </el-row>
      
        <el-form-item>
            <el-button type="primary" native-type="submit">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<style scoped>
    .avatar{
    width:auto;
    height: 5rem;
    }
</style>

<script>

export default {
    data() {
        return {
            model: {
                name: '',
                items:[]
               
            },
           
        }
    },
   
    props:{
        id:String
    },
    methods: {
        async save() {
            console.log("编辑：",this.model)
            const result = await this.$http.put(`restful/ads/${this.id}`, this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            this.$router.push('/ads/list')
        },

        async getDetailModel(){
            const result = await this.$http.get(`restful/ads/detail/${this.id}`)
            console.log(result);
            // this.category.name=result.data.name
            this.model=result.data
        },
       
       
    },
    created () {
        this.getDetailModel()
    },
};
</script>
