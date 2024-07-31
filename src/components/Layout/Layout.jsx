import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout = (prop) => {
    return (
        <>
            <Header />
            <main>{prop.children}</main>
            <Footer />
        </>
    )
}

export default Layout;