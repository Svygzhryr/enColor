import { useDispatch, useSelector } from 'react-redux'
import { SwitchButton } from './style'
import { switchTheme } from '../../redux/basicSlice'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { selectTheme } from '../../redux/selectors'

export const ThemeSwitch = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const changeTheme = () => {
    dispatch(switchTheme())
  }

  return (
    <SwitchButton onClick={changeTheme}>
      <img src={theme === 'darkTheme' ? sun : moon} />
    </SwitchButton>
  )
}
