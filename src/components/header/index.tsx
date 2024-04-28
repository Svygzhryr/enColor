import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../logo'
import { HeaderWrapper, NavButton } from './style'

export const Header = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <HeaderWrapper>
      <Link to="/rates">
        <NavButton isactive={pathname === '/rates' ? 1 : 0}>Rates</NavButton>
      </Link>
      <Logo />
      <Link to="/news">
        <NavButton isactive={pathname === '/news' ? 1 : 0}>News</NavButton>
      </Link>
    </HeaderWrapper>
  )
}
