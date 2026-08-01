import { useState } from "react";

function Formulario({ siguiente }) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [programa, setPrograma] = useState("");
  const [ficha, setFicha] = useState("");
  const [jornada, setJornada] = useState("Mañana");

  const continuar = (event) => {
    event.preventDefault();
    siguiente?.();
  };

  return (
    <div className="formulario">
      <h2>Registro de aprendices</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label htmlFor="foto">Fotografía</label>
          <input id="foto" type="file" accept="image/*" />
        </div>

        <div className="grupo">
          <label htmlFor="nombre">Nombre completo</label>
          <input id="nombre" type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="edad">Edad</label>
          <input id="edad" type="number" value={edad} onChange={(event) => setEdad(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="ciudad">Ciudad</label>
          <input id="ciudad" type="text" value={ciudad} onChange={(event) => setCiudad(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="programa">Programa de formación</label>
          <input id="programa" type="text" value={programa} onChange={(event) => setPrograma(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" type="email" value={correo} onChange={(event) => setCorreo(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="ficha">Número de ficha</label>
          <input id="ficha" type="number" value={ficha} onChange={(event) => setFicha(event.target.value)} required />
        </div>

        <div className="grupo">
          <label htmlFor="jornada">Jornada</label>
          <select id="jornada" value={jornada} onChange={(event) => setJornada(event.target.value)}>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>
        </div>

        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default Formulario;
