import { Header } from '../../components/header'
import {
  Container,
  Grid,
  GridItem,
  GridItemName,
  GridItemValue,
  Title,
} from './styles'
import { useGetGlobalStatsQuery } from '../../redux/apiSlice'
import { globalStatKeys } from '../../utils/globalStats'

const App = () => {
  const { data, error, isLoading } = useGetGlobalStatsQuery()
  if (!data) return

  return (
    <>
      <Header />
      <Container>
        <Title>Global stats</Title>

        <Grid>
          {Object.keys(data).map((key, index) => {
            const values = Object.values(data)
            let type
            if (globalStatKeys[index].includes('Change')) {
              values[index][0] === '-' ? (type = 'fall') : (type = 'rise')
            } else {
              type = 'm1'
            }
            return (
              <GridItem key={`${key}`}>
                <GridItemName>{globalStatKeys[index]}</GridItemName>
                <GridItemValue $type={type}>{values[index]}</GridItemValue>
              </GridItem>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default App
