import { useState } from "react";

function FormularioAcademico({ datos, guardarDatos, siguiente, anterior }) {
  // Solo guarda temporalmente el curso que se esta escribiendo.
  const [nuevoCurso, setNuevoCurso] = useState("");

  // Actualiza propiedades academicas que viven en el estado compartido.
  const actualizarCampo = (event) => {
    guardarDatos({ [event.target.name]: event.target.value });
  };

  // Agrega el curso al arreglo usando una copia para no mutar el estado.
  const agregarCurso = () => {
    const curso = nuevoCurso.trim();
    if (!curso) return;

    guardarDatos({ cursos: [...datos.cursos, curso] });
    setNuevoCurso("");
  };

  // filter crea un nuevo arreglo sin el curso del indice recibido.
  const eliminarCurso = (indice) => {
    guardarDatos({ cursos: datos.cursos.filter((_, i) => i !== indice) });
  };

  return (
    <div className="formulario">
      <h2>Formacion academica</h2>
      <form onSubmit={(event) => { event.preventDefault(); siguiente(); }}>
        <div className="grupo">
          <label htmlFor="nivel">Nivel de formacion</label>
          <select id="nivel" name="nivel" value={datos.nivel} onChange={actualizarCampo}>
            <option>Tecnologo</option>
            <option>Tecnico</option>
            <option>Pregrado</option>
          </select>
        </div>

        <div className="grupo">
          <label htmlFor="cursos">Cursos</label>
          <input
            id="cursos"
            type="text"
            placeholder="Agregar curso"
            value={nuevoCurso}
            onChange={(event) => setNuevoCurso(event.target.value)}
          />
        </div>
        <button type="button" onClick={agregarCurso}>Agregar curso</button>

        {/* map crea una fila visual por cada curso guardado. */}
        <div className="lista-cursos">
          {datos.cursos.map((curso, indice) => (
            <div className="curso" key={`${curso}-${indice}`}>
              <span>{curso}</span>
              <button type="button" onClick={() => eliminarCurso(indice)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div className="grupo">
          <label htmlFor="titulo">Titulo obtenido</label>
          <input id="titulo" name="titulo" type="text" value={datos.titulo} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="institucion">Institucion educativa</label>
          <input id="institucion" name="institucion" type="text" value={datos.institucion} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="anio">Fecha de finalizacion</label>
          <input id="anio" name="anio" type="date" value={datos.anio} onChange={actualizarCampo} />
        </div>

        <div className="acciones-formulario">
          <button type="button" onClick={anterior}>Anterior</button>
          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioAcademico;
