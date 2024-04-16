import { createSlice } from '@reduxjs/toolkit'

export interface CurrentPage {
  value: number
}

const initialState: CurrentPage = {
  value: 0,
}

export const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 1
    },
    prevPage: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { nextPage, prevPage } = basicSlice.actions

export default basicSlice.reducer
