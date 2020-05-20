const authMiddleware = require('../middleware/auth')
module.exports = (app) => {
    const path = require('path')
        // 上传图片
    const multer = require('multer');
    let upload = multer({
        dest: path.join(__dirname, '../upload')

    })
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async(req, res) => {

        // const url = `${req.host}/upload/${req.file.filename}${path.extname(req.file.originalname)}`
        console.log(req.file)
        const url = `http://${req.host}/upload/${req.file.filename}`
        req.file.url = url
        res.send(req.file)
    })
}