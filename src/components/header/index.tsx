import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../logo'
import { HeaderWrapper, NavButton } from './style'

export const Header = () => {
  const location = useLocation()
  const { pathname } = location

  return (
    <HeaderWrapper>
      <Link to="/rates">
        <NavButton isactive={pathname === '/rates'}>Rates</NavButton>
      </Link>
      <Logo />
      <Link to="/news">
        <NavButton isactive={pathname === '/news'}>News</NavButton>
      </Link>
    </HeaderWrapper>
  )
}
