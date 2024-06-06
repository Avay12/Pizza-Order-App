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
  cart: [],
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

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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

export const getCart = (state: { cart: init }) => state.cart.cart;

export const getTotalCartQuantity = (state: { cart: init }) =>
  state.cart.cart.reduce((sum: number, item: Item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state: { cart: init }) =>
  state.cart.cart.reduce((sum: number, item: Item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: { cart: init }) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
