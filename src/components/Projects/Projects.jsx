import { ProjectsArt } from "./ProjectsArt";
import './Projects.css'

const projects = [
    {
        id: 1,
        name: "Sitio de E-commerce",
        url: "#",
        description: "Una plataforma de comercio electrónico con carrito de compras, gestión de productos y pagos en línea.",
    },
    {
        id: 2,
        name: "Blog Personal",
        url: "#",
        description: "Un blog personal donde comparto artículos sobre tecnología, desarrollo web y programación.",
    },
    {
        id: 3,
        name: "App de Gestión de Tareas",
        url: "#",
        description: "Una aplicación para gestionar tareas y proyectos con funcionalidades de seguimiento y colaboración en tiempo real.",
    },
    {
        id: 4,
        name: "Portafolio en Línea",
        url: "#",
        description: "Un sitio web que muestra mi portafolio de proyectos, habilidades y experiencia profesional.",
    }
];


export const Projects = () => {
    return (
        <section>
            <h2>Mis Proyectos</h2>
            <div className="box-projects">
                {projects.map((project) => {
                    return (
                        <ProjectsArt
                            key={project.id}
                            name={project.name}
                            url={project.url}
                            description={project.description}
                        />
                    )
                })}
            </div>
        </section>
    )
}
