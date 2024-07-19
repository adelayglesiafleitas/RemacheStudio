import "./App.css";
import "./components/footer/Footer.css";
import "./components/Header/Header.css";
import {  Header,  Main,  Footer,  Films,  Fotografia,  Publicidad,  MotionGraphic,  DisenoGrafico,  Proyectos3d,} from "./App.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
