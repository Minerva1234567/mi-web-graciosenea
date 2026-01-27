import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LaCasa from "./pages/LaCasa";
import Turismo from "./pages/Turismo";
import AprendizajeColaborativo from "./pages/AprendizajeColaborativo";
import Profesionales from "./pages/Profesionales";
import Contacto from "./pages/Contacto";

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
