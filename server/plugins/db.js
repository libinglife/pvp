module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/pvp', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    // 先加载所有的模型 ,否则 直接使用mongoose.model("模型名") 会报错 提示没有注册该模型
    // "message": "Schema hasn't been registered for model \"Category\".\nUse mongoose.model(name, schema)"
    require('require-all')(__dirname + '/../model')
}