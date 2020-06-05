<template>
<div class="container">
    <el-row type="flex" justify="center" align="middle">
        <el-col :span="12">
            <el-card :body-style="{ padding: '20px' }" :md="12">
                <div slot="header">
                    <span>请先登录</span>
                </div>
                <el-form :model="model" ref="form" label-width="80px" @submit.native.prevent="onLogin">
                    <el-form-item label="用户名">
                        <el-input v-model="model.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="model.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button native-type="submit" type="primary">登录</el-button>
                      
                    </el-form-item>
                </el-form>

                <!-- card body -->
            </el-card>

        </el-col>

    </el-row>

</div>
</template>

<script>
export default {
    data() {
        return {
            model: {}
        }
    },
    methods: {
        async onLogin() {
          let res=  await this.$http.post('/login',this.model);
        
          if(res.data.token){
              localStorage.setItem('token',res.data.token);
              localStorage.setItem('username',res.data.username);
              this.$router.push('/');
              this.$message({
                  type:'success',
                  message:`${res.data.username}登录成功`
              })
          }
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    margin-top:6rem;
}
</style>
