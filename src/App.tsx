import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './page/home'
import About from './page/about'
import Contact from './page/contact'
import Faq from './page/faq'

import './css/App.scss'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </Router>
  )
}
