import { configureStore } from '@reduxjs/toolkit'
import basicReducer from './basicSlice'
import { api } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { news } from './newsSlice'

export const store = configureStore({
  reducer: {
    basicReducer,
    [api.reducerPath]: api.reducer,
    [news.reducerPath]: news.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, news.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
