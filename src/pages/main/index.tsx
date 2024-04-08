import { useEffect, useReducer, useState } from 'react'
import './app.css'
import { IColorResponse } from '../../types/api'
import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '../../redux/selectors'
import { increment } from '../../redux/basicSlice'

function App() {
  const [schema, setSchema] = useState({} as IColorResponse)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

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

  const buttonFunc = () => {
    dispatch(increment())
  }

  return (
    <>
      <div className="root">
        {schema.colors &&
          schema.colors.map((color) => {
            return (
              <span
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: color.hex.value,
                  fontSize: '16px',
                }}
              >
                {color.rgb.value}
              </span>
            )
          })}
      </div>
      <button onClick={buttonFunc}>{count}</button>
    </>
  )
}

export default App
