const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    avatar: { type: String },
    title: { type: String },
    //英雄分类
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    scores: { //评分
        difficult: { type: Number }, //难度
        skills: { type: Number }, //技能
        attack: { type: Number }, //攻击
        survive: { type: Number } //生存
    },
    skills: [{ //技能
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String },
    }],

    // 顺风出装
    goods1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Good' }],
    // 逆风出装
    goods2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Good' }],

    useTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    // 搭档
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String }
    }]
})

module.exports = mongoose.model('Hero', schema, "heroes")