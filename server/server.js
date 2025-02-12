require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/ecoactions", require("./routes/ecoActions"));
app.use("/api/initiatives", require("./routes/initiatives"));
app.use("/api/challenges", require("./routes/challenges"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
