import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import '@/app/styles/main.scss'
import App from './App.tsx'
import { CartProvider } from './app/contexts/cart/CartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
