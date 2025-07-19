const express = require('express');
const cors = require('cors');
const path = require("path");
const competitionsRoutes = require("./routes/competitionsRoutes");
const standingsRoutes = require("./routes/standingsRoutes");
const matchScheduleRoutes = require("./routes/matchScheduleRoutes");
const topRunScorersRoutes = require("./routes/topRunScorersRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/competitions", competitionsRoutes);
app.use("/api/standings", standingsRoutes);
app.use("/api/match-schedule", matchScheduleRoutes);
app.use("/api/top-run-scorers", topRunScorersRoutes);

// Serve static files from the React build directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../build")));

    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;