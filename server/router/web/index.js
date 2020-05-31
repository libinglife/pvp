module.exports = (app) => {
    const router = require("express").Router();

    // 导入数据模型
    const mongoose = require("mongoose");

    // 这种路径方式略显麻烦 使用mongoose 引入模型
    // let Category = require("../../model/Category")

    let Category = mongoose.model("Category");
    let Article = mongoose.model("Article");
    let Hero = mongoose.model('Hero')

    //新闻页面数据的导入
    router.get("/news/init", async(req, res) => {
        //1.获取 新闻分类列表

        //1.1 获取新闻分类
        let catsParent = await Category.findOne({
            name: "新闻分类",
        });

        //1.2 获取新闻分类下的子类
        let resCats = await Category.find()
            .where({
                parent: catsParent,
            })
            .lean();

        // 打乱分类 随机选取分类

        let insertData = [
            "【520情侣皮肤】所有等待，只为重逢",
            "UI改造日志第四期：背包系统优化在即，局内快捷消息更智能！",
            "《五虎上将交响曲》揭秘，一起来看看你的音乐公开课随堂笔记吧！",
            "0元免流畅玩包，轻轻松松上王者",
            "王者荣耀联合乘车码送豪华大礼，五五开黑不氪金！",
            "5月28日净化游戏环境声明及处罚公告",
            "5月28日“演员”惩罚名单",
            "5月28日外挂专项打击公告",
            "5月27日体验服停机更新公告",
            "5月26日服务器优化升级公告",
            "应援KPL得好礼，福利清单就绪",
            "DIY告白信 520陪您花式告白",
            "爱在峡谷 甜蜜520",
            "峡谷迎初夏，好礼领不停",
            "黄忠-烈魂五虎上将限定皮肤即将上架，缤纷好礼齐降临",
            "虎牙明星主播踢馆名校战队，峡谷高材生与学霸的荣耀对决",
            "2020年KPL春季赛常规赛最佳阵容及最佳选手评选方式公布",
            "2020年KPL春季赛季后赛赛程赛制公布，5月28日16:00热血开战",
            "【原创内容大赛音乐比赛】优秀作品合集（二）",
            "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态",
        ];

        // 2 整理数据准备插入
        let result = insertData.map((title) => {
            let randomCats = resCats.slice(0).sort((a, b) => Math.random() - 0.5);
            return {
                title: title,
                categories: randomCats.slice(0, 2),
            };
        });

        //3.1 先清空数据库的数据
        await Article.deleteMany({});

        //3.2 插入文章数据库
        let insertRes = await Article.insertMany(result);

        // console.log("插入结果", insertRes)
        res.send({
            data: insertRes,
        });
    });

    //获取新闻列表 供前端使用
    router.get("/news", async(req, res) => {
        // 1.获取新闻分类
        let catsParent = await Category.findOne({
            name: "新闻分类",
        });

        //  2.使用聚合查询 找出新闻分类的子类
        let cats = await Category.aggregate([{
                $match: {
                    //先匹配出属于 新闻分类的
                    parent: catsParent._id,
                },
            },
            {
                $lookup: {
                    //联表查询 文章表
                    from: "articles",
                    localField: "_id",
                    foreignField: "categories",
                    as: "newsList",
                },
            },
            {
                // 添加字段  可以是相同的字段 即覆盖
                $addFields: {
                    // newsList 只要5条
                    newsList: {
                        $slice: ["$newsList", 5],
                    },
                },
            },
        ]);

        //3 添加热门分类
        // 3.1   查询热门文章并限制五条 所属分类为新闻分类的子分类

        // 获取新闻子分类Id
        let subCats = cats.map((v) => v._id);

        let hotArticle = await Article.find()
            .where({
                categories: {
                    $in: subCats,
                },
            })
            .populate("categories")
            .limit(5)
            .lean();

        cats.unshift({
            name: "热门",
            newsList: hotArticle,
        });

        cats.map((cat) => {
            let newsList = cat.newsList;
            newsList.map((news) => {
                if (cat.name == "热门") {
                    news.type = news.categories[0].name;
                } else {
                    news.type = cat.name;
                }
                return news;
            });
            return cat;
        });

        res.send(cats);
    });

    // 新闻详情
    router.get("/news/:id", async(req, res) => {
        // console.log("新闻id", req.params.id);
        let newsId = req.params.id;
        let resultData = await Article.findById(newsId).lean();

        // 添加两条相关资讯
        resultData.relate = await Article.find().where({
            categories: {
                $in: resultData.categories
            }
        }).limit(2)

        res.send(resultData)
    })

    //英雄数据导入接口
    router.get("/heroes/init", async(req, res) => {

        let heroesData = require("../../initData/heroes.json");

        // 使用先查找出英雄所有分类
        let heroesTypes = await Category.find().where({
            parent: await Category.findOne({ name: '英雄分类' })
        })

        console.log("英雄分类：---》", heroesTypes)

        let resultData = [];
        // 处理数据准备插入
        heroesData.forEach(async(catItem) => {

            // 先根据英雄分类名称找出所属分类id  效率不高废弃
            // 使用先查找出所有分类，再根据 type 进行匹配分类
            // let cats = await Category.findOne({
            //     name: catItem.type
            // })

            catItem.heroes.map(hero => {
                resultData.push({
                    name: hero.name,
                    avatar: hero.avatar,
                    // categories: [cats]
                    // 过滤所属分类
                    categories: heroesTypes.filter(heroesType => heroesType.name == catItem.type)
                })
            })
        })

        // 先删除初始数据
        await Hero.deleteMany();
        // 插入格式化好的数据

        await Hero.insertMany(resultData);

        res.send(await Hero.find())
    })

    // 英雄列表 供前端使用
    router.get('/heroes', async(req, res) => {
        // 1.先查出英雄分类
        let heroParent = await Category.findOne({
            name: "英雄分类"
        });

        // 2.使用聚合查询查出所属分类下的具体英雄列表
        let resultData = await Category.aggregate([{
                $match: {
                    // 属于英雄的分类
                    parent: heroParent._id
                },
            },
            {
                $lookup: {
                    //联表查询 英雄表
                    from: "heroes",
                    localField: "_id",
                    foreignField: "categories",
                    as: "heroList",
                },
            },
        ])

        // 3.添加热门分类
        // 3.1获取英雄子分类的所属id
        let heroesId = resultData.map(heroes => heroes._id);

        let hotHeroes = await Hero.find().where({
            categories: {
                $in: heroesId
            }
        }).limit(10);

        resultData.unshift({
            name: "热门",
            heroList: hotHeroes
        })

        res.send(resultData)
    })

    //英雄详情
    router.get("/hero/:id", async(req, res) => {
        let result = await Hero.findById(req.params.id);
        res.send(result)
    })

    app.use("/web/api", router);
};