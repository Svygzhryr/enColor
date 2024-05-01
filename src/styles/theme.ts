import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  colors: {
    d1: '#0D0D13',
    d1t: '#0D0D1390',
    d2: '#151522',
    d3: '#1C1C30',
    d3t: '#1C1C3090',
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

export const lightTheme = {
  colors: {
    d1: '#E6E6F5',
    d1t: '#E6E6F590',
    d2: '#d8d8e6',
    d3: '#c9c9d6',
    d3t: '#c9c9d690',
    m1: '#2e2ee8',
    m2: '#2626a6',
    m3: '',
    l1: '#0D0D13',
    l2: '#181824',
    l3: '',
    rise: '#115700',
    fall: '#a80202',
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
