import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Routess from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routess />
      <Footer />
    </BrowserRouter>
  )
}

export default App
