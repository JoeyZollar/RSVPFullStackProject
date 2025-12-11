import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Create new event
// POST /api/events
router.post("/", async (req, res) => {
  try {
    // Create new event from request body
    const newTask = new Event(req.body);

    // Save to database
    const savedEvent = await newTask.save();

    // Send back the saved event
    res.status(201).json(savedEvent);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
});

// Get all events
// GET /api/events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
})

// Get event by id
// GET /api/events/:id
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found.",
      });
    }
    res.json(event);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
})

// Update event by id
// PUT /api/events/:id
router.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id, // Which event to update
      req.body, // New data
      {
        new: true, // Return updated version
        runValidators: true, // Check schema rules
      }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found.",
      });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete event by id
// DELETE /api/events/:id
router.delete("/:id", async (req, res) => {
   try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id,);

    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found.",
      });
    }

    res.json({
      message: "Event deleted successfully.",
      Event: deletedEvent,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;