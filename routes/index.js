const express = require('express');
const Post = require('../models/post_schema');

const router = express.Router();

router.use(express.json({ limit: '20mb' }));
router.use(express.urlencoded({ extended: false }));


router.post("/api/post", (req, res, next) => {
    try {
        const post = new Post({
            userId: req.body.userId,
            postedOn: Date.now(),
            questionId: 'ques02',
            pillsData: req.body.pillsData,
            title: req.body.title,
            questionData: req.body.questionData,
            answer: null
        });
        post.save();
        console.log(post);
        res.status(201).json({
            status: true,
            message: 'Post Added Successfully'
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: 'Post UnSuccessful'
        });
        console.log(e);
    }

});

router.get('/api/posts', async (req, res, next) => {
    try {
        const posts = await Post.find({}).sort({ 'postedOn': 'descending' })
        res.status(200).json({
            status: true,
            message: "Post Fetched Successfully",
            posts: posts
        });
        console.log(posts);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
