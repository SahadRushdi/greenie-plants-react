import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
    </Routes>
    </>
  )
}

export default App
