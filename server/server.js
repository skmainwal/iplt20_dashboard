const express = require('express');
const cors = require('cors');
const competitionsRoutes = require('./routes/competitionsRoutes');
const standingsRoutes = require('./routes/standingsRoutes');
const matchScheduleRoutes = require('./routes/matchScheduleRoutes');
const topRunScorersRoutes = require('./routes/topRunScorersRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/competitions', competitionsRoutes);
app.use('/api/standings', standingsRoutes);
app.use('/api/match-schedule', matchScheduleRoutes);
app.use('/api/top-run-scorers', topRunScorersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 