import News from "./components/News/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes> 
      <Route path="/" element={<News/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;


