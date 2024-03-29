module.exports = app => {

    const express = require('express')

    const jwt = require('jsonwebtoken')

    const assert = require('http-assert')

    const authMiddleware = require('../../middleware/auth')

    const router = express.Router({
        mergeParams: true //合并路由参数
    })

    // 1.创建分类
    router.post('/', async(req, res) => {

        try {
            const result = await req.Model.create(req.body)

            res.send(result)
        } catch (error) {
            console.log(error)
        }

    })

    // 2.编辑分类
    router.put('/:id', async(req, res) => {
        try {
            const result = await req.Model.findByIdAndUpdate(req.params.id, req.body)
            res.send({
                "code": 0,
                "msg": "修改成功"
            })

        } catch (error) {
            res.send({
                "code": -1,
                "msg": "修改失败"
            })
        }
    })

    // 3.查找分类列表
    router.get('/', async(req, res) => {

        let { page, limit } = req.query;
        page = page || 1;
        console.log(page, limit);


        let queryOptions = {}
        if (req.Model.modelName == "Category") {
            // 关联查询父级
            queryOptions = {
                populate: 'parent'
            }
        }
        let count = await req.Model.count();
        const result = await req.Model.find().setOptions(queryOptions).skip((page - 1) * limit).limit(10)

        if (limit) {
            res.send({ result, count })
        } else {
            res.send(result)
        }


    })

    // 4.查找分类列表详情
    router.get('/detail/:id', async(req, res) => {
        // console.log(req.params.id)
        const result = await req.Model.findById(req.params.id)
        res.send(result)
    })

    //5.删除分类
    router.delete('/:id', async(req, res) => {
        const id = req.params.id;
        let result = await req.Model.findByIdAndDelete(id)
        console.log("删除结果", result)
        res.send({
            status: 0,
            msg: '成功'
        })
    })

    app.use('/admin/api/restful/:resource', authMiddleware(), async(req, res, next) => {
        const flection = require('inflection')
            // 把复数转为首字母大写的单数
        let modelName = flection.classify(req.params.resource)
        console.log("数据模型名称：", modelName)
        let Model = require(`../../model/${modelName}`)
        req.Model = Model;
        next()
    }, router)

}