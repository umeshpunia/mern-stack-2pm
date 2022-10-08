const router = require("express").Router();
const multer = require("multer");
const CatSchema = require("../models/category.model");

// file uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/images/categories");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
    console.log(file);
  },
});

const upload = multer({ storage: storage }).single("picture");

//   file uploading

// add category
router.post("/add", (req, res) => {
  upload(req, res, function (err) {
    // console.log(req);

    if (err) {
      return console.log(err);
    }

    const { name, description } = req.body;
    const picture = req.file.filename;

    let insCat = new CatSchema({ name, description, picture });

    insCat.save((err, data) => {
      if (err) return res.json({ msg: err.message });
      if (!data) return res.json({ msg: "Please try again" });
      res.json({ msg: "Category Added SUccessfully" });
    });

    // Everything went fine.
  });
});

module.exports = router;
