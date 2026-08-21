import { useEffect, useMemo } from "react";

// Muestra un texto amigable cuando un campo no fue diligenciado.
const valor = (dato) => dato || "No especificado";

// Las experiencias antiguas pueden traer arreglos y el textarea guarda texto.
// Esta funcion acepta ambos formatos y separa el texto por lineas.
const comoLista = (dato) => {
  if (Array.isArray(dato)) return dato;
  if (typeof dato !== "string") return [];

  return dato.split("\n").map((item) => item.trim()).filter(Boolean);
};

function VistaPrevia({ persona, anterior, enviar }) {
  // Crea una URL temporal para poder mostrar el archivo de imagen seleccionado.
  const urlFoto = useMemo(
    () => (persona.foto ? URL.createObjectURL(persona.foto) : null),
    [persona.foto],
  );

  // Libera la URL temporal cuando cambia la foto o se desmonta el componente.
  useEffect(() => () => {
    if (urlFoto) URL.revokeObjectURL(urlFoto);
  }, [urlFoto]);

  // Confirma el registro y pide a App que reinicie toda la informacion.
  const confirmarEnvio = () => {
    alert("Registro completado exitosamente.");
    enviar?.();
  };

  return (
    <main className="formulario vista-previa">
      <h2>Resumen de la hoja de vida</h2>
      {urlFoto && <img className="foto-perfil" src={urlFoto} alt={`Fotografia de ${persona.nombre}`} />}

      <section className="seccion-resumen">
        <h3>Datos personales</h3>
        <p><strong>Nombre:</strong> {valor(persona.nombre)}</p>
        <p><strong>Edad:</strong> {valor(persona.edad)}</p>
        <p><strong>Ciudad:</strong> {valor(persona.ciudad)}</p>
        <p><strong>Programa:</strong> {valor(persona.programa)}</p>
        <p><strong>Correo:</strong> {valor(persona.correo)}</p>
        <p><strong>Ficha:</strong> {valor(persona.ficha)}</p>
        <p><strong>Jornada:</strong> {valor(persona.jornada)}</p>
      </section>

      <section className="seccion-resumen">
        <h3>Formacion academica</h3>
        <p><strong>Nivel:</strong> {valor(persona.nivel)}</p>
        <p><strong>Institucion:</strong> {valor(persona.institucion)}</p>
        <p><strong>Titulo:</strong> {valor(persona.titulo)}</p>
        <p><strong>Fecha de finalizacion:</strong> {valor(persona.anio)}</p>
        <div className="detalle-cursos">
          <strong>Cursos:</strong>
          {/* map transforma cada curso del arreglo en un elemento de lista. */}
          {persona.cursos.length > 0 ? (
            <ul>
              {persona.cursos.map((curso, indice) => <li key={`${curso}-${indice}`}>{curso}</li>)}
            </ul>
          ) : (
            <span>No especificado</span>
          )}
        </div>
      </section>

      <section className="seccion-resumen">
        <h3>Experiencia</h3>
        {/* map muestra todos los objetos guardados en experiencias. */}
        {persona.experiencias.length > 0 ? (
          persona.experiencias.map((experiencia, indice) => (
            <article className="experiencia-resumen" key={`${experiencia.empresa}-${experiencia.cargo}-${indice}`}>
              <h4>{valor(experiencia.cargo)} - {valor(experiencia.empresa)}</h4>
              <p><strong>Tiempo:</strong> {valor(experiencia.tiempo)}</p>
              <div className="detalle-cursos">
                <strong>Funciones:</strong>
                {comoLista(experiencia.funciones).length > 0 ? <ul>{comoLista(experiencia.funciones).map((funcion, i) => <li key={`${funcion}-${i}`}>{funcion}</li>)}</ul> : <span>No especificado</span>}
              </div>
              <div className="detalle-cursos">
                <strong>Habilidades:</strong>
                {comoLista(experiencia.habilidades).length > 0 ? <ul>{comoLista(experiencia.habilidades).map((habilidad, i) => <li key={`${habilidad}-${i}`}>{habilidad}</li>)}</ul> : <span>No especificado</span>}
              </div>
            </article>
          ))
        ) : (
          <p>No especificado</p>
        )}
      </section>

      <div className="acciones-formulario">
        <button type="button" onClick={anterior}>Editar datos</button>
        <button type="button" className="boton-confirmar" onClick={confirmarEnvio}>Confirmar y enviar</button>
      </div>
    </main>
  );
}

export default VistaPrevia;
