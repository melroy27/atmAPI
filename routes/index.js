const express = require('express');
const Post = require('../models/post_schema');

const router = express.Router();

router.use(express.json({ limit: '20mb' }));
router.use(express.urlencoded({ extended: false }));


router.post("/api/post", (req, res, next) => {
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
        message: 'Post Added Successfully'
    });
});

router.get('/api/posts', async (req, res, next) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({
            message: "Post Fetched Successfully",
            posts: posts
        });
        console.log(posts);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
