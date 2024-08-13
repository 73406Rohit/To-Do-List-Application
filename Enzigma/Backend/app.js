const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userroutes');
var cors= require('cors');
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send('Running...');
});

app.use('/users', userRoutes);

// Function to connect to the database
async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      dbName: "usersDb",
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

// Connect to the database
connectDb();

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
