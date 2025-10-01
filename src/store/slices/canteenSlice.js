import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  orders: [],
  menu: [],
  activeOrder: null,
  loading: false,
  error: null,
};

const canteenSlice = createSlice({
  name: 'canteen',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },
    setActiveOrder: (state, action) => {
      state.activeOrder = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const order = state.orders.find(o => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
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
  setMenu,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setOrders,
  addOrder,
  setActiveOrder,
  updateOrderStatus,
  setLoading,
  setError,
} = canteenSlice.actions;

export default canteenSlice.reducer;