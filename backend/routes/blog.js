const express = require('express');
const blogController = require('../controller/blog'); // Import the blog controller
const router = express.Router();

router
.post('/', blogController.createBlog) // This is where the error is pointing
.get('/', blogController.getAllBlogs)
.get('/:id', blogController.getBlog)
.put('/:id', blogController.replaceBlog)
.patch('/:id', blogController.updateBlog)
.delete('/:id', blogController.deleteBlog);

exports.router = router;
