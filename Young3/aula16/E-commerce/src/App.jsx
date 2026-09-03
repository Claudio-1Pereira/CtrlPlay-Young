import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import DetalheProduto from './DetalheProduto'
import Produto from './Produto'


export default function App() {
  return (
    <div className='max-w-screen max-h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/produto/:id' element={<DetalheProduto />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}