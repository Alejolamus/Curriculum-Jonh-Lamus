import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
if (navEntry?.type === 'reload') {
  window.history.replaceState(null, '', '/Curriculum-Jonh-Lamus/');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
