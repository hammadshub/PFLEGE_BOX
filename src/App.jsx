import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import OrderBox from "./Pages/OrderBox";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/orderbox" element={<OrderBox/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>
            
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
