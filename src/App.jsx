import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './component/navbar/Navbar'
import Footer from "./component/Footer/Footer"
import Donate from "./pages/Donate"
import Gallery from "./pages/Gallery"
import Address_navbar from './component/navbar/Address_navbar'


function App() {

  return (
   <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/gallery" element={<Gallery/>}/>

      </Routes>
    </Router>
    
   </>
  )
}

export default App
