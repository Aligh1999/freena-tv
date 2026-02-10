import { createRoot } from 'react-dom/client'
import 'assets/css/global.css'
import 'overlayscrollbars/overlayscrollbars.css'
import App from 'providers/app'

createRoot(document.getElementById('root')!).render(
  <App />
)
