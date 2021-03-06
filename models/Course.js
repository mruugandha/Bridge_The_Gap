const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    code: String
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
