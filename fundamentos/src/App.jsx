import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import FormularioAcademico from "./components/formularioacademico";
import FormularioExperiencia from "./components/formularioexperiencia";
import VistaPrevia from "./components/vistaprevia";
import "./App.css";

const datosIniciales = {
  foto: null,
  nombre: "",
  edad: "",
  ciudad: "",
  correo: "",
  programa: "",
  ficha: "",
  jornada: "Mañana",
  nivel: "Tecnólogo",
  titulo: "",
  cursos: [],
  institucion: "",
  anio: "",
  empresa: "",
  tipoExperiencia: "Laboral",
  habilidades: "",
  cargo: "",
  funciones: "",
};

function App() {
  const [paso, setPaso] = useState(1);
  const [persona, setPersona] = useState(datosIniciales);

  const actualizarDatos = (nuevosDatos) => {
    setPersona((datosActuales) => ({ ...datosActuales, ...nuevosDatos }));
  };

  const finalizarRegistro = () => {
    setPersona(datosIniciales);
    setPaso(1);
  };

  return (
    <div className="contenedor">
      <Header />
      {paso === 1 && (
        <Formulario
          datos={persona}
          guardarDatos={actualizarDatos}
          siguiente={() => setPaso(2)}
        />
      )}
      {paso === 2 && (
        <FormularioAcademico
          datos={persona}
          guardarDatos={actualizarDatos}
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}
      {paso === 3 && (
        <FormularioExperiencia
          datos={persona}
          guardarDatos={actualizarDatos}
          anterior={() => setPaso(2)}
          siguiente={() => setPaso(4)}
        />
      )}
      {paso === 4 && (
        <VistaPrevia
          persona={persona}
          anterior={() => setPaso(3)}
          enviar={finalizarRegistro}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
