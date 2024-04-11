import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/index.tsx'
import './styles/reset.css'
import './styles/index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Rates } from './pages/rates/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/rates',
    element: <Rates />,
  },
  // {
  //   path: '/news',
  //   element: <News />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
)
