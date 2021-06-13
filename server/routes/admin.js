const express = require("express");
const router = express.Router();
const { Admin } = require("../models/admin");
const multer = require("multer");
const { auth } = require("../middleware/auth");
const async = require("async");

//=================================
//             admin
//=================================

router.post('/admin',(req,res)=>{
  
  const admin = new Admin(req.body);

  admin.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
        success: true
    });
});

});
router.post('/getrequest',auth,(req,res)=>{
  Admin.find()
  .exec((err,admins) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, admins,})
})
})





module.exports = router;
