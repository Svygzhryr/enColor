import React, { useEffect } from 'react'
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
import { useSelector } from 'react-redux'
import { selectPage } from '../../redux/selectors'

export const Rates = () => {
  const currentPage = useSelector(selectPage)
  const { data, error, isLoading } = useGetAllCoinsQuery({
    start: 0,
    limit: 10,
  })

  const handlePrev = () => {}

  const handleNext = () => {}

  return (
    <RatesWrapper>
      <ButtonPrev onClick={handlePrev}>
        <div></div>
      </ButtonPrev>

      {isLoading ? (
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
      <ButtonNext onClick={handleNext}>
        <div></div>
      </ButtonNext>
    </RatesWrapper>
  )
}
