module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    let AdminUser = require('../../model/AdminUser')

    router.post('/login', async(req, res) => {
        let { username, password } = req.body;
        // 登录授权
        // 1.首先拿到用户名，查询数据库是否由此用户
        let user = await AdminUser.findOne({ username }).select('+password')
        if (!user) {
            return res.status(422).send({
                code: '-1',
                message: '没有此用户'
            })
        }
        // 2.如果有此用户，比较输入的密码是否正确
        let isValid = require('bcryptjs').compareSync(password, user.password);

        if (!isValid) {
            return res.status(422).send({
                message: '密码输入错误',
                code: '-1'
            })
        }

        // 3.如果正确，生成token 返回前端
        console.log("秘钥", app.get("secret"))
        let token = require('jsonwebtoken').sign({
            id: user._id,
        }, app.get('secret'));

        res.send({
            username: user.username,
            token: token
        })
    })

    app.use('/admin/api', router);
}