const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const authRoutes = require("./routes/auth");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);

// Protected route example
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Listening to port 5000");
  });
});
