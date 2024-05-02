import { createSlice } from '@reduxjs/toolkit'

export interface CurrentPage {
  value: number
  theme: 'darkTheme' | 'lightTheme'
}

const initialState: CurrentPage = {
  value: 0,
  theme: 'darkTheme',
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
    switchTheme: (state) => {
      state.theme === 'darkTheme'
        ? (state.theme = 'lightTheme')
        : (state.theme = 'darkTheme')
    },
  },
})

// Action creators are generated for each case reducer function
export const { nextPage, prevPage, switchTheme } = basicSlice.actions

export default basicSlice.reducer
