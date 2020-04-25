module.exports = app => {
    const express = require('express')
    const categoryModel = require('../../model/category')

    const router = express.Router()

    // 创建分类
    router.post('/category', async(req, res) => {

        const result = await categoryModel.create(req.body)

        res.send(result)
    })

    // 查找
    router.get('/category', async(req, res) => {

        const result = await categoryModel.find()

        res.send(result)
    })

    app.use('/admin/api', router)
}