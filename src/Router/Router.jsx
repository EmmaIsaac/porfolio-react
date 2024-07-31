import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Home/Home";
import ContactView from "../Views/ContactView/ContactView";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contacto" element={<ContactView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;