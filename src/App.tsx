import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Carrinho from './components/Carrinho'
import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { store } from './store'
import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Footer />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}

export default App
