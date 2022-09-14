const { boolean } = require('joi');
const mongooose = require('mongoose');

const opts = {
    timestamps: {
      createdAt: 'created_at',
    }
};

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic : {type : String, required:true},
    description : {type : String, required:true},
    posted_by : {type : String, required:true},
    userVerified : Boolean
}, opts)

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;