import { RootState } from './store'

export const selectPage = (state: RootState) => state.basicReducer.value
