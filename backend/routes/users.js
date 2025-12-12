import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Login user
// POST /api/users/login
router.post("/login", async (req, res) => {
  try {
    const {username, password} = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({message: "User not found"});

    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', user });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new user
// POST /api/users
router.post("/", async (req, res) => {
  try {
    // Create new user from request body
    const newTask = new User(req.body);

    // Save to database
    const savedUser = await newTask.save();

    // Send back the saved user
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
});

// Get all users
// GET /api/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
})

// Get user by id
// GET /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    res.json(user);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
})

// Update user by id
// PUT /api/users/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // Which task to update
      req.body, // New data
      {
        new: true, // Return updated version
        runValidators: true, // Check schema rules
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete user by id
// DELETE /api/tasks/:id
router.delete("/:id", async (req, res) => {
   try {
    const deletedUser = await User.findByIdAndDelete(req.params.id,);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    res.json({
      message: "User deleted successfully.",
      User: deletedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;