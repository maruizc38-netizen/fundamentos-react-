import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import FormularioAcademico from "./components/formularioacademico";
import FormularioExperiencia from "./components/formularioexperiencia";
import VistaPrevia from "./components/vistaprevia";
import "./App.css";

// Estado inicial compartido por todos los pasos del formulario.
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
  // Arreglo de objetos: permite guardar varias experiencias laborales.
  experiencias: [],
};

function App() {
  // Controla qué formulario se muestra: 1, 2, 3 o el resumen (4).
  const [paso, setPaso] = useState(1);
  // Guarda toda la información de la persona en un solo estado compartido.
  const [persona, setPersona] = useState(datosIniciales);

  // Une el dato nuevo con los datos anteriores sin perderlos.
  const actualizarDatos = (nuevosDatos) => {
    setPersona((datosActuales) => ({ ...datosActuales, ...nuevosDatos }));
  };

  // Reinicia el formulario después de confirmar el registro.
  const finalizarRegistro = () => {
    setPersona(datosIniciales);
    setPaso(1);
  };

  return (
    <div className="contenedor">
      <Header />
      {/* Se muestra un componente distinto según el paso actual. */}
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
