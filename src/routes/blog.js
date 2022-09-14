const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get("/blog", async (req, res) => {
    let page = req.query.page;
    let search = req.query.search;
    if (page && search) {
        const data = await Blog.find({ "topic": search }).limit(5);
        res.status(200).json({
            status: "success",
            result: data
        })
    }
    else{
        const data = await Blog.find().limit(5);
        res.status(200).json({
            status: "success",
            result: data
        })
    }

})


module.exports = router;