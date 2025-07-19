// Search Input Constants
export const SEARCH_INPUT_SIZES = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large'
};

export const SEARCH_INPUT_VARIANTS = {
  DEFAULT: 'default',
  FILLED: 'filled',
  OUTLINED: 'outlined'
};

export const SEARCH_INPUT_SIZE_CLASSES = {
  [SEARCH_INPUT_SIZES.SMALL]: 'px-3 py-1.5 text-sm',
  [SEARCH_INPUT_SIZES.DEFAULT]: 'px-4 py-2',
  [SEARCH_INPUT_SIZES.LARGE]: 'px-5 py-2.5 text-lg'
};

export const SEARCH_INPUT_VARIANT_CLASSES = {
  [SEARCH_INPUT_VARIANTS.DEFAULT]: 'bg-white border border-gray-200',
  [SEARCH_INPUT_VARIANTS.FILLED]: 'bg-gray-100 border border-transparent',
  [SEARCH_INPUT_VARIANTS.OUTLINED]: 'bg-transparent border border-gray-300'
};

// Filter Options
export const SEASONS = [
  { id: '2024', name: 'SEASON 2024' },
  { id: '2023', name: 'SEASON 2023' },
  { id: '2022', name: 'SEASON 2022' }
];

export const TOURNAMENTS = [
  { id: 'orange_cap', name: 'Orange Cap' },
  { id: 'purple_cap', name: 'Purple Cap' }
];

export const IPL_TEAMS = [
  { id: 'all', name: 'All Teams' },
  { id: 'RCB', name: 'Royal Challengers Bengaluru' },
  { id: 'CSK', name: 'Chennai Super Kings' },
  { id: 'MI', name: 'Mumbai Indians' },
  { id: 'KKR', name: 'Kolkata Knight Riders' },
  { id: 'DC', name: 'Delhi Capitals' },
  { id: 'PBKS', name: 'Punjab Kings' },
  { id: 'SRH', name: 'Sunrisers Hyderabad' },
  { id: 'RR', name: 'Rajasthan Royals' },
  { id: 'GT', name: 'Gujarat Titans' },
  { id: 'LSG', name: 'Lucknow Super Giants' }
];

export const DEFAULT_PLAYERS = [
  { id: 'all', name: 'All Players' }
];

// Default Filter Values
export const DEFAULT_FILTER_VALUES = {
  SEASON: '2024',
  TOURNAMENT: 'orange_cap',
  TEAM: 'all',
  PLAYER: 'all'
};

// Placeholder Text
export const PLACEHOLDER_TEXT = {
  SEASON: 'SEASON 2024',
  TOURNAMENT: 'Orange Cap',
  TEAM: 'All Teams',
  PLAYER: 'All Players',
  SEARCH: 'Search By Player Name'
}; 