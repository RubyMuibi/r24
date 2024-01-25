import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Rum from "./pages/Rum/Rum"
import NotFound from "./components/NotFound/NotFound"

import Auth from "./components/Auth/Auth"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rum/:id" element={<Rum/>}/>
      <Route path="/auth" element={<Auth/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
