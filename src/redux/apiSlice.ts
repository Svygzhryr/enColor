import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IAllCoinsResponse,
  ICoin,
  IGetAllCoins,
  IGlobalData,
} from '../types/api'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query<IGlobalData, void>({
      query: () => `global/`,
      transformResponse: (response: IGlobalData[]) =>
        response[0] as IGlobalData,
    }),
    getAllCoins: builder.query<ICoin[], IGetAllCoins>({
      query: ({ start, limit }) => `tickers/?start=${start}&limit=${limit}`,
      transformResponse: (response: IAllCoinsResponse) => response.data,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGlobalStatsQuery, useGetAllCoinsQuery } = api
