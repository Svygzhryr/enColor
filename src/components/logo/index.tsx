import { Link } from 'react-router-dom'
import { LogoCRY, LogoContainer, LogoO } from './style'

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <LogoContainer>
          <LogoCRY>CRY</LogoCRY>
          <LogoO>O</LogoO>
        </LogoContainer>
      </Link>
    </>
  )
}
