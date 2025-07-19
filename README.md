# IPL T20 Cricket Application

A comprehensive cricket application built with React and Node.js that provides real-time cricket data, live scores, match schedules, player statistics, and team standings for IPL T20 tournaments.

## Features

### Core Functionality
- **Live Score Updates**: Real-time cricket match scores and live updates
- **Match Schedule**: Complete tournament schedule with match details
- **Points Table**: Team standings and points summary
- **Player Statistics**: Top run scorers and player performance metrics
- **Competition Filtering**: Filter data by season and competition type (Men's/Women's)


### Project Structure
```
iplt20/
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   └── data/              # Static data files
├── server/                # Node.js backend
│   ├── controllers/       # API controllers
│   ├── routes/           # Express routes
│   └── utils/            # Server utilities
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/skmainwal/iplt20_dashboard.git
   
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

#### Option 1: Run Both Frontend and Backend (Recommended)
```bash
npm run dev
```
This command runs both the React frontend and Node.js backend concurrently.

#### Option 2: Run Frontend Only
```bash
npm start
```
Runs only the React development server (requires backend to be running separately).

#### Option 3: Run Backend Only
```bash
npm run server
```
Runs only the Node.js backend server.

### Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Available Routes

- `/` - Redirects to points table
- `/points-table` - Team standings and points
- `/match-schedule` - Tournament match schedule
- `/top-run-scorers` - Player statistics and rankings


### API Endpoints
- `GET /api/competitions` - Get competition data
- `GET /api/standings` - Get team standings
- `GET /api/match-schedule` - Get match schedule
- `GET /api/top-run-scorers` - Get player statistics

=