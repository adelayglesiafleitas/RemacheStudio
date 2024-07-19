import "./App.css";
import "./components/footer/Footer.css";
import "./components/Header/Header.css";
/*import {  Header,  Main,  Footer,  Films,  Fotografia,  Publicidad,  MotionGraphic,  DisenoGrafico,  Proyectos3d,} from "./App.js";*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Films from "./pages/Films/Films.jsx";
import Fotografia from "./pages/Fotografia/Fotografia.jsx";
import Publicidad from "./pages/Publicidad/Publicidad.jsx";
import MotionGraphic from "./pages/MotionGraphic/MotionGraphic.jsx";
import DisenoGrafico from "./pages/DisenoGrafico/DisenoGrafico.jsx";
import Proyectos3d from "./pages/Proyectos3d/Proyectos3d.jsx";
function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
          <Route path="/fotografia" element={<Fotografia />} />
          <Route path="/publicidad" element={<Publicidad />} />
          <Route path="/motionGraphic" element={<MotionGraphic />} />
          <Route path="/disenoGrafico" element={<DisenoGrafico />} />
          <Route path="/proyectos3d" element={<Proyectos3d />} />
          <Route path="*" element={<Main />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
