export const TEAMS = {
  PBKS: {
    id: "15",
    code: "PBKS",
    name: "Punjab Kings",
    fullName: "Punjab Kings",
    logo: "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
  },
  RCB: {
    id: "19",
    code: "RCB",
    name: "RCB",
    fullName: "Royal Challengers Bengaluru",
    logo: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/NVAlbtIyB81740555172aFPMviEPyJ1710927747rcb.png",
  },
  GT: {
    id: "35",
    code: "GT",
    name: "GT",
    fullName: "Gujarat Titans",
    logo: "https://scores.iplt20.com/ipl/teamlogos/GT.png?v=1",
  },
  MI: {
    id: "17",
    code: "MI",
    name: "MI",
    fullName: "Mumbai Indians",
    logo: "https://scores.iplt20.com/ipl/teamlogos/MI.png",
  },
  DC: {
    id: "14",
    code: "DC",
    name: "DC",
    fullName: "Delhi Capitals",
    logo: "https://scores.iplt20.com/ipl/teamlogos/DC.png",
  },
  SRH: {
    id: "20",
    code: "SRH",
    name: "SRH",
    fullName: "Sunrisers Hyderabad",
    logo: "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
  },
  LSG: {
    id: "77",
    code: "LSG",
    name: "LSG",
    fullName: "Lucknow Super Giants",
    logo: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/gPLvfvSC1X1711457972LSG.png",
  },
  KKR: {
    id: "16",
    code: "KKR",
    name: "KKR",
    fullName: "Kolkata Knight Riders",
    logo: "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
  },
  RR: {
    id: "18",
    code: "RR",
    name: "RR",
    fullName: "Rajasthan Royals",
    logo: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/sSNjJEkBAx1742900310RR---New-Logo.png",
  },
  CSK: {
    id: "13",
    code: "CSK",
    name: "CSK",
    fullName: "Chennai Super Kings",
    logo: "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
  },
  DD: {
    id: "14",
    code: "DD",
    name: "DD",
    fullName: "Delhi Capitals",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/DD.png?v=2",
  },
  DEC: {
    id: "12",
    code: "DEC",
    name: "DEC",
    fullName: "Deccan Chargers",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/DEC.png?v=2",
  },
  KTK: {
    id: "12",
    code: "KTK",
    name: "KTK",
    fullName: "Kolkata Knight Riders",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/KTK.png?v=2",
  },
  PWI: {
    id: "12",
    code: "PWI",
    name: "PWI",
    fullName: "Pune Warriors India",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/PWI.png?v=2",
  },
  GL: {
    id: "12",
    code: "GL",
    name: "GL",
    fullName: "Gujarat Lions",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/GL.png?v=2",
  },
  RPS: {
    id: "12",
    code: "RPS",
    name: "RPS",
    fullName: "Rajasthan Royals",
    logo: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/teamlogos/RPS.png?v=2",
  },
};

// Helper functions
export const getTeamByCode = (code) => TEAMS[code] || null;

export const getTeamById = (id) => {
  return Object.values(TEAMS).find((team) => team.id === id) || null;
};

export const getTeamLogo = (code) => {
  return TEAMS[code]?.logo || "";
};

export const getTeamFullName = (code) => {
  return TEAMS[code]?.fullName || code;
};

// Team colors (you can use these for team-specific styling)
export const TEAM_COLORS = {
  PBKS: "#ED1B24",
  RCB: "#2B2A29",
  GT: "#1B2133",
  MI: "#004BA0",
  DC: "#0078BC",
  SRH: "#F7A721",
  LSG: "#A7D5F6",
  KKR: "#3A225D",
  RR: "#EA1A85",
  CSK: "#F9CD05",
};
