import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter.jsx'
import { ThemeProvider } from './context/theme.context.jsx'
import { WeatherProvider } from './context/weather.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <AppRouter />
      </WeatherProvider>
    </ThemeProvider>
  </StrictMode>
)