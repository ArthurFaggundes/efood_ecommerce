import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Food from './pages/Food'

const RoutePaths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant-menu/:id" element={<Food />} />
  </Routes>
)

export default RoutePaths
