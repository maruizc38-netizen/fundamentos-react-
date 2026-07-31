import "./App.css";
import Header from "./components/header";
import Perfil from "./components/perfil";
import Cursos from "./components/cursos";
import Piepag from "./components/footer";

function App() {
  return (
    <div className="contenedor">
      <Header />
      <Perfil />
      <Cursos />
      <Piepag />
    </div>
  );
}

export default App;