<template>
<div>
    <h2>新建管理员</h2>
    <el-form label-width="120px" @submit.native.prevent="create">
        
        <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
        </el-form-item>
         <el-form-item label="密码">
            <el-input v-model="model.password"></el-input>
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
                username: '',
                
            },
        }
    },
    created () {
    },
    methods: {
        async create() {
            
            const result = await this.$http.post('restful/adminUsers', this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
            });
            this.$router.push('/admin_users/list')
        }
    },
};
</script>
