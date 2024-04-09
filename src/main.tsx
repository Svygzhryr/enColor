import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/index.tsx'
import './styles/reset.css'
import './styles/index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
