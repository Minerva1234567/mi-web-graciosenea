import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import LaCasa from "./LaCasa";
import Turismo from "./Turismo";
import AprendizajeColaborativo from "./AprendizajeColaborativo";
import Profesionales from "./Profesionales";
import Contacto from "./Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-casa" element={<LaCasa />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/aprendizaje-colaborativo" element={<AprendizajeColaborativo />} />
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
