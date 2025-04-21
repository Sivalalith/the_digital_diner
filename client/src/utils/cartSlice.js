import { createSlice } from "@reduxjs/toolkit";

// creating a 'slice' of our store
const cartSlice = createSlice({
  // name of our slice
  name: "cart",

  // initial state of out slice -> no items present (default)
  initialState: {
    items: [],
  },

  // reducers ("value" ex: (state, action)=>{...}) associated to this slice for a particular action ("key" ex: addItem)
  reducers: {
    addItem: (state, action) => {
      if (action.payload.count === 1) {
        state.items.push(action.payload);
      } else {
        state.items.find((item) => item.name === action.payload.name)["count"] =
          action.payload.count;
      }
    },
    removeItem: (state, action) => {
      if (action.payload.count === 0) {
        let index = state.items.indexOf(
          state.items.find((item) => item.name === action.payload.name)
        );
        state.items.splice(index, 1);
      } else {
        state.items.find((item) => item.name === action.payload.name)["count"] =
          action.payload.count;
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

//console.log("cart slice obj: ", cartSlice);

const { actions, reducer } = cartSlice;
export const { addItem, removeItem, clearCart } = actions;
export default reducer;
