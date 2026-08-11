function Formulario({ datos, guardarDatos, siguiente }) {
  const continuar = (event) => {
    event.preventDefault();
    siguiente();
  };

  const actualizarCampo = (event) => {
    const { name, value, files } = event.target;
    guardarDatos({ [name]: files ? files[0] ?? null : value });
  };

  return (
    <div className="formulario">
      <h2>Registro de aprendices</h2>
      <form onSubmit={continuar}>
        <div className="grupo">
          <label htmlFor="foto">Fotografía</label>
          <input id="foto" name="foto" type="file" accept="image/*" onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" name="nombre" type="text" value={datos.nombre} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="edad">Edad</label>
          <input id="edad" name="edad" type="number" value={datos.edad} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="ciudad">Ciudad</label>
          <input id="ciudad" name="ciudad" type="text" value={datos.ciudad} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="programa">Programa de formación</label>
          <input id="programa" name="programa" type="text" value={datos.programa} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" name="correo" type="email" value={datos.correo} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="ficha">Número de ficha</label>
          <input id="ficha" name="ficha" type="number" value={datos.ficha} onChange={actualizarCampo} required />
        </div>
        <div className="grupo">
          <label htmlFor="jornada">Jornada</label>
          <select id="jornada" name="jornada" value={datos.jornada} onChange={actualizarCampo}>
            <option>Mañana</option><option>Tarde</option><option>Noche</option><option>Mixta</option>
          </select>
        </div>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default Formulario;
