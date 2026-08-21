import { useState } from "react";

// Modelo vacio de una experiencia: cada elemento de experiencias tiene esta forma.
const experienciaInicial = {
  empresa: "",
  cargo: "",
  tiempo: "",
  funciones: "",
  habilidades: "",
};

function FormularioExperiencia({ datos, guardarDatos, anterior, siguiente }) {
  // Estado temporal para llenar una experiencia antes de agregarla a App.jsx.
  const [experiencia, setExperiencia] = useState(experienciaInicial);

  // Copia el objeto temporal y modifica solo el campo escrito.
  const actualizarCampo = (event) => {
    setExperiencia((actual) => ({ ...actual, [event.target.name]: event.target.value }));
  };

  // Agrega una copia de la experiencia al arreglo compartido de experiencias.
  const agregarExperiencia = () => {
    if (!experiencia.empresa.trim() || !experiencia.cargo.trim()) return;

    guardarDatos({
      experiencias: [...datos.experiencias, { ...experiencia }],
    });
    setExperiencia(experienciaInicial);
  };

  // filter devuelve todas las experiencias excepto la que se quiere eliminar.
  const eliminarExperiencia = (indice) => {
    guardarDatos({
      experiencias: datos.experiencias.filter((_, i) => i !== indice),
    });
  };

  return (
    <div className="formulario">
      <h2>Experiencia laboral</h2>
      <form onSubmit={(event) => { event.preventDefault(); siguiente(); }}>
        <div className="grupo">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" value={experiencia.empresa} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="cargo">Cargo</label>
          <input id="cargo" name="cargo" type="text" value={experiencia.cargo} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="tiempo">Tiempo trabajado</label>
          <input id="tiempo" name="tiempo" type="text" placeholder="Ejemplo: 1 año" value={experiencia.tiempo} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="funciones">Funciones desempenadas</label>
          <textarea id="funciones" name="funciones" rows="3" value={experiencia.funciones} onChange={actualizarCampo} />
        </div>
        <div className="grupo">
          <label htmlFor="habilidades">Habilidades tecnicas</label>
          <textarea id="habilidades" name="habilidades" rows="3" value={experiencia.habilidades} onChange={actualizarCampo} />
        </div>
        <button type="button" onClick={agregarExperiencia}>Agregar experiencia</button>

        {/* map recorre el arreglo y crea una tarjeta por cada experiencia. */}
        <div className="lista-experiencias">
          {datos.experiencias.map((item, indice) => (
            <article className="experiencia" key={`${item.empresa}-${item.cargo}-${indice}`}>
              <div>
                <strong>{item.cargo}</strong>
                <span>{item.empresa} · {item.tiempo || "Tiempo no especificado"}</span>
              </div>
              <button type="button" onClick={() => eliminarExperiencia(indice)}>Eliminar</button>
            </article>
          ))}
        </div>

        <div className="acciones-formulario">
          <button type="button" onClick={anterior}>Anterior</button>
          <button type="submit">Vista previa</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioExperiencia;










