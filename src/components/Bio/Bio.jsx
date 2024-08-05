import Imagen from '../../assets/img/foto-de-perfil.jpeg'
import './Bio.css'

const Bio = () => {
    return (
        <section className='bio'>
            <div>
                <h1>Emmanuel Isaac</h1>
                <h4>Full stack Developer.</h4>
                <p>Paraná, Argentina.</p>
            </div>
            <div>
                <img className='picture' src={Imagen} alt="Foto de perfil" />
            </div>
        </section>
    )
}

export default Bio;