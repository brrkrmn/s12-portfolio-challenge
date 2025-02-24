import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LangContextProvider from './context/LangContext/LangContext.tsx'
import ThemeContextProvider from './context/ThemeContext/ThemeContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LangContextProvider>
  </StrictMode>,
)
