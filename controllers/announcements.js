const Announcement = require("../models/Announcements");

exports.createAnnouncement = async (req, res, next) => {
  const title = req.body.title;
  const announcement = req.body.announcement;
  const ann = new Announcement({
    title,
    announcement
  });
  ann.save();
  const announcements = await Announcement.find({});
  console.log(announcements);
  return res.render("viewAnnouncement", { announcements });
};

exports.listAnnouncements = async (req, res, next) => {
  const announcements = await Announcement.find({});
  console.log(announcements);
  return res.render("viewAnnouncement", { announcements });
};
