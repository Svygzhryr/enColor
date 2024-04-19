import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 400px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 20px 20px;

  background-color: ${(props) => props.theme.colors.d2};
`
export const NavButton = styled.button<{ isactive: boolean }>`
  color: ${(props) =>
    props.isactive ? props.theme.colors.m1 : props.theme.colors.l1};
  font-size: 24px;
  font-family: 'Outfit', sans-serif;

  border: none;
  background: transparent;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.m1};
  }
`
