import mongoose from "mongoose";

// Event schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Number, 
    required: true
  },
  time: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rsvps: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("Event", eventSchema);