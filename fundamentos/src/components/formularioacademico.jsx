import { useState } from "react";

function FormularioAcademico({ siguiente: onSiguiente, anterior: onAnterior }) {
  const [nivelFormacion, setNivelFormacion] = useState("Tecnólogo");
  const [titulo, setTitulo] = useState("");
  const [cursos, setCursos] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [fechaFinalizacion, setFechaFinalizacion] = useState("");

  const manejarSiguiente = (event) => {
    event.preventDefault();
    onSiguiente?.();
  };

  const manejarAnterior = () => {
    onAnterior?.();
  };

  return (
    <div className="formulario">
      <h2>Formación académica</h2>

      <form onSubmit={manejarSiguiente}>
        <div className="grupo">
          <label htmlFor="nivel-formacion">Nivel de formación</label>
          <select
            id="nivel-formacion"
            value={nivelFormacion}
            onChange={(event) => setNivelFormacion(event.target.value)}
          >
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Técnico">Técnico</option>
            <option value="Pregrado">Pregrado</option>
          </select>
        </div>

        <div className="grupo">
          <label htmlFor="titulo">Título obtenido</label>
          <input
            id="titulo"
            type="text"
            placeholder="Ingrese su título"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="cursos">Cursos realizados</label>
          <input
            id="cursos"
            type="text"
            placeholder="Ingrese los cursos realizados"
            value={cursos}
            onChange={(event) => setCursos(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="institucion">Institución educativa</label>
          <input
            id="institucion"
            type="text"
            placeholder="Ingrese la institución educativa"
            value={institucion}
            onChange={(event) => setInstitucion(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="fecha-finalizacion">Fecha de finalización</label>
          <input
            id="fecha-finalizacion"
            type="date"
            value={fechaFinalizacion}
            onChange={(event) => setFechaFinalizacion(event.target.value)}
          />
        </div>

        <button type="submit">Siguiente</button>
        <button type="button" onClick={manejarAnterior}>
          Anterior
        </button>
      </form>
    </div>
  );
}

export default FormularioAcademico;
