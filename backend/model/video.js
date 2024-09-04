const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    content: { type: String, required: true },
    author: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    videoUrl: { type: String, required: true },
    duration: { type: Number },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    tags: [String]
});

exports.video = mongoose.model('video', videoSchema);
