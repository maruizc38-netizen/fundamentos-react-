import {useState} from "react";
function FormularioAcademico({ datos, guardarDatos, siguiente, anterior }) {
  //definir estado de los cursos
  const [nuevoCurso, setNuevoCurso] = useState("");
  const actualizarCampo = (event) => guardarDatos({ [event.target.name]: event.target.value });

  return (
    <div className="formulario">
      <h2>Formación académica</h2>
      <form onSubmit={(event) => { event.preventDefault(); siguiente(); }}>
        <div className="grupo">
          <label htmlFor="nivel">Nivel de formación</label>
          <select id="nivel" name="nivel" value={datos.nivel} onChange={actualizarCampo}>
            <option>Tecnólogo</option><option>Técnico</option><option>Pregrado</option>
          </select>
        </div>
        <div className="grupo"><label htmlFor="titulo">Título obtenido</label><input id="titulo" name="titulo" type="text" value={datos.titulo} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="cursos">Cursos realizados</label><input id="cursos" name="cursos" type="text" value={datos.cursos} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="institucion">Institución educativa</label><input id="institucion" name="institucion" type="text" value={datos.institucion} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="anio">Fecha de finalización</label><input id="anio" name="anio" type="date" value={datos.anio} onChange={actualizarCampo} /></div>
        <div className="acciones-formulario"><button type="button" onClick={anterior}>Anterior</button><button type="submit">Siguiente</button></div>
      </form>
    </div>
  );
}

export default FormularioAcademico;



