import './Abilities.css'

const Abilities = () => {
    return (
        <section>
            <h2>Aptitudes</h2>
            <article>
                <p>Estas son algunas de las tecnologias de las que tengo conocimiento:</p>
                <div className='box-icon'>
                    <i className='bx bxl-javascript icon'></i>
                    <i className='bx bxl-typescript icon'></i>
                    <i className='bx bxl-react icon' ></i>
                    <i className='bx bxl-bootstrap icon'></i>
                    <i className='bx bxl-nodejs icon'></i>
                    <i className='bx bxl-mongodb icon' ></i>
                    <i className='bx bxl-spring-boot icon' ></i>
                    <i className='bx bxl-angular icon'></i>
                </div>
            </article>
        </section>
    )
}

export default Abilities;