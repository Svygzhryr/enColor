import { RootState } from './store'

export const selectPage = (state: RootState) => state.basicReducer.value

export const selectTheme = (state: RootState) => state.basicReducer.theme
