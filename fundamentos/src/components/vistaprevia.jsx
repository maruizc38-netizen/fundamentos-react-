import { useEffect, useMemo } from "react";

const valor = (dato) => dato || "No especificado";

function VistaPrevia({ persona, anterior, enviar }) {
  const urlFoto = useMemo(
    () => (persona.foto ? URL.createObjectURL(persona.foto) : null),
    [persona.foto],
  );

  useEffect(() => () => {
    if (urlFoto) URL.revokeObjectURL(urlFoto);
  }, [urlFoto]);

  const confirmarEnvio = () => {
    alert("¡Registro completado exitosamente!");
    enviar?.();
  };

  return (
    <main className="formulario vista-previa">
      <h2>Resumen de la hoja de vida</h2>
      {urlFoto && <img className="foto-perfil" src={urlFoto} alt={`Fotografía de ${persona.nombre}`} />}

      <section className="seccion-resumen">
        <h3>Datos personales</h3>
        <p><strong>Nombre:</strong> {valor(persona.nombre)}</p><p><strong>Edad:</strong> {valor(persona.edad)}</p>
        <p><strong>Ciudad:</strong> {valor(persona.ciudad)}</p><p><strong>Programa:</strong> {valor(persona.programa)}</p>
        <p><strong>Correo:</strong> {valor(persona.correo)}</p><p><strong>Ficha:</strong> {valor(persona.ficha)}</p>
        <p><strong>Jornada:</strong> {valor(persona.jornada)}</p>
      </section>
      <section className="seccion-resumen">
        <h3>Formación académica</h3>
        <p><strong>Nivel:</strong> {valor(persona.nivel)}</p><p><strong>Institución:</strong> {valor(persona.institucion)}</p>
        <p><strong>Título:</strong> {valor(persona.titulo)}</p><p><strong>Fecha de finalización:</strong> {valor(persona.anio)}</p>
        <p><strong>Cursos:</strong> {valor(persona.cursos)}</p>
      </section>
      <section className="seccion-resumen">
        <h3>Experiencia</h3>
        <p><strong>Empresa:</strong> {valor(persona.empresa)}</p><p><strong>Tipo:</strong> {valor(persona.tipoExperiencia)}</p>
        <p><strong>Cargo:</strong> {valor(persona.cargo)}</p><p><strong>Funciones:</strong> {valor(persona.funciones)}</p>
        <p><strong>Habilidades:</strong> {valor(persona.habilidades)}</p>
      </section>
      <div className="acciones-formulario">
        <button type="button" onClick={anterior}>Editar datos</button>
        <button type="button" className="boton-confirmar" onClick={confirmarEnvio}>Confirmar y enviar</button>
      </div>
    </main>
  );
}

export default VistaPrevia;
