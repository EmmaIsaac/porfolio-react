/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet"

const Seo = (props) => {

    const { title, desc, kw } = props;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="keywords" content={kw} />
            </Helmet>
        </>
    )
}

export default Seo;