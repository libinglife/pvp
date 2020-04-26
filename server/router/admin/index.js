module.exports = app => {

    const express = require('express')
    const categoryModel = require('../../model/category')

    const router = express.Router()

    // 1.创建分类
    router.post('/category', async(req, res) => {

        const result = await categoryModel.create(req.body)

        res.send(result)
    })

    // 2.编辑分类
    router.put('/category/:id', async(req, res) => {
        const result = await categoryModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(result)
    })

    // 3.查找分类列表
    router.get('/category', async(req, res) => {
        const result = await categoryModel.find()

        res.send(result)
    })

    // 4.查找分类列表详情
    router.get('/category/detail/:id', async(req, res) => {
        console.log(req.params.id)
        const result = await categoryModel.findById(req.params.id)
        res.send(result)
    })

    //5.删除分类
    router.delete('/category/:id', async())

    app.use('/admin/api', router)
}