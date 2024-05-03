import styled from 'styled-components'

export const LogoContainer = styled.div`
  position: relative;
  padding-top: 10px;
  margin: 0 30px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    margin: 0 10px;
    span {
      font-size: 28px;
    }
  }
`

export const LogoCRY = styled.span`
  font-size: 38px;
  color: ${(props) => props.theme.colors.l1};
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  font-style: italic;
`

export const LogoO = styled.span`
  font-size: 38px;
  color: ${(props) => props.theme.colors.m1};
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
`
