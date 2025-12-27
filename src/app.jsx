import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './app.css'
import JallikattuLists from './JalliKattuList'
import Details from "./detail";  

export function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<JallikattuLists />} />
        <Route path="/details" element={<Details />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}
