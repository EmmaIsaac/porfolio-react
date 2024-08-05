import './Works.css'

// eslint-disable-next-line react/prop-types
export const WorksArt = ({ company, years, role, description }) => {
    return (
        <article className='work'>
            <h3>{company}</h3>
            <h4>{years}</h4>
            <h4>{role}</h4>
            <p>{description}</p>
        </article>
    )
}
