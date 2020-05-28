const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    //英雄分类
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
}, {
    timestamps: true, //添加时间戳
})

module.exports = mongoose.model('Article', schema)