import { TEAMS, TEAM_COLORS } from '../utils/constants/teams';

export const teams = [
  {
    id: 1,
    name: 'Mumbai Indians',
    logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png',
    matches: 10,
    won: 7,
    lost: 3,
    points: 14,
    nrr: '+0.800'
  },
  {
    id: 2,
    name: 'Chennai Super Kings',
    logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png',
    matches: 10,
    won: 6,
    lost: 4,
    points: 12,
    nrr: '+0.450'
  },
  {
    id: 3,
    name: 'Royal Challengers Bangalore',
    logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png',
    matches: 10,
    won: 6,
    lost: 4,
    points: 12,
    nrr: '+0.235'
  },
  {
    id: 4,
    name: 'Delhi Capitals',
    logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png',
    matches: 10,
    won: 5,
    lost: 5,
    points: 10,
    nrr: '-0.120'
  }
];

export const matches = [
  {
    id: 1,
    team1: 'Mumbai Indians',
    team2: 'Chennai Super Kings',
    team1Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png',
    team2Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png',
    date: '2024-04-01',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'Live'
  },
  {
    id: 2,
    team1: 'Royal Challengers Bangalore',
    team2: 'Delhi Capitals',
    team1Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCB.png',
    team2Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DC.png',
    date: '2024-04-02',
    time: '19:30',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    status: 'Upcoming'
  }
];

export const orangeCapHolders = [
  {
    id: 1,
    name: 'Virat Kohli',
    team: 'Royal Challengers Bangalore',
    photo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png',
    runs: 500,
    matches: 10,
    average: 50.00,
    strikeRate: 145.20
  },
  {
    id: 2,
    name: 'Rohit Sharma',
    team: 'Mumbai Indians',
    photo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/145.png',
    runs: 450,
    matches: 10,
    average: 45.00,
    strikeRate: 140.50
  }
];

export const purpleCapHolders = [
  {
    id: 1,
    name: 'Jasprit Bumrah',
    team: 'Mumbai Indians',
    photo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1.png',
    wickets: 18,
    matches: 10,
    economy: 6.50,
    average: 15.20
  },
  {
    id: 2,
    name: 'Mohammed Shami',
    team: 'Gujarat Titans',
    photo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png',
    wickets: 16,
    matches: 10,
    economy: 7.20,
    average: 16.80
  }
];

export const liveMatchData = {
  team1: 'Mumbai Indians',
  team2: 'Chennai Super Kings',
  team1Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MI.png',
  team2Logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSK.png',
  team1Score: '180/4',
  team2Score: '120/3',
  team1Overs: '20.0',
  team2Overs: '15.2',
  venue: 'Wankhede Stadium, Mumbai',
  currentRunRate: '7.8',
  requiredRunRate: '12.5',
  target: '181'
};

export const pointsTableData = [
  {
    pos: 1,
    movement: 'none',
    team: { name: 'PBKS', logo: '🏏' },
    qualified: true,
    p: 14,
    w: 9,
    l: 4,
    nr: 1,
    nrr: 0.372,
    for: '2447/246.4',
    against: '2395/250.5',
    pts: 19,
    recentForm: ['W', 'L', 'W', 'W', 'W']
  },
  {
    pos: 2,
    movement: 'up',
    team: { name: 'RCB', logo: '🏏' },
    qualified: true,
    p: 14,
    w: 9,
    l: 4,
    nr: 1,
    nrr: 0.301,
    for: '2357/243.5',
    against: '2321/247.5',
    pts: 19,
    recentForm: ['W', 'L', 'N', 'W', 'W']
  },
  {
    pos: 3,
    movement: 'down',
    team: { name: 'GT', logo: '🏏' },
    qualified: true,
    p: 14,
    w: 9,
    l: 5,
    nr: 0,
    nrr: 0.254,
    for: '2684/271.5',
    against: '2639/274.2',
    pts: 18,
    recentForm: ['L', 'L', 'W', 'W', 'W']
  },
  {
    pos: 4,
    movement: 'none',
    team: { name: 'MI', logo: '🏏' },
    qualified: true,
    p: 14,
    w: 8,
    l: 6,
    nr: 0,
    nrr: 1.142,
    for: '2472/261.2',
    against: '2301/276.4',
    pts: 16,
    recentForm: ['L', 'W', 'L', 'W', 'W']
  },
  {
    pos: 5,
    movement: 'none',
    team: { name: 'DC', logo: '🏏' },
    qualified: false,
    p: 14,
    w: 7,
    l: 6,
    nr: 1,
    nrr: 0.011,
    for: '2354/250.4',
    against: '2409/256.5',
    pts: 15,
    recentForm: ['W', 'L', 'L', 'N', 'L']
  }
];

export const dummyLiveMatches = [
  {
    id: 1,
    tournament: 'TATA IPL 2026',
  
    status: 'live',
    venue: 'M.Chinnaswamy Stadium, Bengaluru',
    team1: {
      name: TEAMS.PBKS.code,
      fullName: TEAMS.PBKS.fullName,
      logo: TEAMS.PBKS.logo,
      score: '186/3',
      overs: '(15.2)',
      battingStats: 'Shikhar 86*(48), Livingstone 42*(21)',
      teamColor: TEAM_COLORS.PBKS,
      runRate: '12.13'
    },
    team2: {
      name: TEAMS.RCB.code,
      fullName: TEAMS.RCB.fullName,
      logo: TEAMS.RCB.logo,
      score: null,
      overs: null,
      teamColor: TEAM_COLORS.RCB
    },
    matchInfo: 'PBKS chose to bat',
    currentBatters: [
      { name: 'Shikhar Dhawan', runs: '86', balls: '48', fours: '9', sixes: '4' },
      { name: 'Liam Livingstone', runs: '42', balls: '21', fours: '2', sixes: '4' }
    ],
    currentBowler: { name: 'Siraj', overs: '3.2', maidens: '0', runs: '42', wickets: '1' },
    recentBalls: ['6', '1', '4', '2', 'W', '6'],
    requiredRunRate: '9.24',
    hasReport: true,
    hasVideos: true
  },
  {
    id: 2,
    tournament: 'TATA IPL 2026',
  
    status: 'upcoming',
    startTime: '2 days',
    venue: 'Eden Gardens, Kolkata',
    team1: {
      name: TEAMS.KKR.code,
      fullName: TEAMS.KKR.fullName,
      logo: TEAMS.KKR.logo,
      score: null,
      overs: null,
      teamColor: TEAM_COLORS.KKR
    },
    team2: {
      name: TEAMS.MI.code,
      fullName: TEAMS.MI.fullName,
      logo: TEAMS.MI.logo,
      score: null,
      overs: null,
      teamColor: TEAM_COLORS.MI
    },
    matchInfo: 'Match starts at 7:30 PM',
    hasReport: false,
    hasVideos: false
  },
  {
    id: 3,
    tournament: 'TATA IPL 2026',
  
    status: 'completed',
    venue: 'Wankhede Stadium, Mumbai',
    team1: {
      name: TEAMS.DC.code,
      fullName: TEAMS.DC.fullName,
      logo: TEAMS.DC.logo,
      score: '196/4',
      overs: '(20)',
      battingStats: 'Shaw 82(44), Pant 64(32)',
      teamColor: TEAM_COLORS.DC
    },
    team2: {
      name: TEAMS.GT.code,
      fullName: TEAMS.GT.fullName,
      logo: TEAMS.GT.logo,
      score: '164',
      overs: '(18.4)',
      battingStats: 'Gill 54(36), Miller 45(28)',
      teamColor: TEAM_COLORS.GT
    },
    matchInfo: 'Delhi Capitals won by 32 runs',
    hasReport: true,
    hasVideos: true
  },
  {
    id: 4,
    tournament: 'TATA IPL 2026',

    status: 'completed',
    venue: 'Rajiv Gandhi Stadium, Hyderabad',
    team1: {
      name: TEAMS.SRH.code,
      fullName: TEAMS.SRH.fullName,
      logo: TEAMS.SRH.logo,
      score: '189/5',
      overs: '(20)',
      battingStats: 'Markram 76(42), Klaasen 54(28)',
      teamColor: TEAM_COLORS.SRH
    },
    team2: {
      name: TEAMS.LSG.code,
      fullName: TEAMS.LSG.fullName,
      logo: TEAMS.LSG.logo,
      score: '62',
      overs: '(12.4)',
      battingStats: 'Rahul 32(24), Stoinis 18(14)',
      teamColor: TEAM_COLORS.LSG
    },
    matchInfo: 'Sunrisers Hyderabad won by 127 runs',
    hasReport: true,
    hasVideos: true
  },
  {
    id: 5,
    tournament: 'TATA IPL 2026',
   
    status: 'completed',
    venue: 'M.A. Chidambaram Stadium, Chennai',
    team1: {
      name: TEAMS.CSK.code,
      fullName: TEAMS.CSK.fullName,
      logo: TEAMS.CSK.logo,
      score: '212/3',
      overs: '(20)',
      battingStats: 'Gaikwad 108*(60), Conway 88*(52)',
      teamColor: TEAM_COLORS.CSK
    },
    team2: {
      name: TEAMS.RR.code,
      fullName: TEAMS.RR.fullName,
      logo: TEAMS.RR.logo,
      score: '186/8',
      overs: '(20)',
      battingStats: 'Samson 67(41), Buttler 45(30)',
      teamColor: TEAM_COLORS.RR
    },
    matchInfo: 'Chennai Super Kings won by 26 runs',
    hasReport: true,
    hasVideos: true
  },
  {
    id: 6,
    tournament: 'TATA IPL 2026',
  
    status: 'completed',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    team1: {
      name: TEAMS.GT.code,
      fullName: TEAMS.GT.fullName,
      logo: TEAMS.GT.logo,
      score: '198/4',
      overs: '(20)',
      battingStats: 'Gill 112*(63), Miller 42*(21)',
      teamColor: TEAM_COLORS.GT
    },
    team2: {
      name: TEAMS.MI.code,
      fullName: TEAMS.MI.fullName,
      logo: TEAMS.MI.logo,
      score: '156',
      overs: '(18.2)',
      battingStats: 'Rohit 43(29), Hardik 35(22)',
      teamColor: TEAM_COLORS.MI
    },
    matchInfo: 'Gujarat Titans won by 42 runs',
    hasReport: true,
    hasVideos: true
  },
  {
    id: 7,
    tournament: 'TATA IPL 2026',
    status: 'completed',
    venue: 'M.Chinnaswamy Stadium, Bengaluru',
    team1: {
      name: TEAMS.RCB.code,
      fullName: TEAMS.RCB.fullName,
      logo: TEAMS.RCB.logo,
      score: '223/2',
      overs: '(20)',
      battingStats: 'Kohli 122*(68), du Plessis 88*(43)',
      teamColor: TEAM_COLORS.RCB
    },
    team2: {
      name: TEAMS.PBKS.code,
      fullName: TEAMS.PBKS.fullName,
      logo: TEAMS.PBKS.logo,
      score: '183/8',
      overs: '(20)',
      battingStats: 'Livingstone 72(44), Dhawan 45(32)',
      teamColor: TEAM_COLORS.PBKS
    },
    matchInfo: 'Royal Challengers Bengaluru won by 40 runs',
    hasReport: true,
    hasVideos: true
  }
]; 