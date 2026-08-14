import { useState } from "react";

// Modelo vacio de una experiencia; funciones y habilidades son arreglos.
const experienciaInicial = {
  empresa: "",
  cargo: "",
  tiempo: "",
  funciones: [],
  habilidades: [],
};

function FormularioExperiencia({ datos, guardarDatos, anterior, siguiente }) {
  // Guarda la experiencia que se esta creando antes de llevarla a App.jsx.
  const [experiencia, setExperiencia] = useState(experienciaInicial);
  // Guarda el texto temporal de una nueva funcion o habilidad.
  const [nuevaFuncion, setNuevaFuncion] = useState("");
  const [nuevaHabilidad, setNuevaHabilidad] = useState("");

  const actualizarCampo = (event) => {
    setExperiencia((actual) => ({ ...actual, [event.target.name]: event.target.value }));
  };

  // Agrega un texto al arreglo indicado dentro de la experiencia temporal.
  const agregarElemento = (campo, texto, limpiarTexto) => {
    const elemento = texto.trim();
    if (!elemento) return;

    setExperiencia((actual) => ({ ...actual, [campo]: [...actual[campo], elemento] }));
    limpiarTexto("");
  };

  // filter crea una copia sin el elemento que tiene ese indice.
  const eliminarElemento = (campo, indice) => {
    setExperiencia((actual) => ({
      ...actual,
      [campo]: actual[campo].filter((_, i) => i !== indice),
    }));
  };

  const agregarExperiencia = () => {
    if (!experiencia.empresa.trim() || !experiencia.cargo.trim()) return;

    guardarDatos({ experiencias: [...datos.experiencias, { ...experiencia }] });
    setExperiencia(experienciaInicial);
  };

  const eliminarExperiencia = (indice) => {
    guardarDatos({ experiencias: datos.experiencias.filter((_, i) => i !== indice) });
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
          <input id="tiempo" name="tiempo" type="text" placeholder="Ejemplo: 1 ano" value={experiencia.tiempo} onChange={actualizarCampo} />
        </div>

        <div className="grupo">
          <label htmlFor="funciones">Funciones desempenadas</label>
          <input id="funciones" type="text" placeholder="Agregar funcion" value={nuevaFuncion} onChange={(event) => setNuevaFuncion(event.target.value)} />
          <button type="button" onClick={() => agregarElemento("funciones", nuevaFuncion, setNuevaFuncion)}>Agregar funcion</button>
          <div className="lista-elementos">
            {experiencia.funciones.map((funcion, indice) => (
              <div className="elemento" key={`${funcion}-${indice}`}>
                <span>{funcion}</span>
                <button type="button" onClick={() => eliminarElemento("funciones", indice)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>

        <div className="grupo">
          <label htmlFor="habilidades">Habilidades tecnicas</label>
          <input id="habilidades" type="text" placeholder="Agregar habilidad" value={nuevaHabilidad} onChange={(event) => setNuevaHabilidad(event.target.value)} />
          <button type="button" onClick={() => agregarElemento("habilidades", nuevaHabilidad, setNuevaHabilidad)}>Agregar habilidad</button>
          <div className="lista-elementos">
            {experiencia.habilidades.map((habilidad, indice) => (
              <div className="elemento" key={`${habilidad}-${indice}`}>
                <span>{habilidad}</span>
                <button type="button" onClick={() => eliminarElemento("habilidades", indice)}>Eliminar</button>
              </div>
            ))}
          </div>
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
