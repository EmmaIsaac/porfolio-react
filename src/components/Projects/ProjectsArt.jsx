import './Projects.css'
// eslint-disable-next-line react/prop-types
export const ProjectsArt = ({ name, url, description }) => {
    return (
        <article className="project">
            <a href={url} target='_blank'><h3>{name}</h3></a>
            <p>{description}</p>
        </article>
    )
}
