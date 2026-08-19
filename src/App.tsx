import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import { store } from './store'
import { Provider } from 'react-redux'
import Cart from './components/Any/Cart'

import RoutePaths from './routes'
import Footer from './components/Any/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutePaths />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
