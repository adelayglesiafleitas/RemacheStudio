import { Us, Works, Team, Services, TypeServices } from "./Main.js";
import DemoVfx from "./DemoVfx/DemoVfx.jsx";
import DemoMotionGraphics from "./DemoMotionGraphics/DemoMotionGraphics.jsx";
import "./Main.css";
import { useState } from "react";
import CV from "./CV/CV.jsx";
function Main() {
  const [cV, setCV] = useState(false);
  const [worker, setWorker] = useState(0);
  const [service, setService] = useState(false);
  const [serviceSelect, setServiceSelect] = useState(0);

  return (
    <main>
      {cV ? (
        <CV worker={worker} setCV={setCV} cV={cV} />
      ) : service ? (
        <TypeServices setService={setService} serviceSelect={serviceSelect} />
      ) : (
        <>
          <Us />
          <Works />
          <DemoVfx />
          <Team setWorker={setWorker} setCV={setCV} />
          <DemoMotionGraphics />
          <Services
            setService={setService}
            setServiceSelect={setServiceSelect}
          />
        </>
      )}
    </main>
  );
}

export default Main;
