import styled from 'styled-components'

export const HeaderWrapper = styled.header<{ isscrolled: number }>`
  width: 400px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;

  border-radius: 0 0 20px 20px;
  border-bottom: ${(props) =>
    props.isscrolled
      ? `2px solid ${props.theme.colors.m1}`
      : '2px solid transparent'};
  background-color: ${(props) =>
    props.isscrolled ? props.theme.colors.d3t : props.theme.colors.d2};
  z-index: 1000;
  backdrop-filter: ${(props) => (props.isscrolled ? `blur(5px)` : 'none')};

  transition: all 0.2s ease-in-out;

  @media (max-width: 450px) {
    width: 100%;
    border-radius: 0;
  }
`
export const NavButton = styled.button<{ isactive: number }>`
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
