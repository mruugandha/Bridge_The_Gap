const Course = require("../models/Course");

exports.addCourse = async (req, res, next) => {
  const title = req.body.title;
  const code = req.body.code;
  const course = new Course({
    title,
    code
  });
  course.save();
  const courses = await Course.find({});
  return res.render("courses", { courses });
};

exports.listCourses = async (req, res, next) => {
  const courses = await Course.find({});
  console.log(courses);
  return res.render("courses", { courses });
};
