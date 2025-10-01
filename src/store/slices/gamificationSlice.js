import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 0,
  level: 1,
  badges: [],
  leaderboard: [],
  achievements: [],
  loading: false,
  error: null,
};

const gamificationSlice = createSlice({
  name: 'gamification',
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    addPoints: (state, action) => {
      state.points += action.payload;
      state.level = Math.floor(state.points / 100) + 1;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setBadges: (state, action) => {
      state.badges = action.payload;
    },
    addBadge: (state, action) => {
      state.badges.push(action.payload);
    },
    setLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    unlockAchievement: (state, action) => {
      const achievement = state.achievements.find(a => a.id === action.payload.id);
      if (achievement) {
        achievement.unlocked = true;
        achievement.unlockedAt = new Date().toISOString();
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPoints,
  addPoints,
  setLevel,
  setBadges,
  addBadge,
  setLeaderboard,
  setAchievements,
  unlockAchievement,
  setLoading,
  setError,
} = gamificationSlice.actions;

export default gamificationSlice.reducer;