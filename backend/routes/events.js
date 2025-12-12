import express from "express";
import Event from "../models/Event.js";
import User from "../models/User.js";

const router = express.Router();

// Create new event
// POST /api/events
router.post("/", async (req, res) => {
  try {
    const { userId, title, date, time, place, description } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'No user ID.'});
    }

    console.log('user Id for creating event:',userId);

    // Create new event from request body
    const newEvent = new Event({
      title,
      date,
      time,
      place,
      description,
      rsvps: []
    });

    // Save to database
    const savedEvent = await newEvent.save();

    await User.findByIdAndUpdate(userId, {
      $addToSet: { events: savedEvent._id }
    });

    // Send back the saved event
    res.status(201).json(savedEvent);
  } catch (error) {
    // Handle validation errors
    res.status(400).json({ message: error.message });
  }
});

// RSVP for Event
// Put /api/events/:id/rsvp
router.put("/:id/rsvp", async (req, res) => {
  try {
    const { userId } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { rsvps: userId }}, // $addToSet adds the user only once and prevents duplicates
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found.",
      });
    }

    res.json(updatedEvent);
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
});

// UnRSVP for Event
// Put /api/events/:id/unrsvp
router.put("/:id/unrsvp", async (req, res) => {
  try {
    const { userId } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $pull: { rsvps: userId }}, // remove the user from the array
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found.",
      });
    }

    res.json(updatedEvent);
  } catch (error) {
    // Handle errors
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