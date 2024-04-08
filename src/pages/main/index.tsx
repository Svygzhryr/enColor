import { useEffect, useState } from 'react'
import './app.css'
import { IColorResponse } from '../../types/api'

function App() {
  const [schema, setSchema] = useState({} as IColorResponse)

  useEffect(() => {
    fetch(
      'https://www.thecolorapi.com/scheme?hex=24B1E0&mode=complement&count=6',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then(async (response) => {
      const data = await response.json()
      setSchema(data as IColorResponse)
    })
  }, [])

  return (
    <>
      <div className="root">
        {schema.colors &&
          schema.colors.map((color) => {
            return (
              <span
                style={{
                  height: '200px',
                  width: '200px',
                  backgroundColor: color.hex.value,
                  fontSize: '24px',
                }}
              >
                {color.rgb.value}
              </span>
            )
          })}
      </div>
    </>
  )
}

export default App
