import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    d1: '#0D0D13',
    d2: '#151522',
    d3: '#1C1C30',
    m1: '#8080F5',
    m2: '#474784',
    m3: '',
    l1: '#E6E6F5',
    l2: '#67679e',
    l3: '',
    rise: '#99f580',
    fall: '#f59080',
  },
  fonts: ['Outfit'],
}

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  font-family: 'Outfit', sans-serif;
}
`
