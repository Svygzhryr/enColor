import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IAllCoinsResponse,
  ICoin,
  IGetAllCoins,
  IGlobalData,
  IMarketData,
} from '../types/api'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query<IGlobalData, void>({
      query: () => `global/`,
      transformResponse: (response: IGlobalData[]) => {
        return {
          ...response[0],
          mcap_ath: null,
          volume_ath: null,
        } as IGlobalData
      },
    }),
    getAllCoins: builder.query<ICoin[], IGetAllCoins>({
      query: ({ start, limit }) => `tickers/?start=${start}&limit=${limit}`,
      transformResponse: (response: IAllCoinsResponse) => response.data,
    }),
    getAllMarkets: builder.query<IMarketData[], void>({
      query: () => `exchanges/`,
      transformResponse: (response: IMarketData[]) => {
        response = Object.values(response)
        const result = response.sort((a, b) => b.volume_usd - a.volume_usd)
        return result.splice(0, 10)
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGlobalStatsQuery,
  useGetAllCoinsQuery,
  useGetAllMarketsQuery,
} = api
