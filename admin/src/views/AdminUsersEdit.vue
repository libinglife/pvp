<template>
<div>
    <h2>编辑管理员</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
        
        <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
        </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="model.password"></el-input>
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
            model: {
                username: '',
            },
        }
    },
    props:{
        id:String
    },
    methods: {
        async save() {
            
            const result = await this.$http.put(`restful/adminUsers/${this.id}`, this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，编辑成功',
                type: 'success'
            });
            this.$router.push('/admin_users/list')
        },

        async getDetailModel(){
            const result = await this.$http.get(`restful/adminUsers/detail/${this.id}`)
            console.log(result);
            
            this.model=result.data
        },
         
    },
    created () {
        this.getDetailModel()
       
    },
};
</script>
