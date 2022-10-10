const router = require("express").Router();
const multer = require("multer");
const ProSchema = require("../models/product.model");

// file uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/images/products");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
    console.log(file);
  },
});

const upload = multer({ storage: storage }).single("picture");

//   file uploading

// add product
router.post("/add", (req, res) => {
  upload(req, res, function (err) {
    // console.log(req);

    if (err) {
      return console.log(err);
    }

    const { name, description,price,category } = req.body;
    const picture = req.file.filename;

    let inspro = new ProSchema({ name, description,price,category, picture });

    inspro.save((err, data) => {
      if (err) return res.json({ msg: err.message });
      if (!data) return res.json({ msg: "Please try again" });
      res.json({ msg: "Products Added SUccessfully" });
    });

    // Everything went fine.
  });
});

router.get("/all",(req,res)=>{
  ProSchema.find({},(err,data)=>{
    if(err) res.status(500).json({msg:err.message})
    if(!data) res.status(400).json({msg:"SOmething Wrong"})
    res.status(200).json({msg:data})
  })
})

router.delete("/delete/:_id",(req,res)=>{
  const {_id}=req.params
  ProSchema.findByIdAndRemove({_id},(err,data)=>{
    if(err) res.status(500).json({msg:err.message})
    if(!data) res.status(400).json({msg:"SOmething Wrong"})
    res.status(200).json({msg:data})
  })

})

module.exports = router;
