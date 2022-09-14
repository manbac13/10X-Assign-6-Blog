const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

//connect to DB
mongoose.connect("mongodb://localhost/Blog",{ useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to DB')
})

/* app.get( "/blog?page=&search=", async(req,res)=>{
    let page = req.query.page;
    let search = req.query.search;
    const data = await Blog.find({"topic" : search});
    console.log(data)
    res.status(200).json({
        status : "success",
        result : data
    })
}) */

app.post("/blog", async(req,res)=>{
    const indiblog = await Blog.create({
        topic : req.body.topic,
        description : req.body.description,
        posted_by : req.body.posted_by
    })
    res.json({
        status : "Success",
        result : indiblog
    })
})

app.put("/blog/:id", async(req,res)=>{
    const data = await Blog.updateOne({_id:req.params.id}, {userVerified:true})
    res.json({
        status:"Success",
        result: data
    })
})

app.delete("/blog/:id", async(req,res) =>{
    const data = await Blog.deleteOne({_id:req.params.id})
    res.json({
        status:"Success",
        result: data
    })

})

app.listen(3000, () => console.log('Server running......'));

