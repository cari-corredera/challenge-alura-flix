import { Link } from "react-router-dom";


function CabeceraLink({ url, children }) {
    return (
        <Link to={url}>
            {children}
        </Link>

    )
}

export default CabeceraLink;

