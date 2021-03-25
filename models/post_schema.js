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
        type: Object,
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
    }

})
module.exports = mongoose.model('posts', postSchema);
