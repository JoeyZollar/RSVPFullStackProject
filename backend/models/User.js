import mongoose from "mongoose";

// User schema
const userSchema = new mongoose.Schema({
 username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }]
});

export default mongoose.model("User", userSchema);