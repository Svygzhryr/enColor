import React from 'react'
import { useGetPostsQuery } from '../../redux/newsSlice'
import { Loader } from '../../components/loader'
import { IArticle } from '../../types/api'
import { NewsHeader, NewsInfo, NewsItem, NewsWrapper } from './style'
import { newsMock } from '../../utils/newsMock'

export const News = () => {
  // const { data, isLoading, isError } = useGetPostsQuery()
  // console.log(data)
  const isLoading = false
  const data = newsMock

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
                  <NewsInfo>
                    <NewsHeader>
                      <h2>{article.title}</h2>
                      <h3>{article.source.name}</h3>
                    </NewsHeader>
                    <p>{article.description}</p>
                    <p>{article.publishedAt.substring(0, 10)}</p>
                  </NewsInfo>
                  {/* <img src={article.urlToImage}></img> */}
                </NewsItem>
              )
            })}
          </NewsWrapper>
        )
      )}
    </>
  )
}
