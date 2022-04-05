const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,   
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})

module.exports = mongoose.model('Order', OrderSchema)