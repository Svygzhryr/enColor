import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/index.tsx'
import './styles/reset.css'
import './styles/index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Rates } from './pages/rates/index.tsx'
import { News } from './pages/news/index.tsx'
import { Header } from './components/header/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={App} />
            <Route path="/rates" Component={Rates} />
            <Route path="/news" Component={News} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
)
