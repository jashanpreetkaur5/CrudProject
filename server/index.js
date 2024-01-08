/***
 * C0873872
 * Jashanpreet Kaur
 * ***/
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const format = require("date-fns");
const app = express();
const PORT = 3000;
const uri =
  "mongodb+srv://jashanpreetKaur:9Rr6dBKkdGs6QYAh@cluster0.zvyviwj.mongodb.net/Crud_database?retryWrites=true&w=majority";
const path = require("path");
const axios = require("axios");

//--------------------------------------

//----------Body Parser----------------------
app.use(cors()); // Use cors middleware to handle CORS headers
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "final-project")));
//---mongodb connection------------------------
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.info("Connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// Create user schema--------------------------------------------
const userSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  dob: Date,
  address1: String,
  address2: String,
  city: String,
  postalCode: String,
  country: String,
  phoneNumber: String,
  email: String,
  userNotes: String,
});

const User = mongoose.model("User", userSchema);
//---------------------------------------------------

//-----create Route----------
app.post("/api/create", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//-------Read Route--------------------------------
app.get("/api/read", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//------update Route----------------
app.put("/api/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    project;

    res.status(500).json({ error: error.message });
  }
});

app.get("/api/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Fetching a single user document by ID
    const userData = await User.findOne({ _id: id });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Formatting date of birth before rendering
    // const formattedUser = {
    //   ...userData.toObject(),
    //   dateOfBirth: format(userData.dateOfBirth, "yyyy-MM-dd"),
    // };
    //----------------------------------------------------
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--------------------Delete----------------
app.delete("/api/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // Serve React app build
// app.use(express.static(path.resolve(__dirname, "client")));

// // Handle React routing, return al
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.resolv
//e(__dirname, "client", "final-project", "index.html")
//   );
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//-------------End------------------------------------
