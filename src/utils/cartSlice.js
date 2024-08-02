import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemCounts: {},
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      const itemId = action.payload.card.info.id;
      state.itemCounts[itemId] = (state.itemCounts[itemId] || 0) + 1;
    },
    removeItems: (state, action) => {
      //   const indexToRemove = action.payload;
      //   state.items.splice(indexToRemove, 1);
      const itemId = action.payload.card.info.id;
      const index = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        state.itemCounts[itemId] = (state.itemCounts[itemId] || 0) - 1;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
