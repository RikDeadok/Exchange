const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    series: {
        type: String,
        required: true
    },
    yearofissue: {
        type: String,
        required: true,
    },
    denomination: {
        type: String,
        required: true
    },
})

module.exports = model('Item', schema)