import { createRoot } from 'react-dom/client'
import 'assets/css/index.css'
import App from 'providers/app'

createRoot(document.getElementById('root')!).render(
  <App />
)
