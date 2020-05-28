module.exports = (app) => {
    const router = require('express').Router();
    const mongoose = require('mongoose')
        //新闻页面数据的导入
    router.get('/news/init', async(req, res) => {

        //1.获取 新闻分类列表
        // let Category = require("../../model/Category")
        let Category = mongoose.model('Category');
        let Article = mongoose.model('Article')

        //1.2 获取新闻分类
        let catsParent = await Category.findOne({
            name: "新闻分类"
        });

        //1.3 获取新闻分类下的子类
        let resCats = await Category.find().where({
            parent: catsParent
        }).lean();

        // 打乱分类 随机选取分类
        let randomCats = resCats.slice(0).sort((a, b) => Math.random() - 0.5);

        let insertData = ["【520情侣皮肤】所有等待，只为重逢", "UI改造日志第四期：背包系统优化在即，局内快捷消息更智能！", "《五虎上将交响曲》揭秘，一起来看看你的音乐公开课随堂笔记吧！", "0元免流畅玩包，轻轻松松上王者", "王者荣耀联合乘车码送豪华大礼，五五开黑不氪金！", "5月28日净化游戏环境声明及处罚公告", "5月28日“演员”惩罚名单", "5月28日外挂专项打击公告", "5月27日体验服停机更新公告", "5月26日服务器优化升级公告", "应援KPL得好礼，福利清单就绪", "DIY告白信 520陪您花式告白", "爱在峡谷 甜蜜520", "峡谷迎初夏，好礼领不停", "黄忠-烈魂五虎上将限定皮肤即将上架，缤纷好礼齐降临", "虎牙明星主播踢馆名校战队，峡谷高材生与学霸的荣耀对决", "2020年KPL春季赛常规赛最佳阵容及最佳选手评选方式公布", "2020年KPL春季赛季后赛赛程赛制公布，5月28日16:00热血开战", "【原创内容大赛音乐比赛】优秀作品合集（二）", "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态"];

        // 2 整理数据准备插入
        let result = insertData.map((title) => {
            return {
                title: title,
                categories: randomCats.slice(0, 2)
            }
        })

        //3.1 先清空数据库的数据
        await Article.deleteMany({});

        //3.2 插入文章数据库
        let insertRes = await Article.insertMany(result);

        // console.log("插入结果", insertRes)
        res.send({
            data: result
        })
    })
    app.use("/web/api", router)
}