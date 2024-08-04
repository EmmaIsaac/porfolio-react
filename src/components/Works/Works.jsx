// import { useState } from "react";
import { WorksArt } from "./WorksArt";

const workExperience = [
    {
        id: 1,
        company: "Tech Innovators Ltd.",
        years: "2 años.",
        role: "Desarrollador Frontend.",
        description: "Responsable del desarrollo y mantenimiento de interfaces web utilizando React y Redux. Implementé soluciones escalables y colaboré en la mejora de la experiencia del usuario."
    },
    {
        id: 2,
        company: "Creative Solutions Inc.",
        years: "1 año.",
        role: "Desarrollador Backend.",
        description: "Desarrollé y optimicé servicios RESTful utilizando Node.js y Express. Trabajé en la integración de bases de datos y la implementación de APIs seguras y eficientes."
    },
    {
        id: 3,
        company: "Global Tech Systems.",
        years: "3 años.",
        role: "Desarrollador Full Stack.",
        description: "Participé en el ciclo completo de desarrollo de software, desde el diseño y la implementación hasta la prueba y el despliegue. Utilicé tecnologías como Angular, Java Spring Boot y MongoDB."
    }
];


const Works = () => {

    const works = workExperience;

    return (
        <section>
            <h2>Esperiencia Laboral</h2>
            {works.map((work) => {
                return (
                    <WorksArt
                        key={work.id}
                        company={work.company}
                        years={work.years}
                        role={work.role}
                        description={work.description}
                    />
                )
            })}
        </section>

    )
}

export default Works;