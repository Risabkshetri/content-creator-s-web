const model = require('../model/video');
const Video = model.video;

// Create
exports.createVideo = async (req, res) => {
  try {
    let result;
    if (Array.isArray(req.body)) {
      result = await Video.insertMany(req.body);
    } else {
      const video = new Video(req.body);
      result = await video.save();
    }

    res.status(201).json(result);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: "Duplicate key error. Video with this title already exists." });
    }
    console.error("Error in createVideo:", err);
    res.status(500).json({ error: "An error occurred while creating video(s)" });
  }
};

// Read all
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    console.error("Error in getAllVideos:", err);
    res.status(500).json({ error: "An error occurred while fetching videos" });
  }
};

// Read one
exports.getVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.json(video);
  } catch (err) {
    console.error("Error in getVideo:", err);
    res.status(500).json({ error: "An error occurred while fetching the video" });
  }
};

// Update (Replace)
exports.replaceVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Video.findOneAndReplace({_id: id}, req.body, {new: true});
    if (!doc) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error in replaceVideo:", err);
    res.status(400).json({ error: "An error occurred while replacing the video" });
  }
};

// Update (Partial)
exports.updateVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Video.findOneAndUpdate({_id: id}, req.body, {new: true});
    if (!doc) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error in updateVideo:", err);
    res.status(400).json({ error: "An error occurred while updating the video" });
  }
};

// Delete
exports.deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.json(deletedVideo);
  } catch (err) {
    console.error("Error in deleteVideo:", err);
    res.status(500).json({ error: "An error occurred while deleting the video" });
  }
};
