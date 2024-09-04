const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {type: String, required: true, unique: true} ,
    description: String,
    content: {type: String, required:true, default:"content has not loaded due to server issue!"},
    author: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [ String ]
  });
  
exports.blog = mongoose.model('blog', blogSchema);
