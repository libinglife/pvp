const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// 接受客户端json数据 
app.use(express.json())

// 跨域资源共享
app.use(cors())

//使用mongoose
require('./plugins/db')()


app.get('/', async(req, res) => {
    res.send("首页")
})

// 调用路由admin
require('./router/admin/index')(app)

app.listen(3002, () => {
    console.log("localhost:3002")
})