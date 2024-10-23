import { useGetAllCoinsQuery } from '../../redux/apiSlice'
import {
  ButtonNext,
  ButtonPrev,
  CoinChangeDay,
  CoinName,
  CoinNumber,
  CoinPrice,
  CoinSymbol,
  CoinWrapper,
  Container,
  RatesWrapper,
} from './style'
import { Loader } from '../../components/loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage } from '../../redux/selectors'
import { nextPage, prevPage } from '../../redux/basicSlice'

export const Rates = () => {
  const currentPage = useSelector(selectPage)
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetAllCoinsQuery({
    start: currentPage * 10,
    limit: 10,
  })

  const handlePrev = () => {
    dispatch(prevPage())
  }

  const handleNext = () => {
    dispatch(nextPage())
  }

  return (
    <RatesWrapper>
      {!isLoading ? (
        <Loader />
      ) : (
        data && (
          <Container>
            <ul>
              {data.map((coin) => (
                <CoinWrapper key={coin.name}>
                  <CoinNumber>{coin.rank}</CoinNumber>
                  <CoinSymbol>{coin.symbol}</CoinSymbol>
                  <CoinName>{coin.name}</CoinName>
                  <CoinPrice>{coin.price_usd} $</CoinPrice>
                  <CoinChangeDay $type={coin.percent_change_24h.includes('-')}>
                    {coin.percent_change_24h} %
                  </CoinChangeDay>
                </CoinWrapper>
              ))}
            </ul>
          </Container>
        )
      )}
      <ButtonPrev disabled={isFetching} onClick={handlePrev}>
        <div></div>
      </ButtonPrev>
      <ButtonNext disabled={isFetching} onClick={handleNext}>
        <div></div>
      </ButtonNext>
    </RatesWrapper>
  )
}
