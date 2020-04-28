const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'category', required: false }
})

module.exports = mongoose.model('category', schema)