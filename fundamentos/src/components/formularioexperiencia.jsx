function FormularioExperiencia({ datos, guardarDatos, anterior, siguiente }) {
  const actualizarCampo = (event) => guardarDatos({ [event.target.name]: event.target.value });

  return (
    <div className="formulario">
      <h2>Experiencia</h2>
      <form onSubmit={(event) => { event.preventDefault(); siguiente(); }}>
        <div className="grupo"><label htmlFor="empresa">Nombre de la empresa</label><input id="empresa" name="empresa" type="text" value={datos.empresa} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="tipoExperiencia">Tipo de experiencia</label><select id="tipoExperiencia" name="tipoExperiencia" value={datos.tipoExperiencia} onChange={actualizarCampo}><option>Laboral</option><option>Práctica</option><option>Proyecto personal</option><option>Voluntariado</option></select></div>
        <div className="grupo"><label htmlFor="habilidades">Habilidades técnicas</label><textarea id="habilidades" name="habilidades" rows="3" value={datos.habilidades} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="cargo">Cargo</label><input id="cargo" name="cargo" type="text" value={datos.cargo} onChange={actualizarCampo} /></div>
        <div className="grupo"><label htmlFor="funciones">Funciones desempeñadas</label><textarea id="funciones" name="funciones" rows="4" value={datos.funciones} onChange={actualizarCampo} /></div>
        <div className="acciones-formulario"><button type="button" onClick={anterior}>Anterior</button><button type="submit">Vista previa</button></div>
      </form>
    </div>
  );
}

export default FormularioExperiencia;
