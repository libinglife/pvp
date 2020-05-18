module.exports = app => {

    const express = require('express')

    const jwt = require('jsonwebtoken')

    const assert = require('http-assert')

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
    router.get('/', async(req, res, next) => {

        // 1.获取客户端请求头中的token
        console.log("授权：", req.headers.authorization);

        let token = String(req.headers.authorization || '').split(' ').pop();
        console.log("token:", token)
        assert(token, 401, "请提供jwt token")

        // 2.根据app 设置的秘钥进行验证秘钥的合法性

        let resultInfo = jwt.verify(token, app.get('secret'), (err, decode) => {
            if (err) {
                console.log(err);
                assert(null, 422, "无效的token");
            } else {
                console.log("解析结果", decode)
                return decode;
            }
        });
        console.log('56：', resultInfo);



        //3.根据token 解析出的id ，在数据库中查询是否有此用户 
        let AdminUser = require('../../model/AdminUser')
        let user = await AdminUser.findById(resultInfo.id);
        console.log("用户信息", user)
        assert(user, 401, "请先登录")
        req.user = user;

        await next();
    }, async(req, res) => {
        // console.log(req.Model.modelName)
        let queryOptions = {}
        if (req.Model.modelName == "Category") {
            // 关联查询父级
            queryOptions = {
                populate: 'parent'
            }
        }

        const result = await req.Model.find().setOptions(queryOptions).limit(10)

        res.send(result)
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

    app.use('/admin/api/restful/:resource', async(req, res, next) => {
        const flection = require('inflection')
            // 把复数转为首字母大写的单数
        let modelName = flection.classify(req.params.resource)
        console.log("数据模型名称：", modelName)
        let Model = require(`../../model/${modelName}`)
        req.Model = Model;
        next()
    }, router)


    // 错误处理函数
    app.use(async(err, req, res, next) => {
        console.log("错误：", err.status);
        res.status(err.status || 500).send({
            message: err.message
        })
    })

}