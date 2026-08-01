import { useState } from "react";

function FormularioExperiencia({ anterior }) {
  const [empresa, setEmpresa] = useState("");
  const [tipoExperiencia, setTipoExperiencia] = useState("Laboral");
  const [habilidades, setHabilidades] = useState("");
  const [cargo, setCargo] = useState("");
  const [funciones, setFunciones] = useState("");

  return (
    <div className="formulario">
      <h2>Experiencia</h2>

      <form>
        <div className="grupo">
          <label htmlFor="empresa">Nombre de la empresa</label>
          <input
            id="empresa"
            type="text"
            placeholder="Ingrese el nombre de la empresa"
            value={empresa}
            onChange={(event) => setEmpresa(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="tipo-experiencia">Tipo de experiencia</label>
          <select
            id="tipo-experiencia"
            value={tipoExperiencia}
            onChange={(event) => setTipoExperiencia(event.target.value)}
          >
            <option>Laboral</option>
            <option>Práctica</option>
            <option>Proyecto personal</option>
            <option>Voluntariado</option>
          </select>
        </div>

        <div className="grupo">
          <label htmlFor="habilidades">Habilidades técnicas</label>
          <textarea
            id="habilidades"
            rows="3"
            placeholder="Ejemplo: React, JavaScript, Git"
            value={habilidades}
            onChange={(event) => setHabilidades(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="cargo">Cargo</label>
          <input
            id="cargo"
            type="text"
            placeholder="Ingrese el cargo desempeñado"
            value={cargo}
            onChange={(event) => setCargo(event.target.value)}
          />
        </div>

        <div className="grupo">
          <label htmlFor="funciones">Funciones desempeñadas</label>
          <textarea
            id="funciones"
            rows="4"
            placeholder="Describa las funciones realizadas"
            value={funciones}
            onChange={(event) => setFunciones(event.target.value)}
          />
        </div>

        <button type="button" onClick={anterior}>Anterior</button>
        <button type="button">Vista previa</button>
      </form>
    </div>
  );
}

export default FormularioExperiencia;
