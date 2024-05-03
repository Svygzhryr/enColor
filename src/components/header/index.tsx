import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../logo'
import { HeaderWrapper, NavButton } from './style'
import { useEffect, useState } from 'react'
import { ThemeSwitch } from '../themeSwitch'

export const Header = () => {
  const location = useLocation()
  const { pathname } = location

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <HeaderWrapper isscrolled={isScrolled ? 1 : 0}>
        <Link to="/rates">
          <NavButton isactive={pathname === '/rates' ? 1 : 0}>Rates</NavButton>
        </Link>
        <Logo />
        <Link to="/news">
          <NavButton isactive={pathname === '/news' ? 1 : 0}>News</NavButton>
        </Link>
        <ThemeSwitch />
      </HeaderWrapper>
    </>
  )
}
