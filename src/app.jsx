import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './app.css'
import JallikattuLists from './JalliKattuList'
import Details from "./detail"; 
import Navbar from "./components/navbar/navbar" ;

export function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
       <Route path="/" element={<JallikattuLists />} />
        <Route path="/details" element={<Details />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
