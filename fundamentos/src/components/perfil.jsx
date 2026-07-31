import foto from "../assets/fotomia.jpg";
function Perfil(){
    return(
        <section className="Perfil">
            <h1>Miguel Angel Ruiz Chamorro</h1>
            <img src={foto} alt="Foto de perfil" />
                <h3>INFORMACION PERSONAL: </h3>
                <p>19 años</p>
                <p>Bogotá</p>
                <p>maruizc38@gmail.com</p>
                <p>Analisis y desarrollo de software</p>
                <h3>CURSOS REALIZADOS</h3>
                <p>Tecnico en programacion de software - SENA</p>
                <p>Curso en la lengua inglesa - ASW</p>
                <h3>OBJETIVO PROFESIONAL</h3>
                <p>Deseo aprender React para fortalecer mis habilidades en el desarrollo frontend y crear aplicaciones web modernas, dinámicas e intuitivas. Me gustaría aplicar este conocimiento en proyectos de gestión, comercio electrónico y plataformas que mejoren la experiencia de los usuarios.</p>

        </section>

    )
}

export default Perfil