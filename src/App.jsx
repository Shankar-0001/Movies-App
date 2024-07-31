import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<code>Oooo..ww your finding data is not available<Link to='/'>Try Again</Link></code>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
