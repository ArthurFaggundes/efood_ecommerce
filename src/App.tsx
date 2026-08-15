import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './components/Cart'

import Routess from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Routess />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
