import { Logo } from '../logo'
import { HeaderWrapper, NavButton } from './style'

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <NavButton>Rates</NavButton>
        <Logo />
        <NavButton>News</NavButton>
      </HeaderWrapper>
    </>
  )
}
