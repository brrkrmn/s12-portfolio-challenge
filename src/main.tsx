import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LangContextProvider from './context/LangContext/LangContext.tsx'
import ThemeContextProvider from './context/ThemeContext/ThemeContext.tsx'
import './index.css'
import ReactQueryProvider from './providers/ReactQueryProvider/ReactQueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <ReactQueryProvider>
        <LangContextProvider>
          <ThemeContextProvider>
            <ToastProvider />
            <App />
          </ThemeContextProvider>
        </LangContextProvider>
      </ReactQueryProvider>
    </HeroUIProvider>
  </StrictMode>,
)
