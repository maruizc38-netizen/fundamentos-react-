import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import "./App.css";
import FormularioAcademico from "./components/formularioacademico";
import FormularioExperiencia from "./components/formularioexperiencia";

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <div className="contenedor">
      <Header />
      {paso === 1 && <Formulario
      siguiente={()=>setPaso(2)} />}

      {paso === 2 && <FormularioAcademico 
      anterior={()=>setPaso(1)} 
      siguiente={()=>setPaso(3)} />}

      {paso === 3 && <FormularioExperiencia anterior={() => setPaso(2)} />}

      <Footer />
    </div>
  );
}

export default App;
