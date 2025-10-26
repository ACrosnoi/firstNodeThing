// app.js

const express = require("express");
const app = express();
const path = require("path");

// Serve all files in the "public" folder
app.use(express.static("public"));

// Define route for /about (to serve about.html manually)
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});