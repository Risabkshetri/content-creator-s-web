const express = require('express');
const videoController = require('../controller/video');
const router = express.Router();

router
  .post('/', videoController.createVideo)
  .get('/', videoController.getAllVideos)
  .get('/:id', videoController.getVideo)
  .put('/:id', videoController.replaceVideo)
  .patch('/:id', videoController.updateVideo)
  .delete('/:id', videoController.deleteVideo);

exports.router = router;
