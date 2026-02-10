import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SearchBox from './SearchBox'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchBox />
  </StrictMode>,
)
