import {
  Container,
  Grid,
  GridItem,
  GridItemDesc,
  GridItemName,
  GridItemValue,
  MarketItem,
  Markets,
  Title,
} from './styles'
import {
  useGetAllMarketsQuery,
  useGetGlobalStatsQuery,
} from '../../redux/apiSlice'
import { globalStatDesc, globalStatKeys } from '../../utils/globalStats'
import { Loader } from '../../components/loader'
import link from '../../assets/link.svg'
import linklight from '../../assets/link-light.svg'
import { selectTheme } from '../../redux/selectors'
import { useSelector } from 'react-redux'

const Home = () => {
  const { data: statsData, isLoading: statsIsLoading } =
    useGetGlobalStatsQuery()
  const { data: marketData, isLoading: marketIsLoading } =
    useGetAllMarketsQuery()
  const theme = useSelector(selectTheme)

  return (
    <>
      <Container>
        <Title>Global stats</Title>
        {statsIsLoading ? (
          <Loader />
        ) : (
          statsData && (
            <Grid>
              {Object.keys(statsData).map((key, index) => {
                const values = Object.values(statsData)
                if (!values[index]) return
                let type
                if (globalStatKeys[index].includes('Change')) {
                  values[index][0] === '-' ? (type = 'fall') : (type = 'rise')
                } else {
                  type = 'm1'
                }
                return (
                  <GridItem key={`${key}`}>
                    <GridItemDesc>{globalStatDesc[index]}</GridItemDesc>
                    <GridItemName>{globalStatKeys[index]}</GridItemName>
                    <GridItemValue $type={type}>
                      {new Intl.NumberFormat('en-US').format(values[index])}
                      {index > 3 && '%'}
                    </GridItemValue>
                  </GridItem>
                )
              })}
            </Grid>
          )
        )}
        <Title>Top markets</Title>

        {marketIsLoading ? (
          <Loader />
        ) : (
          marketData && (
            <Markets>
              {marketData.map((market) => {
                const { name, country, volume_usd, url } = market
                return (
                  <MarketItem href={market.url} key={name}>
                    <div>
                      <h2>{name}</h2>
                      <h2>
                        {new Intl.NumberFormat('en-US').format(volume_usd)} $
                      </h2>
                      <h2>{country || 'N/A'}</h2>
                    </div>
                    <a target="_blank" href={url}>
                      <img src={theme === 'darkTheme' ? link : linklight}></img>
                    </a>
                  </MarketItem>
                )
              })}
            </Markets>
          )
        )}
      </Container>
    </>
  )
}

export default Home
