import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FoodState = {
  items: FoodOption[]
  isOpen: boolean
}

const initialState: FoodState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FoodOption>) => {
      const foodItem = state.items.find((item) => item.id === action.payload.id)
      if (!foodItem) {
        state.items.push(action.payload)
      } else {
        alert(
          'Este prato ja foi adicionado ao carrinho,\nque tal experimentar outro?'
        )
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
