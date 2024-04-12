import { Link } from 'react-router-dom'
import { Logo } from '../logo'
import { HeaderWrapper, NavButton } from './style'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/rates">
        <NavButton>Rates</NavButton>
      </Link>
      <Logo />
      <Link to="/news">
        <NavButton>News</NavButton>
      </Link>
    </HeaderWrapper>
  )
}
