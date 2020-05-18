const mongoose = require('mongoose')
const schema = new mongoose.Schema({

    username: { type: String },
    password: {
        type: String,
        select: false,
        set(value) {
            //把密码进行加密
            return require('bcryptjs').hashSync(value, 10);
        }
    },

})

module.exports = mongoose.model('AdminUser', schema)