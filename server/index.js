const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const config = require("./config/key");
const path = require('path')
// const {User} = require('./models/user')
// const { auth }= require('./middleware/auth')
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));

//middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use("/api/users", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/admin", require("./routes/admin"));

app.use("/uploads", express.static("uploads"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("mobilezone/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../mobilezone", "build", "index.html")
    );
  });
}

// app.get("/auth", auth, (req, res) => {
//   res.status(200).json({
//       _id: req.user._id,
//       isAdmin: req.user.role === 0 ? false : true,
//       isAuth: true,
//       email: req.user.email,
//       name: req.user.name,
//       lastname: req.user.lastname,
//       role: req.user.role,
//       image: req.user.image,
//   });
// });

// app.post('/resgister',(req,res)=>{

//   const user = new User(req.body);

//   user.save((err, doc) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).json({
//         success: true
//     });
// });

// });

// app.post("/login", (req, res) => {
//   User.findOne({ email: req.body.email }, (err, user) => {
//       if (!user)
//           return res.json({
//               loginSuccess: false,
//               message: "Auth failed, email not found"
//           });

//       user.comparePassword(req.body.password, (err, isMatch) => {
//           if (!isMatch)
//               return res.json({ loginSuccess: false, message: "Wrong password" });

//           user.generateToken((err, user) => {
//               if (err) return res.status(400).send(err);
//               res.cookie("w_authExp", user.tokenExp);
//               res
//                   .cookie("w_auth", user.token)
//                   .status(200)
//                   .json({
//                       loginSuccess: true, userId: user._id
//                   });
//           });
//       });
//   });
// });

// app.get("/logout", auth, (req, res) => {
//   User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).send({
//           success: true
//       });
//   });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
