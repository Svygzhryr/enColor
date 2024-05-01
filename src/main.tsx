import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/index.tsx'
import './styles/reset.css'
import './styles/index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Rates } from './pages/rates/index.tsx'
import { News } from './pages/news/index.tsx'
import { Header } from './components/header/index.tsx'
import ErrorBoundary from './utils/errorBoundary.tsx'
import { AppWrapper } from './styles/main.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <AppWrapper>
              <Header />
              <Routes>
                <Route path="/" Component={App} />
                <Route path="/rates" Component={Rates} />
                <Route path="/news" Component={News} />
              </Routes>
            </AppWrapper>
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>
)
