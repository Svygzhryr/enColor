import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGlobalData } from '../types/api'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query<IGlobalData, void>({
      query: () => `global/`,
      transformResponse: (response: IGlobalData[]) =>
        response[0] as IGlobalData,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGlobalStatsQuery } = api
