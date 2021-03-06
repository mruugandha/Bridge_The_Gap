const path = require("path");
const fs = require("fs");

//passsing directoryPath and callback function
exports.submissions = async (req, res, next) => {
  fs.readdir("./uploads/", function(err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    console.log("Hello");
    //listing all files using forEach
    return res.render("submissions", { files });
  });
};
