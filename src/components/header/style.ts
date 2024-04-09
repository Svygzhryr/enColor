import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 400px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 20px 20px;

  background-color: #151522;
`
export const NavButton = styled.button`
  color: #e6e6f5;
  font-size: 24px;
  font-family: 'Outfit', sans-serif;

  border: none;
  background: transparent;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #8080f5;
  }
`
