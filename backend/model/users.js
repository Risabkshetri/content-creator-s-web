const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    profilePicture: String,
    bio: String,
    favoriteBlogs: [{ type: Schema.Types.ObjectId, ref: 'blog' }],
    favoriteVideos: [{ type: Schema.Types.ObjectId, ref: 'video' }]
});

exports.user = mongoose.model('user', userSchema);
