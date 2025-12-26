import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShowList from './show_list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowList />
  </StrictMode>
)
