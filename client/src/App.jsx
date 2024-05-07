import Header from "@layouts/header/Header.layout";
import Footer from "@layouts/footer/Footer.layout";
import Home from "@pages/home/Home.page";
import NotFound from "./layouts/not-found/NotFound.layout";
import AuthContextProvider from "@/contexts/Auth.context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
