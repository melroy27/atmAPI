const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    questionId: {
        type: String
    },
    postedOn: {
        type: Date,
        rdefault: Date.now
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
    answer: [
        {
            type: Map,
            of: mongoose.SchemaTypes.Mixed,
        }
    ]

})
module.exports = mongoose.model('posts', postSchema);
