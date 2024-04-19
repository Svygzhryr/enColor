import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INews } from '../types/api'

export const news = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&sortBy=date`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<INews, void>({
      query: () => '',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = news
