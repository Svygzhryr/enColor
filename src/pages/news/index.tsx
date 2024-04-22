import React, { useDeferredValue, useId, useState } from 'react'
import { useGetPostsQuery } from '../../redux/newsSlice'
import { Loader } from '../../components/loader'
import { IArticle } from '../../types/api'
import {
  NewsContent,
  NewsHeader,
  NewsImg,
  NewsInfo,
  NewsItem,
  NewsWrapper,
} from './style'
import { newsMock } from '../../utils/newsMock'

export const News = () => {
  // const { data, isLoading, isError } = useGetPostsQuery()
  // console.log(data)
  const isLoading = false
  const data = newsMock
  const [count, setCount] = useState(0)
  const deferredCount = useDeferredValue(count)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <NewsWrapper>
            {data.articles.map((article) => {
              return (
                <NewsItem
                  target="_blank"
                  href={article.url}
                  key={article.title}
                >
                  <NewsHeader>
                    <h2>{article.title}</h2>
                    <h3>{article.source.name}</h3>
                  </NewsHeader>
                  <NewsInfo>
                    <NewsContent>
                      <p>{article.description}</p>
                      <p>{article.publishedAt.substring(0, 10)}</p>
                    </NewsContent>
                    <img src={article.urlToImage || undefined}></img>
                  </NewsInfo>
                </NewsItem>
              )
            })}
          </NewsWrapper>
        )
      )}
    </>
  )
}
