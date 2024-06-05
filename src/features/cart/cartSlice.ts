import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

interface init {
  cart: Item[];
}

const initialState: init = {
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<Item>) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      //payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as Item;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      //payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as Item;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItems,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
