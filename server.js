const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {

    let {
        pathname
    } = url.parse(req.url);
    fs.stat(`server${pathname}`, (error, stat) => {
        // 获取文件改动的时间 两种获取的时间格式相同
        // console.log("时间:", stat.mtime.toGMTString());
        //  console.log("时间:", stat.mtime.toUTCString());
        if (error) {
            res.writeHeader(404);
            res.write("404 没有找到")
            res.end()
        } else {
            // console.log(req.headers['if-modified-since'])
            if (req.headers["if-modified-since"]) {
                let client_time = Math.floor(new Date(req.headers['if-modified-since']).getTime() / 1000);
                let server_time = Math.floor(new Date(stat.mtime).getTime() / 1000);
                console.log(client_time)
                console.log(server_time)

                if (server_time > client_time) {
                    //这种条件说明有新的文件产生需要向客户端输出新的文件
                    sendFile()
                } else {
                    // 这种条件命中缓存 直接返回304
                    res.writeHead(304)
                    res.write("not modified")
                    res.end()
                }
            } else {
                sendFile()
            }

            function sendFile() {
                let rs = fs.createReadStream(`server${pathname}`);
                res.setHeader('Last-Modified', stat.mtime.toUTCString())
                rs.pipe(res)

                rs.on("error", (error) => {
                    console.log("传输出错")
                })
                rs.on('end', () => {
                    console.log('传输结束，')
                })
            }
        }
    })


})

server.listen(8189, () => {
    console.log("监听端口：8189")
})