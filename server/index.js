const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const exp = require("constants");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/ecom");

app.get("/", (req, resp) => {
  resp.send("express is runnign");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, resp) => {
  resp.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const products = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: function () {
      return new Date().toLocaleDateString();
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, resp) => {
  let allProducts = await products.find({});
  let id = 0;
  if (allProducts.length > 0) {
    let lastProductArray = allProducts.slice(-1);
    let lastNo = lastProductArray[0];
    id = lastNo.id + 1;
    console.log(lastNo.id, id);
  }
  const product = new products({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  resp.send("stored success");
});

app.post("/removeproduct", async (req, resp) => {
  await products.deleteOne({ id: req.body.id });
  console.log("removed with id:", req.body.id);
  resp.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/allproducts", async (req, resp) => {
  let allProducts = await products.find({});
  console.log("products fetched");
  resp.send(allProducts);
});
//admin panel APIs end

//user registration and login start APIs:
const Users = mongoose.model("users", {
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: function () {
      return new Date().toLocaleDateString();
    },
  },
});

app.post("/signup", async (req, resp) => {
  //resp.send("working")
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return resp
      .status(400)
      .json({ success: false, error: "mail already exists!!try loggin in" });
  }
  let cart = {};
  for (let i = 0; i < 30; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  resp.json({ success: true, token: token });
  console.log("user registered with name:" + req.body.username);
});

app.post("/login", async (req, resp) => {
  //resp.send("working")
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      resp.json({ success: true, token, remark: "login successful !!" });
    } else {
      resp.json({ success: false, error: "wrong password" });
    }
  } else {
    resp.json({ success: false, error: "email is not registered!!" });
  }
});

app.post("/updatecart", async (req, resp) => {
  let user = await Users.findOne({ email: req.body.email });
  //resp.json({user});
  if (user) {
    let isupdate = await Users.updateOne(
      { email: req.body.email },
      { $set: { cartData: req.body.cartData } }
    );
      console.log(isupdate)
    resp.json({ success: true, remark: "item added to cart" });
  } else {
    resp.json({ success: false, error: "sign in first !" });
  }
});



app.listen(port, (error) => {
  if (!error) {
    console.log("server running on port 4000");
  } else {
    console.log("error:" + error);
  }
});
