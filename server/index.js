const express = require('express')
const cors = require('cors')

const path = require('path')

const app = express()

// 设置秘钥
app.set('secret', 'libing123')

// 静态资源
app.use('/upload', express.static(path.join(__dirname, '/upload')))
    // app.use(express.static(__dirname + '/upload'))

// 接受客户端json数据
app.use(express.json())

// 跨域资源共享
app.use(cors())

//使用mongoose
require('./plugins/db')()


app.get('/', async(req, res) => {
    res.send("首页")
})

// admin 管理后台 调用路由
require('./router/admin/index')(app)
require('./router/upload.js')(app)

// 登录路由
require('./router/admin/login')(app)


// web 前端页面路由
require('./router/web/index')(app)


// 错误处理函数
app.use(async(err, req, res, next) => {
    console.log("捕获错误：", err.status);
    res.status(err.status || 500).send({
        message: err.message
    })
})

app.listen(3002, () => {
    console.log("localhost:3002")
})