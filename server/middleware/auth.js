const jwt = require('jsonwebtoken')
const assert = require('http-assert')
module.exports = (app) => {
    return async(req, res, next) => {

        // 1.获取客户端请求头中的token
        console.log("授权：", req.headers.authorization);
        let token = String(req.headers.authorization || '').split(' ').pop();
        console.log("token:", token)
        assert(token, 401, "请提供jwt token")

        // 2.根据app 设置的秘钥进行验证秘钥的合法性
        let resultInfo = jwt.verify(token, req.app.get('secret'), (err, decode) => {
            if (err) {
                console.log(err);
                assert(null, 422, "无效的token");
            } else {
                console.log("解析结果", decode)
                return decode;
            }
        });

        //3.根据token 解析出的id ，在数据库中查询是否有此用户 
        let AdminUser = require('../model/AdminUser')
        let user = await AdminUser.findById(resultInfo.id);
        console.log("用户信息", user)
        assert(user, 401, "请先登录")
        req.user = user;

        await next();
    }
}