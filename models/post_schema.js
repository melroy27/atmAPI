const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
    pillsData: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    questionData:
    {
        type: Map,
    },
    answer:
    {
        type: Map,
        default: null
    },
    rating: {
        resolved: {
            type: Number,
            default: 0,
        },
        partially: {
            type: Number,
            default: 0
        },
        notresolved: {
            type: Number,
            default: 0
        }
    }

})
module.exports = mongoose.model('posts', postSchema);
