import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.instagram.com/" target='_blank'><i className='bx bxl-instagram-alt'></i></a>
                <a href="https://web.facebook.com/" target='_blank'><i className='bx bxl-facebook-square'></i></a>
                <a href="https://github.com/" target='_blank'><i className='bx bxl-github' ></i></a>
                <a href="https://ar.linkedin.com/" target='_blank'><i className='bx bxl-linkedin-square'></i></a>
            </div>
            <p>&copy; 2024. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer;