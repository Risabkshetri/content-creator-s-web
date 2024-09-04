const model = require('../model/users');
const User = model.user;

// Create
exports.createUser = async (req, res) => {
  try {
    let result;
    if (Array.isArray(req.body)) {
      result = await User.insertMany(req.body);
    } else {
      const user = new User(req.body);
      result = await user.save();
    }

    res.status(201).json(result);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: "Duplicate key error. User with this username or email already exists." });
    }
    console.error("Error in createUser:", err);
    res.status(500).json({ error: "An error occurred while creating user(s)" });
  }
};

// Read all
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error in getAllUsers:", err);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
};

// Read one
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error in getUser:", err);
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
};

// Update (Replace)
exports.replaceUser = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findOneAndReplace({_id: id}, req.body, {new: true});
    if (!doc) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error in replaceUser:", err);
    res.status(400).json({ error: "An error occurred while replacing the user" });
  }
};

// Update (Partial)
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await User.findOneAndUpdate({_id: id}, req.body, {new: true});
    if (!doc) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(doc);
  } catch (err) {
    console.error("Error in updateUser:", err);
    res.status(400).json({ error: "An error occurred while updating the user" });
  }
};

// Delete
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(deletedUser);
  } catch (err) {
    console.error("Error in deleteUser:", err);
    res.status(500).json({ error: "An error occurred while deleting the user" });
  }
};
