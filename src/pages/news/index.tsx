import { Loader } from '../../components/loader'
import {
  NewsContent,
  NewsHeader,
  NewsInfo,
  NewsItem,
  NewsWrapper,
} from './style'
import imageFallback from '../../assets/no-image.png'
import { newsMock } from '../../utils/newsMock'

export const News = () => {
  // const { data, isLoading, isError } = useGetPostsQuery()
  // can't use this api because of paid plans for hosting other than localhost
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
                  key={article.publishedAt + article.urlToImage}
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
                    <img src={article.urlToImage || imageFallback}></img>
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
