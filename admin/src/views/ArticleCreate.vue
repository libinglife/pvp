<template>
<div>
    <h2>新建文章</h2>
    <el-form label-width="120px" @submit.native.prevent="create">
        <el-form-item label="所属分类">
            <el-select v-model="model.categories" placeholder="请选择">
                <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="文章标题">
            <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
            <VueEditor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></VueEditor>
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
import {
    VueEditor
} from 'vue2-editor';
export default {
    data() {
        return {
            model: {
               
            },
            parents: []
        }
    },
    components: {
        VueEditor,
    },
    created() {
        this.getParents();
    },
    methods: {
        async create() {
            console.log("创建：", this.model)
            const result = await this.$http.post('restful/articles/', this.model)
            console.log(result);
            this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
            });
            this.$router.push('/article/list')
        },

        // 获取父类列表
        async getParents() {
            const result = await this.$http.get('restful/categories/')
            console.log(result);
            this.parents = result.data
        },
        // 富文本上传图片钩子函数
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData();
            formData.append('file', file);
            const result = await this.$http.post('/upload', formData);

            const url = result.data.url;
            // 插入编辑器
            Editor.insertEmbed(cursorLocation, 'image', url);
            resetUploader()

        }
    },
};
</script>
