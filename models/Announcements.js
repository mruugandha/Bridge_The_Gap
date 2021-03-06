const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    title: String,
    announcement: String
  },
  { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
