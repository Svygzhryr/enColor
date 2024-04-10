import { useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { Container } from './styles'
import { IGlobalData } from '../../types/api'

const App = () => {
  const [globalData, setGlobalData] = useState({} as IGlobalData)

  useEffect(() => {
    const url = 'https://api.coinlore.net/api/global/'
    fetch(url, {
      method: 'GET',
    }).then(async (data) => {
      const body = await data.json()
      setGlobalData(body[0])
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <h1>Global crypto stats</h1>

        <ul>
          {Object.keys(globalData).map((key, index) => {
            const values = Object.values(globalData)
            return (
              <li>
                {key} - {values[index]}
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

export default App
