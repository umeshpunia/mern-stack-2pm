const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/user.model");
const multer = require("multer");
const router = express.Router();

// file uploading
const imgPath = "./assets/images/users";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imgPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
    console.log(file);
  },
});

const upload = multer({ storage }).single("picture");

// file uploading ends

router.get("/", (req, res) => {
  res.send("Hello From Users");
});

// insert user
router.post("/register", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
    }

    console.log("file", req.file);
    // data

    const { email, password } = req.body;
    const picture = req.file.filename;

    if (!email || !password)
      return res.status(400).json({ msg: "Please Fill FIelds" });

    // hash pass
    bcrypt.hash(password, 12, (err, hashPass) => {
      if (err) return res.status(500).json({ msg: err.message });
      if (!hashPass) return res.status(400).json({ msg: "Please Try Again" });

      // store details into db

      let insUser = new UserSchema({ email, password: hashPass, picture });

      insUser.save((err, data) => {
        if (err) return res.status(501).json({ msg: err.message });
        if (!data) return res.status(502).json({ msg: "Please Try Again1" });

        res.status(200).json({ msg: data });
      });
    });

    // Everything went fine.
  });
});

// get all users
router.get("/all", (req, res) => {
  UserSchema.find({}, (err, data) => {
    if (err) return res.status(501).json({ msg: err.message });
    if (!data) return res.status(502).json({ msg: "Please Try Again1" });

    res.status(200).json({ msg: data });
  });
});

// get single user
router.get("/:_id", (req, res) => {
  const { _id } = req.params;

  UserSchema.findOne({ _id }, (err, data) => {
    if (err) return res.status(501).json({ msg: err.message });
    if (!data) return res.status(404).json({ msg: "Not Found" });

    res.status(200).json({ msg: data });
  });
});

// delete single user
router.delete("/:_id", (req, res) => {
  const { _id } = req.params;

  UserSchema.findByIdAndDelete({ _id }, (err, data) => {
    if (err) return res.status(501).json({ msg: err.message });
    if (!data) return res.status(404).json({ msg: "Not Found" });

    res.status(200).json({ msg: "Deleted Successfully" });
  });
});
//  update user
router.put("/:_id", (req, res) => {
  const { _id } = req.params;

  const { email } = req.body;

  if (!email) return res.status(400).json({ msg: "Please Fill Value" });

  UserSchema.findByIdAndUpdate({ _id }, { email }, (err, data) => {
    if (err) return res.status(501).json({ msg: err.message });
    if (!data) return res.status(404).json({ msg: "Not Found" });

    res.status(200).json({ msg: "Updated Successfully" });
  });
});

// login user
router.post("/login", (req, res) => {
  // 123
  // jkfkdfjksdfjksdfjksdjk

  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Please Fill Value" });

  // matching user exists or not in database
  UserSchema.findOne({ email }, (err, data) => {
    if (err) return res.status(501).json({ msg: err.message });
    if (!data) return res.status(404).json({ msg: "Not Found" });

    // match db password with our plain pass
    let dbPass = data.password;

    bcrypt.compare(password, dbPass, (err, valid) => {
      if (err) return res.status(502).json({ msg: err.message });
      if (!valid) return res.status(400).json({ msg: "Not Found" });
      return res.status(200).json({ msg: "Login Success" });
    });
  });
});

// update password
router.post("/change-password", (req, res) => {
  const { email, op, np } = req.body;

  // find user by email
  UserSchema.findOne({ email }, (err, data) => {
    if (err) return res.status(504).json({ msg: err.message });
    if (!data) return res.status(404).json({ msg: "Not Found" });

    // user check old password
    let dbPass = data.password;
    let _id = data._id;

    bcrypt.compare(op, dbPass, (err, valid) => {
      if (err) return res.status(502).json({ msg: err.message });
      if (!valid) return res.status(400).json({ msg: "Not Found" });

      // hash password
      bcrypt.hash(np, 12, (err, hashPass) => {
        if (err) return res.status(500).json({ msg: err.message });
        if (!hashPass) return res.status(400).json({ msg: "Please Try Again" });
        // update password
        UserSchema.findByIdAndUpdate(
          { _id },
          { password: hashPass },
          (err, data) => {
            if (err) return res.status(503).json({ msg: err.message });
            if (!data) return res.status(404).json({ msg: "Not Found" });
            res.status(200).json({ msg: "password updated successfully" });
          }
        );
      });
    });
  });
});

module.exports = router;
