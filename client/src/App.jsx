import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
